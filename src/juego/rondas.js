// Rondas de Alta Tensión (mecánica desde noviembre de 2021 + etapa clásica 1998-2011).
import DATA from '../data/paneles.json';
import { me } from '../lib/audio.js';
import { $, esc, euros, baraja, azar, Dt, Zi, Reloj, VEL, hud, banner, elegir, habla, hablaC, leer, textoGrande, boteGrande, toast, di } from './core.js';
import { abrir, cerrar } from './tablero.js';
import { F, CONC } from './frases.js';

const AUTO = () => !!window.__AUTO;
const esHumano = c => c.humano && !AUTO();
// ---------- paneles ----------
const extra = () => window.PANELES_EXTRA || {};
export const listaPaneles = (musical = false) => [...(musical ? DATA.musicales : DATA.paneles), ...((extra().paneles || []).filter(p => !!p.musical === musical && p.t && p.c && p.i))];
export const listaParejas = () => [...DATA.parejas, ...((extra().parejas || []).filter(p => p.t && p.p && p.p.length >= 8))];
export function sacarPanel(G, nc, ni, { musical = false } = {}) {
  const todos = listaPaneles(musical).filter(p => p.c.length >= nc && p.i.length >= ni);
  let cand = todos.filter(p => !G.usados.has(p.t)); if (!cand.length) { todos.forEach(p => G.usados.delete(p.t)); cand = todos; }
  const p = azar(cand); G.usados.add(p.t);
  return { t: p.t, celdas: baraja([...baraja(p.c).slice(0, nc).map(t => ({ t, ok: true })), ...baraja(p.i).slice(0, ni).map(t => ({ t, ok: false }))]) };
}
// ---------- utilidades de turno ----------
export function refrescar(G, activo = null) {
  const i = activo ? G.conc.indexOf(activo) : -1; hud.set(G, i);
  G.conc.forEach(c => G.P.setAtril(c.atril, { nombre: c.nombre, color: c.color, dinero: euros(c.dinero + (c.ronda || 0)) }));
}
function luz(G, c, ok) {
  G.P.bombilla(c.atril, ok ? 'on' : 'rota'); me.play(ok ? 'acierto' : 'fallo'); if (!ok) setTimeout(() => me.play('ooh'), 250);
  const a = c.atril; setTimeout(() => G.P.bombilla(a, 'off'), ok ? 1300 : 2200);
}
function charla(c, tipo, prob = 0.45) { if (c.humano || Math.random() > prob) return; const t = azar(CONC[tipo]); di(t, 1800, c.atril, c.nombre); me.say(t, c.voz); }
const lado = (c, extra = {}) => ({ nombre: c.nombre, prof: c.prof, color: c.color, emoji: c.emoji, dinero: c.dinero, ...extra });
function botElige(c, celdas, disp, prop = 'ok', hab = null) { const p = hab ?? c.habil ?? 0.8; const buenas = disp.filter(i => celdas[i][prop]); if (buenas.length && Math.random() < p) return azar(buenas); return azar(disp); }
/** Espera la casilla del concursante (humano con reloj por turno; bots piensan un poco). Devuelve índice, 'PLANTA' o 'TIEMPO' */
async function turno(G, c, tb, disp, { plantar = false, seg = 20, prop = 'ok', hab = null } = {}) {
  if (!esHumano(c)) {
    await Dt(650 + Math.random() * 650);
    if (plantar && c.ronda >= 200 && Math.random() < Math.min(0.75, c.ronda / 900)) return 'PLANTA';
    return botElige(c, tb.T.celdas, disp, prop, hab);
  }
  const rel = G.ilimitado ? null : new Reloj(seg, s => tb.tiempo(s)).start();
  const bp = plantar && c.ronda > 0 ? tb.botones([{ label: '✋ Me planto', v: 'PLANTA', cls: 'pl' }]) : new Promise(() => {});
  try { return await tb.elegir(disp, [bp, rel ? rel.fin.then(() => 'TIEMPO') : new Promise(() => {})]); }
  finally { rel?.stop(); tb.tiempo(null); tb.limpiarBotones(); }
}
/** Pregunta con opciones dentro del tablero. Devuelve el índice elegido (o -1 si se agota el tiempo) */
async function preguntar(G, c, tb, texto, ops, correcta, { hab = 0.72, seg = 15, pre = '' } = {}) {
  const a = tb.T.el.querySelector('.tb-acc');
  a.innerHTML = pre + `<div class="tb-preg"><b>${esc(c.nombre)}</b> · ${esc(texto)}</div>`; const fila = document.createElement('div'); fila.className = 'tb-ops'; a.appendChild(fila);
  leer(texto);
  const bs = ops.map((o, k) => { const b = document.createElement('button'); b.className = 'tbb'; b.textContent = o; fila.appendChild(b); return b; });
  let r;
  if (!esHumano(c)) { await Dt(1300); r = Math.random() < hab ? correcta : azar(ops.map((_, k) => k).filter(k => k !== correcta)); }
  else {
    const rel = G.ilimitado ? null : new Reloj(seg, s => tb.tiempo(s)).start();
    r = await Zi(Promise.race([new Promise(res => bs.forEach((b, k) => b.onclick = e => { e.stopPropagation(); me.play('tecla'); res(k); })), rel ? rel.fin.then(() => -1) : new Promise(() => {})]));
    rel?.stop(); tb.tiempo(null);
  }
  bs.forEach((b, k) => { b.disabled = true; if (k === correcta) b.classList.add('okb'); else if (k === r) b.classList.add('kob'); });
  await Dt(1300); a.innerHTML = '';
  return r;
}

