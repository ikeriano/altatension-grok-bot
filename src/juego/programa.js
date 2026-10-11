// Flujos de juego con la organización del APK: Programa completo, Clásico, Entrenamiento.
import { me } from '../lib/audio.js';
import { $, esc, euros, baraja, azar, Dt, Zi, hud, banner, elegir, habla, hablaC, textoGrande, boteGrande, hashtag, rotulo, acciones, rodarCreditos, ocultarCreditos, setMoneda, toast } from './core.js';
import { cfg } from '../cfg.js';
import { F, CHISTES, PROFESIONES_JUEGO, CONC } from './frases.js';
import * as R from './rondas.js';
import { THEMES } from '../temas.js';
import { COLORES_CONC } from '../plato/plato.js';
import { CREDITOS_VOCES } from '../lib/voces.js';

export const ETAPAS = {
  a3: { id: 'a3', nombre: 'Antena 3 (1998-2000)', corto: 'Antena 3 · 1998', clasica: true, moneda: 'pts', r1: [5000, 10000, 25000], archivosMusica: ['cabecera_antena3', 'cabecera'], archivosLogo: ['logo_antena3', 'logo'] },
  cuatro: { id: 'cuatro', nombre: 'Cuatro (2006-2008)', corto: 'Cuatro · 2006', clasica: true, moneda: '€', r1: [30, 60, 150], archivosMusica: ['cabecera_cuatro', 'cabecera'], archivosLogo: ['logo_cuatro', 'logo'] },
  veo7: { id: 'veo7', nombre: 'Veo7 · «Tensión sin límite» (2011)', corto: 'Veo7 · 2011', clasica: true, moneda: '€', r1: [20, 50, 100], logo: { texto: 'TENSIÓN', sub: 'SIN LÍMITE' }, archivosMusica: ['cabecera_veo7', 'cabecera'], archivosLogo: ['logo_veo7', 'logo'] },
  t5: { id: 't5', nombre: 'Telecinco / Cuatro (2021-2022)', corto: 'Telecinco · 2021', bote: 50000, sube: 1000, dia: 1000, otros: 100, archivosMusica: ['cabecera_telecinco', 'cabecera'], archivosLogo: ['logo_telecinco', 'logo'] },
  apunt: { id: 'apunt', nombre: 'À Punt · «Alta tensió» (2024)', corto: 'À Punt · 2024', valenciano: true, bote: 10000, sube: 250, dia: 500, otros: 50, logo: { valenciano: true }, archivosMusica: ['cabecera_apunt', 'cabecera'], archivosLogo: ['logo_apunt', 'logo'] },
  tm: { id: 'tm', nombre: 'Telemadrid (2025)', corto: 'Telemadrid · 2025', bote: 30000, sube: 600, dia: 600, otros: 60, archivosMusica: ['cabecera_telemadrid', 'cabecera'], archivosLogo: ['logo_telemadrid', 'logo'] },
};
const boteKey = e => 'at3d_bote_' + e;
export const leerBote = e => +localStorage.getItem(boteKey(e)) || ETAPAS[e].bote || 0;
export const etapaClasica = () => ETAPAS[cfg.etapa]?.clasica ? cfg.etapa : 'cuatro';
export const etapaModerna = () => ETAPAS[cfg.etapa]?.clasica ? 't5' : (ETAPAS[cfg.etapa] ? cfg.etapa : 't5');

