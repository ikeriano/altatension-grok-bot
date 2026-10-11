// Grafismo del panel (pantalla partida con tablero de casillas azules y franja inferior con la categoría),
// reflejado también en la pantalla gigante del plató 3D.
import { $, esc, Zi, VEL, euros } from './core.js';
import { me } from '../lib/audio.js';

let P = null; export const setPlato = p => { P = p; };
let actual = null;
const colsDe = n => n <= 4 ? 2 : n === 9 ? 3 : n === 15 ? 5 : 4;

/** Abre un tablero. celdas = [{t, ok, img, par}] · lados = [concA, concB] para pantalla partida */
export function abrir({ cat = '', celdas, cols = null, lados = null, tiempo = null, titulo = '', clase = '' }) {
  cerrar();
  const el = $('#tablero'); cols = cols || colsDe(celdas.length);
  const T = { el, celdas: celdas.map(c => ({ ...c, est: c.est || '' })), cols, cat, tiempo, lados, resolver: null };
  el.className = 'tablero ' + clase + (lados ? ' partida' : '');
  el.innerHTML = `${titulo ? `<div class="tb-tit">${esc(titulo)}</div>` : ''}<div class="tb-tiempo"></div>
    <div class="tb-cuerpo">${lados ? `<div class="tb-lado l0"></div>` : ''}<div class="tb-grid" style="grid-template-columns:repeat(${cols},1fr)"></div>${lados ? `<div class="tb-lado l1"></div>` : ''}</div>
    <div class="tb-cat"><span>${esc(cat)}</span></div><div class="tb-acc"></div>`;
  actual = T; pintar(); el.classList.remove('hidden');
  return api(T);
}
function api(T) {
  return {
    T,
    marcar(i, est) { T.celdas[i].est = est; pintar(); },
    estado: i => T.celdas[i].est,
    tiempo(n) { T.tiempo = n; const e = T.el.querySelector('.tb-tiempo'); e.textContent = n == null ? '' : String(Math.ceil(n)); e.classList.toggle('low', n != null && n <= 10); P?.pantalla('panel', datos3D(T)); },
    lados(l) { T.lados = l; pintarLados(); },
    revelar() { T.celdas.forEach(c => { if (!c.est || c.est === 'sel' || c.est === 'tapada') c.est = c.ok ? 'rev-ok' : 'rev-ko'; }); pintar(); },
    cat(t) { T.cat = t; T.el.querySelector('.tb-cat span').textContent = t; P?.pantalla('panel', datos3D(T)); },
    /** Espera a que el humano pulse una casilla de las disponibles. extra = promesas que cortan la espera */
    elegir(disponibles, extra = []) {
      const set = new Set(disponibles); T.disp = set; pintar();
      return Zi(Promise.race([new Promise(r => { T.resolver = i => { T.resolver = null; T.disp = null; me.play('tecla'); r(i); }; }), ...extra])).finally(() => { T.resolver = null; T.disp = null; pintar(); });
    },
    botones(lista) { const a = T.el.querySelector('.tb-acc'); a.innerHTML = ''; return new Promise(r => { (lista || []).forEach(x => { const b = document.createElement('button'); b.className = 'tbb ' + (x.cls || ''); b.innerHTML = x.label; b.onclick = e => { e.stopPropagation(); me.play('tecla'); r(x.v); }; a.appendChild(b); }); }); },
    limpiarBotones() { T.el.querySelector('.tb-acc').innerHTML = ''; },
    pintar,
  };
}
const ICON = { ok: '💡', ko: '💥', ya: '💡', yb: '💡' };
function pintar() {
  const T = actual; if (!T) return;
  const g = T.el.querySelector('.tb-grid'); g.innerHTML = '';
  T.celdas.forEach((c, i) => {
    const b = document.createElement('button'); const est = c.est || '';
    b.className = 'tc ' + est + (T.disp && T.disp.has(i) ? ' disp' : '') + (c.img && est === 'tapada' ? '' : '');
    const txt = est === 'tapada' ? '?' : c.img && (est === '' || est === 'disp') && c.ocultaImg ? (c.t) : c.t;
    b.innerHTML = `<span class="tt">${esc(txt)}</span>${ICON[est] ? `<i class="ic">${ICON[est]}</i>` : ''}${c.badge ? `<em class="bd">${esc(c.badge)}</em>` : ''}`;
    b.disabled = !(T.disp && T.disp.has(i));
    b.onclick = e => { e.stopPropagation(); if (T.resolver && T.disp && T.disp.has(i)) T.resolver(i); };
    g.appendChild(b);
  });
  pintarLados();
  P?.pantalla('panel', datos3D(T));
}
function pintarLados() {
  const T = actual; if (!T || !T.lados) return;
  T.lados.forEach((c, k) => { const e = T.el.querySelector('.tb-lado.l' + k); if (!e || !c) return; e.style.setProperty('--c', c.color); e.innerHTML = `<div class="av">${c.emoji || '🙂'}</div><b>${esc(c.nombre)}</b><small>${esc(c.prof || '')}</small><div class="lm">${c.marca != null ? esc(String(c.marca)) : euros(c.dinero)}</div>`; e.classList.toggle('act', !!c.activo); });
}
function datos3D(T) { return { cat: T.cat, cols: T.cols, tiempo: T.tiempo == null ? null : Math.ceil(T.tiempo), celdas: T.celdas.map(c => ({ t: c.t, est: c.est === 'rev-ok' ? '' : c.est === 'rev-ko' ? '' : c.est })) }; }
export function cerrar() { const el = $('#tablero'); if (el) { el.classList.add('hidden'); el.innerHTML = ''; } actual = null; P?.pantalla('logo'); }
export const abierto = () => !!actual;