// =====================================================================
// Motor común de paneles por turnos (¡A por todas!, ¡Esa me suena!, Fíjate bien, paneles clásicos)
// =====================================================================
async function panelPorTurnos(G, { titulo, cat, celdas, valor = 100, jugadores, imagenIdx = -1, seguidas = false, plantar = true }) {
  const tb = abrir({ cat, celdas, titulo }); G.cam('pantalla');
  jugadores.forEach(c => { c.ronda = 0; c.plantado = false; c.yaJugo = false; });
  const nOk = celdas.filter(x => x.ok).length, nKo = celdas.length - nOk; let ok = 0, ko = 0, ptr = 0;
  const libres = () => tb.T.celdas.map((x, i) => (!x.est || x.est === 'tapada') ? i : -1).filter(i => i >= 0);
  const enJuego = () => jugadores.filter(c => !c.plantado && !(seguidas && c.yaJugo));
  await leer(cat);
  while (ok < nOk && enJuego().length) {
    if (ko >= nKo) { await habla(F.todasFuera); jugadores.forEach(c => { if (!c.plantado) c.ronda = 0; }); break; }
    let c = jugadores[ptr % jugadores.length]; let vueltas = 0;
    while ((c.plantado || (seguidas && c.yaJugo)) && vueltas++ < 8) { ptr++; c = jugadores[ptr % jugadores.length]; }
    refrescar(G, c); hud.ronda(`${titulo} · turno de ${c.nombre}`);
    const r = await turno(G, c, tb, libres(), { plantar });
    if (r === 'PLANTA') { c.plantado = true; c.dinero += c.ronda; c.ronda = 0; me.play('aplausos'); charla(c, 'planto', 1); toast(`✋ ${c.nombre} se planta`); ptr++; refrescar(G); await Dt(700); continue; }
    if (r === 'TIEMPO') { toast(`⏰ ${c.nombre}: ¡se acabó el tiempo!`); c.ronda = 0; if (seguidas) c.yaJugo = true; ptr++; refrescar(G); continue; }
    const cel = tb.T.celdas[r];
    if (cel.ok) {
      ok++; tb.marcar(r, 'ok'); luz(G, c, true); c.ronda += valor; charla(c, 'bien', 0.3); refrescar(G, c); await Dt(900);
      if (r === imagenIdx) await imagenOculta(G, c, tb);
      if (!seguidas) ptr++;
    } else {
      ko++; tb.marcar(r, 'ko'); luz(G, c, false); c.ronda = 0; charla(c, 'mal', 0.5); refrescar(G, c); await Dt(1100);
      if (seguidas) c.yaJugo = true; ptr++;
    }
  }
  jugadores.forEach(c => { if (!c.plantado) { c.dinero += c.ronda; } c.ronda = 0; c.plantado = false; });
  tb.revelar(); refrescar(G); await Dt(1800); cerrar(); hud.ronda('');
}
async function imagenOculta(G, c, tb) {
  const im = azar(DATA.imagenes); me.play('comodin');
  await habla(F.imagen);
  const r = await preguntar(G, c, tb, '¿Qué es esta imagen?', im.op, im.r, { hab: 0.75, pre: `<div class="tb-img">${im.e}</div>` });
  if (r === im.r) { c.comodines = Math.min(2, (c.comodines || 0) + 1); me.play('comodin'); await habla(F.imagenOk); }
  else { c.ronda -= 100; me.play('fallo'); await habla(F.imagenKo); }
  refrescar(G, c);
}