export function crearG({ etapa = 't5', n = 4, entreno = false, ilimitado = false, tema = 'normal' } = {}, api) {
  const E = ETAPAS[etapa]; setMoneda(E.moneda || '€');
  const bots = baraja(PROFESIONES_JUEGO).slice(0, n - 1);
  const famosos = tema === 'famosos';
  const conc = [{ nombre: cfg.nombre || 'Tú', prof: cfg.profesion || 'Concursante', voz: 'sharvard', emoji: '😎', humano: true }, ...bots.map(b => ({ ...b, nombre: famosos ? '⭐ ' + b.nombre : b.nombre, habil: 0.72 + Math.random() * 0.15 }))]
    .map((c, i) => ({ ...c, color: COLORES_CONC[i], dinero: 0, ronda: 0, comodines: 0, plantado: false, fuera: false, atril: i }));
  const G = { E, etapa, conc, entreno, ilimitado, usados: new Set(), P: api.P(), cam: api.cam, tema };
  G.P.reset(); for (let i = n; i < 4; i++) G.P.ocultarFig(i, true);
  R.refrescar(G); return G;
}
async function chiste() { if (!cfg.chistes) return; await habla(azar(CHISTES), 4000); me.play('badumtss'); me.play('risas'); await Dt(1000); }
export const AYUDA = `<p><b>Objetivo:</b> encontrar las respuestas correctas de cada panel y evitar las incorrectas, que <b>rompen la bombilla</b>. El ganador del día juega <b>El minuto diabólico</b> por el bote.</p>
<p><b>Repesca</b> (9 casillas, 7 correctas, 45 s): el farolillo rojo del programa anterior contra un aspirante. Quien rompa la bombilla, se va.</p>
<p><b>¡A por todas!</b> (16 casillas, 10 correctas): por turnos, 100 € por acierto. Si fallas, pierdes lo acumulado en la prueba; puedes plantarte (✋). Una casilla esconde una <b>imagen</b>: si la aciertas ganas un <b>comodín ⚡</b>; si fallas, −100 €. Si salen las 6 incorrectas antes, los que no se plantaron se quedan a 0.</p>
<p><b>¡Esa me suena!</b> (12 casillas, 8 correctas): panel musical con tus canciones (Opciones › Mis canciones). Cada uno contesta seguido hasta fallar o plantarse.</p>
<p><b>Fíjate bien</b> (16 imágenes, 10 repetidas): memoriza, se tapan y por turnos busca las repetidas.</p>
<p><b>La bombilla caliente</b>: duelos 1.º-4.º y 2.º-3.º en paneles de 12 (8 correctas). Final entre ganadores: 500 € y 100 € al finalista.</p>
<p><b>Busca pareja</b>: 8 parejas; las dos primeras valen 400 €, las dos siguientes 200 € y el resto 100 €. Si fallas, pierdes el turno. El último es el <b>farolillo rojo</b> (va a la repesca) y el tercero se despide con 100 €.</p>
<p><b>Cara a cara</b>: 12 temas, bombilla amarilla y rosa, rebote si fallas. Gana el primero en 7; con 6-6, <b>jaque mate</b>.</p>
<p><b>El minuto diabólico</b>: 3 paneles (2 de 4, 5 de 9, 8 de 15) en 60 s (65 con 1 comodín, 75 con 2). Marca y pulsa ⚡. Si los superas, ¡bote! Si no, 1.000 € de ganador del día.</p>
<p><b>Etapa clásica (1998-2011)</b>: 3 concursantes, 3 paneles de 16 con premios por panel, ronda de apuestas en paneles de 12 y ronda final por un <b>coche</b> (7 correctas de 12).</p>
<p><b>Controles:</b> toca las casillas del panel. En el paseo: joystick o WASD y arrastra para mirar. ☰ menú · 👁 cámara · 💡 luces · «Saltar ⏭» pasa la cabecera, la despedida y los monólogos.</p>`;

export function creditos(G) {
  const Pn = cfg.presentador || 'Tino Voltaje';
  const cs = G ? G.conc : [{ nombre: cfg.nombre || 'Tú', prof: cfg.profesion || 'Concursante', humano: true }, ...PROFESIONES_JUEGO];
  return [['Presentado por', [`${Pn} (presentador virtual)`]],
    ['Concursantes', cs.map((c, i) => `${i + 1}. ${c.nombre} · ${c.prof}`)],
    ['Juego creado por', ['Iker']], ['Basado en', ['El concurso «Alta Tensión» (adaptación no oficial)', 'Formato basado en «Wipeout» (EE. UU.)']],
    ['Plató, logo, cabecera y grafismos', ['Creación original en 3D (Three.js), inspirada en el plató de 2021']],
    ['Paneles y preguntas', ['Originales del juego (data/paneles_extra.js para añadir más)']],
    ['Música y sonidos', ['Los que subas tú desde Opciones (Mis canciones, cabecera)', 'o efectos y bucles sintetizados por el propio juego']],
    CREDITOS_VOCES,
    ['Público de las gradas', ['Aplausos, «ooh» y risas sintetizados (no son grabaciones)']],
    ['Interfaz', ['Basada en el APK «¡Ahora Caigo! El juego 3D» de Iker']], ['Programación', ['Grok Bot']]];
}