// ---------------- 1) Repesca ----------------
export async function repesca(G, a, b) {
  await banner('LA REPESCA', '9 casillas · 7 correctas · 2 incorrectas · 45 s'); await habla(F.repesca);
  const pn = sacarPanel(G, 7, 2); const L = [lado(a, { marca: 'FAROLILLO ROJO' }), lado(b, { marca: 'ASPIRANTE' })];
  const tb = abrir({ cat: pn.t, celdas: pn.celdas, lados: L, titulo: 'LA REPESCA' }); G.cam('pantalla'); await leer(pn.t);
  const rel = new Reloj(G.ilimitado ? 0 : 45, s => tb.tiempo(s)).start(); let t = 0, perdedor = null;
  while (!perdedor) {
    const c = [a, b][t % 2]; L.forEach((l, k) => l.activo = k === t % 2); tb.lados(L); hud.ronda('Repesca · turno de ' + c.nombre);
    const disp = tb.T.celdas.map((x, i) => x.est ? -1 : i).filter(i => i >= 0);
    const r = esHumano(c) ? await tb.elegir(disp, [rel.fin.then(() => 'TIEMPO')]) : await Promise.race([(async () => { await Dt(800 + Math.random() * 500); return botElige(c, tb.T.celdas, disp, 'ok', 0.85); })(), rel.fin.then(() => 'TIEMPO')]);
    if (r === 'TIEMPO' || rel.rest <= 0) { toast('⏰ ¡Tiempo!'); perdedor = c; break; }
    if (tb.T.celdas[r].ok) { tb.marcar(r, 'ok'); me.play('acierto'); t++; await Dt(600); }
    else { tb.marcar(r, 'ko'); me.play('fallo'); perdedor = c; await Dt(900); }
  }
  rel.stop(); tb.revelar(); const gana = perdedor === a ? b : a; await Dt(1200); cerrar(); hud.ronda('');
  await textoGrande(`¡${esc(gana.nombre)} gana la repesca!`, `${esc(perdedor.nombre)} se despide`, 2400);
  return gana;
}
// ---------------- 2) ¡A por todas! ----------------
export async function aPorTodas(G) {
  await banner('¡A POR TODAS!', '16 casillas · 10 correctas · 6 incorrectas · 100 € por acierto'); await habla(F.aPorTodas);
  const pn = sacarPanel(G, 10, 6); const oks = pn.celdas.map((c, i) => c.ok ? i : -1).filter(i => i >= 0);
  await panelPorTurnos(G, { titulo: '¡A POR TODAS!', cat: pn.t, celdas: pn.celdas, valor: 100, jugadores: G.conc.filter(c => !c.fuera), imagenIdx: azar(oks) });
}
// ---------------- 3) ¡Esa me suena! ----------------
export async function esaMeSuena(G) {
  await banner('¡ESA ME SUENA!', 'Panel musical · 12 casillas · 8 correctas'); await habla(F.esaMeSuena);
  me.music('musical', { cancion: true }); if (!me.hayCanciones()) toast('🎵 Sube tus canciones en Opciones › Mis canciones para que suenen aquí', 3500);
  const pn = sacarPanel(G, 8, 4, { musical: true });
  await panelPorTurnos(G, { titulo: '¡ESA ME SUENA!', cat: pn.t, celdas: pn.celdas, valor: 100, jugadores: G.conc.filter(c => !c.fuera), seguidas: true });
  me.music('tension');
}
// ---------------- 4) Fíjate bien ----------------
const EMOJIS = ['🍎', '🚲', '🎸', '🐘', '⚽', '🌂', '🎩', '🚀', '🍕', '🐢', '📚', '🎈', '🦊', '🍄', '⏰', '🔑', '🐬', '🌻', '🍩', '🧲', '🎲', '🦜', '🚁', '🧀', '🐌', '🥁', '🏀', '🍉', '🦀', '🕶️'];
export async function fijateBien(G) {
  await banner('FÍJATE BIEN', '16 imágenes · 10 están repetidas'); await habla(F.fijate);
  const e = baraja(EMOJIS); const rep = e.slice(0, 5), uni = e.slice(5, 11);
  const celdas = baraja([...rep, ...rep].map(t => ({ t, ok: true })).concat(uni.map(t => ({ t, ok: false }))));
  const tb = abrir({ cat: '¡Memoriza! Diez imágenes están repetidas', celdas, titulo: 'FÍJATE BIEN', clase: 'emojis' }); G.cam('pantalla');
  for (let s = 6; s > 0; s--) { tb.tiempo(s); await Dt(1000); } tb.tiempo(null);
  cerrar(); celdas.forEach(c => c.est = 'tapada'); me.play('rayo'); await habla(F.fijateTapo);
  await panelPorTurnos(G, { titulo: 'FÍJATE BIEN', cat: 'Estaban repetidas', celdas, valor: 100, jugadores: G.conc.filter(c => !c.fuera) });
}
// ---------------- 5) La bombilla caliente ----------------
async function duelo(G, a, b, titulo) {
  const pn = sacarPanel(G, 8, 4); const L = [lado(a), lado(b)];
  const tb = abrir({ cat: pn.t, celdas: pn.celdas, lados: L, titulo, clase: 'caliente' }); G.cam('pantalla'); await leer(pn.t);
  let t = 0, perdedor = null;
  while (!perdedor) {
    const c = [a, b][t % 2]; L.forEach((l, k) => l.activo = k === t % 2); tb.lados(L); refrescar(G, c); hud.ronda(`${titulo} · turno de ${c.nombre}`);
    const disp = tb.T.celdas.map((x, i) => x.est ? -1 : i).filter(i => i >= 0);
    const r = await turno(G, c, tb, disp, { seg: 15, hab: 0.82 });
    if (r === 'TIEMPO') { toast('⏰ ¡Tiempo!'); perdedor = c; break; }
    if (tb.T.celdas[r].ok) { tb.marcar(r, 'ok'); luz(G, c, true); t++; await Dt(700); }
    else { tb.marcar(r, 'ko'); luz(G, c, false); perdedor = c; charla(c, 'mal', 0.8); await Dt(1100); }
  }
  tb.revelar(); await Dt(1400); cerrar(); hud.ronda('');
  const gana = perdedor === a ? b : a; await textoGrande(`¡${esc(gana.nombre)} gana el duelo!`, '', 1800); return gana;
}
export async function bombillaCaliente(G) {
  await banner('LA BOMBILLA CALIENTE', 'Duelos 1.º contra 4.º y 2.º contra 3.º'); await habla(F.bombilla);
  const r = ranking(G);
  const g1 = await duelo(G, r[0], r[3], 'DUELO 1 · 1.º CONTRA 4.º');
  const g2 = await duelo(G, r[1], r[2], 'DUELO 2 · 2.º CONTRA 3.º');
  await habla(F.bombillaFinal);
  const gf = await duelo(G, g1, g2, 'FINAL DE LA BOMBILLA CALIENTE'); const fin = gf === g1 ? g2 : g1;
  gf.dinero += 500; fin.dinero += 100; me.play('aplausos'); refrescar(G);
  await textoGrande(`🔥 ${esc(gf.nombre)} +500 €`, `${esc(fin.nombre)} +100 €`, 2400);
}
export const ranking = G => G.conc.filter(c => !c.fuera).slice().sort((x, y) => y.dinero - x.dinero);
// ---------------- 6) Busca pareja ----------------
export async function buscaPareja(G) {
  await banner('BUSCA PAREJA', '8 parejas · 400/400/200/200/100/100/100/100 €'); await habla(F.buscaPareja);
  const tema = azar(listaParejas()); const pares = baraja(tema.p).slice(0, 8);
  const celdas = baraja(pares.flatMap((p, k) => [{ t: p[0], par: k, ok: true }, { t: p[1], par: k, ok: true }]));
  const tb = abrir({ cat: tema.t, celdas, titulo: 'BUSCA PAREJA' }); G.cam('pantalla'); await leer(tema.t);
  const VAL = [400, 400, 200, 200, 100, 100, 100, 100]; let hechas = 0, ptr = 0; const orden = ranking(G).reverse();
  while (hechas < 8) {
    const c = orden[ptr % orden.length]; refrescar(G, c); hud.ronda('Busca pareja · turno de ' + c.nombre);
    const libres = () => tb.T.celdas.map((x, i) => x.est ? -1 : i).filter(i => i >= 0);
    let r1 = await turno(G, c, tb, libres(), { hab: 0 }); if (r1 === 'TIEMPO') { ptr++; continue; }
    tb.marcar(r1, 'sel'); await Dt(400);
    let r2; const comp = tb.T.celdas.findIndex((x, i) => i !== r1 && x.par === tb.T.celdas[r1].par);
    if (!esHumano(c)) { await Dt(800); r2 = Math.random() < (c.habil || 0.75) * 0.8 ? comp : azar(libres()); }
    else { r2 = await turno(G, c, tb, libres(), { hab: 0 }); if (r2 === 'TIEMPO') { tb.marcar(r1, ''); ptr++; continue; } }
    tb.marcar(r2, 'sel'); await Dt(700);
    if (r2 === comp) { const v = VAL[hechas++]; tb.T.celdas[r1].badge = tb.T.celdas[r2].badge = euros(v); tb.marcar(r1, 'ok'); tb.marcar(r2, 'ok'); luz(G, c, true); c.dinero += v; charla(c, 'bien', 0.4); refrescar(G, c); await Dt(900); }
    else { tb.marcar(r1, 'ko'); tb.marcar(r2, 'ko'); me.play('fallo'); await Dt(1100); tb.marcar(r1, ''); tb.marcar(r2, ''); ptr++; }
  }
  await Dt(1200); cerrar(); hud.ronda(''); refrescar(G);
}
// ---------------- 7) Cara a cara ----------------
export async function caraACara(G, a, b) {
  await banner('CARA A CARA', '12 temas · primero en encender 7 bombillas'); await habla(F.caraACara);
  const temas = baraja(listaPaneles().filter(p => p.c.length >= 1 && p.i.length >= 2)).slice(0, 12);
  a.color = '#ffd21a'; b.color = '#ff4fa8';
  const celdas = temas.map(p => ({ t: p.t, ok: true, p })); const L = [lado(a, { marca: 0 }), lado(b, { marca: 0 })];
  const tb = abrir({ cat: 'Elige tema', celdas, lados: L, titulo: 'CARA A CARA', clase: 'temas' }); G.cam('pantalla');
  const pts = [0, 0]; let t = 0;
  while (pts[0] < 7 && pts[1] < 7) {
    const libres = tb.T.celdas.map((x, i) => x.est ? -1 : i).filter(i => i >= 0);
    if (!libres.length) break;
    const k = t % 2, c = [a, b][k], o = [a, b][1 - k]; L.forEach((l, j) => { l.activo = j === k; l.marca = pts[j]; }); tb.lados(L); refrescar(G, c); hud.ronda(`Cara a cara · elige tema ${c.nombre}`);
    let i = await turno(G, c, tb, libres, { hab: 0 }); if (i === 'TIEMPO') i = azar(libres);
    tb.marcar(i, 'sel'); const p = tb.T.celdas[i].p; tb.cat(p.t);
    const ops = baraja([{ t: azar(p.c), ok: true }, ...baraja(p.i).slice(0, 2).map(t => ({ t, ok: false }))]); const cor = ops.findIndex(x => x.ok);
    const r = await preguntar(G, c, tb, `¿Cuál cumple: «${p.t}»?`, ops.map(x => x.t), cor);
    if (r === cor) { pts[k]++; tb.marcar(i, k ? 'yb' : 'ya'); luz(G, c, true); }
    else {
      me.play('fallo'); toast('↩️ ¡Rebote para ' + o.nombre + '!'); const resto = ops.map((x, j) => j).filter(j => j !== r);
      const r2 = await preguntar(G, o, tb, `Rebote: ¿cuál cumple «${p.t}»?`, resto.map(j => ops[j].t), resto.indexOf(cor), { hab: 0.65 });
      if (resto[r2] === cor) { pts[1 - k]++; tb.marcar(i, k ? 'ya' : 'yb'); luz(G, o, true); } else { tb.marcar(i, 'ko'); me.play('fallo'); }
    }
    L.forEach((l, j) => l.marca = pts[j]); tb.lados(L); tb.cat('Elige tema'); t++; await Dt(500);
  }
  let gana;
  if (pts[0] === pts[1]) {
    await habla(F.jaqueMate); let j = 0;
    while (!gana) {
      const q = azar(DATA.jaque); const c = [a, b][j % 2], o = [a, b][1 - j % 2];
      const r = await preguntar(G, c, tb, 'JAQUE MATE · ' + q.p, q.op, q.r, { hab: 0.7 });
      if (r === q.r) gana = c; else { const resto = q.op.map((_, x) => x).filter(x => x !== r); const r2 = await preguntar(G, o, tb, 'Rebote · ' + q.p, resto.map(x => q.op[x]), resto.indexOf(q.r), { hab: 0.6 }); if (resto[r2] === q.r) gana = o; }
      j++;
    }
  } else gana = pts[0] > pts[1] ? a : b;
  await Dt(800); cerrar(); hud.ronda(''); me.play('ovacion');
  await textoGrande(`¡${esc(gana.nombre)} gana el cara a cara!`, `${pts[0]} – ${pts[1]} · juega El minuto diabólico`, 2600);
  return gana;
}
// ---------------- 8) El minuto diabólico ----------------
export async function minutoDiabolico(G, c, bote) {
  await banner('EL MINUTO DIABÓLICO', '3 paneles · 2 de 4 · 5 de 9 · 8 de 15'); await habla(F.minuto);
  const com = c.comodines || 0; const seg = 60 + (com >= 2 ? 15 : com === 1 ? 5 : 0);
  if (com) { me.play('comodin'); await habla(F.minutoComodin); }
  me.music('diabolico');
  await boteGrande(bote, `${c.nombre} juega por el bote · ${seg} segundos`, 2400);
  const PANELES = [[2, 2], [5, 4], [8, 7]]; let nivel = 0;
  const rel = new Reloj(G.ilimitado ? 0 : seg, s => { $('#tablero .tb-tiempo') && ($('#tablero .tb-tiempo').textContent = String(Math.ceil(s))); hud.timer(s); }).start();
  try {
    while (nivel < 3 && !rel.terminado) {
      const [nc, ni] = PANELES[nivel]; const pn = sacarPanel(G, nc, ni);
      const tb = abrir({ cat: `${pn.t} · marca ${nc}`, celdas: pn.celdas, titulo: `PANEL ${nivel + 1} DE 3`, clase: 'diabolico' }); G.cam('pantalla'); leer(pn.t);
      G.P.correr(c.atril, true); const marcadas = new Set();
      const pulsar = esHumano(c) ? tb.botones([{ label: '⚡ PULSAR', v: 'PULSAR', cls: 'pulsar' }]) : null;
      if (esHumano(c)) {
        for (;;) {
          const r = await tb.elegir(tb.T.celdas.map((_, i) => i), [pulsar, rel.fin.then(() => 'TIEMPO')]);
          if (r === 'PULSAR' || r === 'TIEMPO') break;
          if (marcadas.has(r)) { marcadas.delete(r); tb.marcar(r, ''); } else { marcadas.add(r); tb.marcar(r, 'sel'); }
        }
      } else {
        const buenas = baraja(tb.T.celdas.map((x, i) => x.ok ? i : -1).filter(i => i >= 0)), malas = baraja(tb.T.celdas.map((x, i) => !x.ok ? i : -1).filter(i => i >= 0));
        for (const i of buenas) { if (rel.terminado) break; await Dt(700 + Math.random() * 600); const pick = Math.random() < 0.9 ? i : malas.pop(); if (pick == null) continue; marcadas.add(pick); tb.marcar(pick, 'sel'); }
      }
      tb.limpiarBotones(); if (rel.terminado) { cerrar(); break; }
      G.P.correr(c.atril, false); me.play('pulsador'); await Dt(500);
      const bien = marcadas.size === nc && [...marcadas].every(i => tb.T.celdas[i].ok);
      [...marcadas].forEach(i => tb.marcar(i, tb.T.celdas[i].ok ? 'ok' : 'ko'));
      if (bien) { luz(G, c, true); nivel++; toast(nivel < 3 ? '✅ ' + F.minutoOk : '✅ ¡Tercer panel!'); await Dt(900); }
      else { luz(G, c, false); toast('❌ ' + F.minutoError); await Dt(1100); }
      cerrar();
    }
  } finally { rel.stop(); hud.sinTimer(); }
  me.stopMusic();
  return nivel >= 3;
}