async function intro(G, api, T, E) {
  hud.show(false); await api.cabecera();
  api.cam('presentador'); me.play('aplausos'); me.music('trilha');
  await habla(T.saludo || (E.valenciano ? F.bienvenidaVal : F.bienvenida));
  for (const x of T.extra || []) await habla(x);
  if (T.festivo) { G.P.celebrar(); me.play('ovacion'); }
  if (cfg.monologo) await api.monologo(null, true);
}
async function presentar(G, api) {
  if (!cfg.presentaciones) return;
  await habla(F.presentacion);
  rotulo(`Presentado por ${cfg.presentador || 'Tino Voltaje'}`, 'Presentador virtual', 2600);
  for (const c of G.conc) { if (c.fuera) continue; api.cam('conc', c.atril); await rotulo(`${c.nombre}${c.humano ? ' (TÚ)' : ''}`, c.prof, 2400); if (!c.humano) await hablaC(c, azar(CONC.hola)); }
}

export async function jugarPrograma(modo, api) {
  const temaId = api.tema(); const T = THEMES[temaId] || THEMES.normal;
  const clasico = modo === 'clasico' || (modo === 'programa' && ETAPAS[cfg.etapa]?.clasica);
  return clasico ? programaClasico(api, T, temaId, modo) : programaModerno(api, T, temaId, modo);
}
async function fin(api, G, modo, lineas, extraCred = true) {
  me.stopMusic(); me.play('ovacion'); hud.show(false);
  api.orbita(); me.music('trilha'); G.P.celebrar();
  const despide = habla(F.despedida);
  await api.saltable(Promise.all([despide, rodarCreditos(creditos(G), 16000)])); ocultarCreditos();
  await textoGrande('FIN DEL PROGRAMA', lineas, 3200);
  api.marcador(lineas);
  acciones([{ label: 'Jugar otra vez', cls: 'gold', fn: () => api.iniciar(modo) }, { label: 'Menú', fn: () => api.menu('play') }]);
  await Zi(new Promise(() => {}));
}