// =====================================================================
// Etapa CLÁSICA (1998-2011): 3 concursantes, 3 paneles de 16, apuestas y coche
// =====================================================================
export async function clasicaPaneles(G) {
  await banner('PRIMERA RONDA', '3 paneles de 16 casillas · 10 correctas · 6 incorrectas'); await habla(F.clasicaR1);
  for (let k = 0; k < 3; k++) {
    const pn = sacarPanel(G, 10, 6);
    await textoGrande(`PANEL ${k + 1}`, `Cada acierto vale ${euros(G.E.r1[k])}`, 1600);
    await panelPorTurnos(G, { titulo: `PANEL ${k + 1} DE 3`, cat: pn.t, celdas: pn.celdas, valor: G.E.r1[k], jugadores: G.conc });
  }
}
export async function clasicaApuestas(G) {
  await banner('SEGUNDA RONDA', 'Las apuestas · panel de 12 · encuentra 5 correctas'); await habla(F.clasicaR2);
  for (const c of ranking(G).reverse()) {
    if (c.dinero <= 0) { toast(`${c.nombre} no tiene dinero para apostar`); continue; }
    const ops = [[0.25, '25 %'], [0.5, 'La mitad'], [1, '¡Todo!']];
    let f;
    if (esHumano(c)) f = +(await elegir(`<div class="txt">¿CUÁNTO APUESTAS, ${esc(c.nombre.toUpperCase())}?</div><div class="sub">Tienes ${euros(c.dinero)}</div><div class="btns ov">${ops.map(([v, t]) => `<button data-z="${v}">${t}<br><small>${euros(Math.round(c.dinero * v))}</small></button>`).join('')}</div>`));
    else { f = azar([0.25, 0.5, 0.5, 1]); await textoGrande(`${esc(c.nombre)} apuesta ${euros(Math.round(c.dinero * f))}`, '', 1500); }
    const ap = Math.round(c.dinero * f); const pn = sacarPanel(G, 8, 4);
    const tb = abrir({ cat: `${pn.t} · encuentra 5`, celdas: pn.celdas, titulo: `APUESTA DE ${c.nombre.toUpperCase()}: ${euros(ap)}` }); G.cam('pantalla'); await leer(pn.t);
    let ok = 0, fallo = false; refrescar(G, c);
    while (ok < 5 && !fallo) {
      const disp = tb.T.celdas.map((x, i) => x.est ? -1 : i).filter(i => i >= 0);
      const r = await turno(G, c, tb, disp, { hab: 0.84 });
      if (r === 'TIEMPO' || !tb.T.celdas[r].ok) { if (r !== 'TIEMPO') tb.marcar(r, 'ko'); luz(G, c, false); fallo = true; }
      else { tb.marcar(r, 'ok'); luz(G, c, true); ok++; }
      await Dt(600);
    }
    c.dinero += fallo ? -ap : ap; refrescar(G); tb.revelar(); await Dt(1300); cerrar();
    await textoGrande(fallo ? `${esc(c.nombre)} pierde ${euros(ap)}` : `${esc(c.nombre)} gana ${euros(ap)}`, '', 1600);
  }
}
export async function clasicaCoche(G, c) {
  await banner('RONDA FINAL', '¡7 correctas de 12 y te llevas un coche!'); await habla(F.clasicaFinal);
  const pn = sacarPanel(G, 7, 5); const tb = abrir({ cat: `${pn.t} · encuentra las 7`, celdas: pn.celdas, titulo: '🚗 EL PANEL DEL COCHE' }); G.cam('pantalla'); await leer(pn.t);
  let ok = 0, fallo = false; refrescar(G, c);
  const rel = new Reloj(G.ilimitado ? 0 : 60, s => tb.tiempo(s)).start();
  while (ok < 7 && !fallo) {
    const disp = tb.T.celdas.map((x, i) => x.est ? -1 : i).filter(i => i >= 0);
    const r = esHumano(c) ? await tb.elegir(disp, [rel.fin.then(() => 'TIEMPO')]) : (await Dt(900), botElige(c, tb.T.celdas, disp, 'ok', 0.9));
    if (r === 'TIEMPO' || rel.terminado && rel.rest <= 0) { fallo = true; break; }
    if (tb.T.celdas[r].ok) { tb.marcar(r, 'ok'); luz(G, c, true); ok++; } else { tb.marcar(r, 'ko'); luz(G, c, false); fallo = true; }
    await Dt(500);
  }
  rel.stop(); tb.revelar(); await Dt(1500); cerrar();
  return !fallo && ok >= 7;
}