async function programaModerno(api, T, temaId, modo) {
  const etapa = etapaModerna(); const E = ETAPAS[etapa]; api.setEtapa(etapa);
  const G = crearG({ etapa, tema: temaId }, api); const prime = temaId === 'prime';
  const bote = leerBote(etapa) * (prime ? 2 : 1);
  hashtag(T.hashtag || (E.valenciano ? '#AltaTensió' : '#AltaTensión'));
  await intro(G, api, T, E);
  // repesca: si fuiste el farolillo rojo, te juegas tu sitio
  const farol = localStorage.getItem('at3d_farolillo') === '1';
  const aspirante = { ...azar(PROFESIONES_JUEGO.filter(p => !G.conc.some(c => c.nombre === p.nombre))), color: '#ffffff', dinero: 0, atril: 3, habil: 0.8 };
  hud.show(true);
  if (farol) {
    const yo = G.conc[0]; const g = await R.repesca(G, yo, aspirante);
    if (g !== yo) { localStorage.removeItem('at3d_farolillo'); Object.assign(yo, { nombre: aspirante.nombre, prof: aspirante.prof, voz: aspirante.voz, emoji: aspirante.emoji, humano: false, habil: 0.8 }); toast('Has perdido la repesca: hoy miras desde la grada'); }
  } else {
    const viejo = G.conc[3]; const g = await R.repesca(G, { ...viejo, nombre: viejo.nombre }, aspirante);
    if (g === aspirante) Object.assign(G.conc[3], { nombre: aspirante.nombre, prof: aspirante.prof, voz: aspirante.voz, emoji: aspirante.emoji });
  }
  await habla(F.repescaGana); R.refrescar(G);
  await presentar(G, api);
  if (G.conc[0].humano) { hud.show(false); await api.paseo(0); }
  hud.show(true); R.refrescar(G); G.cam('general');
  await boteGrande(bote, 'Bote de hoy'); G.P.pantalla('bote', { texto: euros(bote) }); await Dt(1500);
  me.music('tension');
  await R.aPorTodas(G); await chiste();
  await R.esaMeSuena(G);
  await R.fijateBien(G); await chiste();
  await R.bombillaCaliente(G);
  await R.buscaPareja(G);
  const rk = R.ranking(G);
  await textoGrande('CLASIFICACIÓN', rk.map((c, i) => `${i + 1}. ${esc(c.nombre)} · ${euros(c.dinero)}`).join('<br>'), 3000);
  const farolillo = rk[3], tercero = rk[2];
  api.cam('conc', farolillo.atril); await habla(F.farolillo); await rotulo('🏮 Farolillo rojo: ' + farolillo.nombre, 'Vuelve mañana en la repesca', 2600);
  api.cam('conc', tercero.atril); await habla(F.tercero); farolillo.fuera = tercero.fuera = true; tercero.premio = E.otros; R.refrescar(G);
  localStorage.setItem('at3d_farolillo', farolillo.humano ? '1' : '0');
  const gana = await R.caraACara(G, rk[0], rk[1]); const segundo = gana === rk[0] ? rk[1] : rk[0]; segundo.premio = E.otros;
  const ok = await R.minutoDiabolico(G, gana, bote);
  let linea;
  if (ok) { gana.premio = bote; localStorage.setItem(boteKey(etapa), String(E.bote)); me.play('ovacion'); G.P.celebrar(); await habla(F.boteGanado); await boteGrande(bote, `¡${gana.nombre} se lleva el bote!`, 3500); }
  else { gana.premio = E.dia; localStorage.setItem(boteKey(etapa), String(leerBote(etapa) + E.sube)); await habla(F.boteNo); }
  const yo = G.conc.find(c => c.humano);
  linea = `${ok ? '🏆 ¡BOTE!' : '💡'} ${esc(gana.nombre)} gana ${euros(gana.premio)}${yo ? `<br>Tú: ${yo === gana ? 'ganador del día' : yo === farolillo ? 'farolillo rojo (mañana, repesca)' : yo.premio ? 'te llevas ' + euros(yo.premio) : 'eliminado'}` : ''}<br><small>Bote del próximo programa: ${euros(leerBote(etapa))}</small>`;
  await fin(api, G, modo, linea);
}

async function programaClasico(api, T, temaId, modo) {
  const etapa = etapaClasica(); const E = ETAPAS[etapa]; api.setEtapa(etapa);
  const G = crearG({ etapa, n: 3, tema: temaId }, api);
  hashtag(T.hashtag || (etapa === 'veo7' ? '#TensiónSinLímite' : '#AltaTensiónClásico'));
  if (modo === 'programa') await intro(G, api, T, E); else { api.cam('presentador'); me.music('trilha'); }
  await habla(F.clasica); hud.show(true);
  if (modo === 'programa') { await presentar(G, api); if (G.conc[0].humano) { hud.show(false); await api.paseo(0); hud.show(true); } }
  R.refrescar(G); me.music('tension');
  await R.clasicaPaneles(G); await chiste();
  await R.clasicaApuestas(G);
  const rk = R.ranking(G); const c = rk[0];
  api.cam('conc', c.atril); await textoGrande(`${esc(c.nombre)} juega por el coche`, `Lleva ${euros(c.dinero)}`, 2200);
  const coche = await R.clasicaCoche(G, c);
  if (coche) { me.play('ovacion'); G.P.celebrar(); await habla(F.coche); } else await habla(F.cocheNo);
  const yo = G.conc.find(x => x.humano);
  const linea = `${coche ? '🚗 ¡' + esc(c.nombre) + ' se lleva el coche!' : esc(c.nombre) + ' gana el programa'}<br>${G.conc.map(x => `${esc(x.nombre)}: ${euros(Math.max(0, x.dinero))}`).join(' · ')}${yo ? `<br>Tú: ${yo === c ? 'ganador' : 'gracias por jugar'}` : ''}`;
  await fin(api, G, modo, linea);
}

export const PRUEBAS_ENTRENO = {
  repesca: ['La repesca', '9 casillas, 7 correctas, 45 s'], aportodas: ['¡A por todas!', '16 casillas, imagen oculta y comodín'], esamesuena: ['¡Esa me suena!', 'Panel musical con tus canciones'],
  fijate: ['Fíjate bien', 'Memoriza las 10 imágenes repetidas'], bombilla: ['La bombilla caliente', 'Duelo en panel de 12'], pareja: ['Busca pareja', '8 parejas escondidas'],
  cara: ['Cara a cara', '12 temas, primero en 7, jaque mate'], minuto: ['El minuto diabólico', '3 paneles contra el reloj'],
  clasico: ['Panel clásico', '16 casillas con premios (1998-2011)'], apuestas: ['Las apuestas', 'Apuesta y encuentra 5 de 12'], coche: ['El panel del coche', '7 correctas de 12'],
};
export async function entrenamiento(fase, api, { ilimitado = false } = {}) {
  for (;;) {
    const clas = ['clasico', 'apuestas', 'coche'].includes(fase);
    const G = crearG({ etapa: clas ? etapaClasica() : etapaModerna(), n: clas ? 3 : 4, entreno: true, ilimitado, tema: api.tema() }, api);
    hud.show(true); hashtag('#AltaTensiónEntrena'); me.music('tension'); G.cam('general');
    const yo = G.conc[0]; let res = '';
    if (fase === 'repesca') { const g = await R.repesca(G, yo, G.conc[1]); res = g === yo ? '¡Has ganado la repesca!' : 'Has perdido la repesca'; }
    if (fase === 'aportodas') { await R.aPorTodas(G); res = `Tienes ${euros(yo.dinero)} · comodines: ${yo.comodines}`; }
    if (fase === 'esamesuena') { await R.esaMeSuena(G); res = `Tienes ${euros(yo.dinero)}`; }
    if (fase === 'fijate') { await R.fijateBien(G); res = `Tienes ${euros(yo.dinero)}`; }
    if (fase === 'bombilla') { yo.dinero = 300; G.conc[1].dinero = 200; G.conc[2].dinero = 100; await R.bombillaCaliente(G); res = `Tienes ${euros(yo.dinero)}`; }
    if (fase === 'pareja') { await R.buscaPareja(G); res = `Tienes ${euros(yo.dinero)}`; }
    if (fase === 'cara') { const g = await R.caraACara(G, yo, G.conc[1]); res = g === yo ? '¡Ganas el cara a cara!' : 'Pierdes el cara a cara'; }
    if (fase === 'minuto') { yo.comodines = 1; const ok = await R.minutoDiabolico(G, yo, leerBote(etapaModerna())); res = ok ? '¡Habrías ganado el bote!' : 'No ha dado tiempo… ¡a seguir entrenando!'; }
    if (fase === 'clasico') { await R.clasicaPaneles(G); res = `Tienes ${euros(yo.dinero)}`; }
    if (fase === 'apuestas') { G.conc.forEach(c => c.dinero = G.E.r1[1] * 4); await R.clasicaApuestas(G); res = `Tienes ${euros(yo.dinero)}`; }
    if (fase === 'coche') { const ok = await R.clasicaCoche(G, yo); res = ok ? '🚗 ¡Te llevas el coche!' : 'El coche se queda en el plató'; }
    me.stopMusic(); hud.show(false); api.marcador(`${esc(PRUEBAS_ENTRENO[fase][0])}<br><small>${res}</small>`);
    const z = await Zi(new Promise(r => acciones([{ label: 'Repetir', cls: 'gold', fn: () => r('otra') }, { label: 'Entrenamiento', fn: () => r('menu') }])));
    api.marcador(null);
    if (z === 'menu') return api.menu('train');
  }
}
