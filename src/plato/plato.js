// Plató 3D ORIGINAL inspirado en las fotos del plató de 2021: pantalla gigante naranja con rayos y logo,
// columnas verticales de luces naranja/rosa/azul, suelo azul brillante con rayos naranjas y rojos,
// atriles blancos con rayo y bombilla, atril del presentador y focos móviles.
import * as THREE from 'three';
import { mat, glow, figure } from '../lib/helpers.js';
import { drawLogo, fondoRayos, rayo } from './logo.js';

export const PALETA_BASE = { suelo: '#1436c8', suelo2: '#0a1a70', rayos: ['#ff6a00', '#ff2a2a'], pantalla: ['#ff6a00', '#ffa000', '#ffe066'], columnas: [0xff8a1a, 0xff4fa8, 0x3a8bff], focos: [0xffffff, 0x9fd8ff], fondo: 0x050818, celda: ['#1f5cff', '#0a2a9a'] };
export const COLORES_CONC = ['#ffd21a', '#ff4fa8', '#33e6ff', '#7dff5a'];

function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); draw(g, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.userData = { c, g }; return t; }

function texSuelo(p) {
  return canvasTex(2048, 2048, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w / 2); gr.addColorStop(0, p.suelo); gr.addColorStop(1, p.suelo2);
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    // reflejos alargados
    g.globalAlpha = 0.12; g.fillStyle = '#9fd0ff'; for (let i = 0; i < 30; i++) { g.save(); g.translate(Math.random() * w, Math.random() * h); g.rotate(Math.random() * Math.PI); g.fillRect(-300, -6, 600, 12); g.restore(); } g.globalAlpha = 1;
    // rayos naranjas / rojos en el suelo
    let s = 7; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < 46; i++) { const a = rnd() * Math.PI * 2, r = 220 + rnd() * 760; const x = w / 2 + Math.cos(a) * r, y = h / 2 + Math.sin(a) * r;
      g.save(); g.translate(x, y); g.rotate(rnd() * Math.PI); rayo(g, 0, 0, 70 + rnd() * 50, i % 3 ? p.rayos[0] : p.rayos[1], 25, 2.2); g.restore(); }
    // anillo de luz del círculo central
    g.strokeStyle = '#ffb347'; g.lineWidth = 10; g.shadowColor = '#ff8a00'; g.shadowBlur = 30; g.beginPath(); g.arc(w / 2, h / 2, 560, 0, Math.PI * 2); g.stroke();
    g.strokeStyle = '#ff3a3a'; g.lineWidth = 5; g.beginPath(); g.arc(w / 2, h / 2, 900, 0.2, 2.4); g.stroke();
  });
}
function texColumna(color, seed) {
  const c = new THREE.Color(color); const css = '#' + c.getHexString();
  return canvasTex(64, 512, (g, w, h) => {
    g.fillStyle = '#0a0a14'; g.fillRect(0, 0, w, h);
    const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, css); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.globalAlpha = 0.55; g.fillRect(0, 0, w, h); g.globalAlpha = 1;
    for (let y = 8; y < h; y += 16) for (let x = 12; x < w; x += 20) { g.fillStyle = (Math.sin(y * 0.1 + seed + x) > -0.6) ? '#fff6e0' : css; g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); }
  });
}

export function construirPlato(scene, ctx, renderer) {
  const root = new THREE.Group(); scene.add(root);
  let pal = { ...PALETA_BASE };
  scene.background = new THREE.Color(pal.fondo); scene.fog = new THREE.Fog(pal.fondo, 30, 80);
  const updaters = [];
  // ---------- luces ----------
  const hemi = new THREE.HemisphereLight(0x9fb8ff, 0x101030, 0.9); root.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 14, 10); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 40 }); root.add(key);
  const fill = new THREE.PointLight(0xff9a3a, 30, 30, 1.6); fill.position.set(-8, 5, -4); root.add(fill);
  const fill2 = new THREE.PointLight(0x4f7bff, 26, 30, 1.6); fill2.position.set(9, 6, 2); root.add(fill2);

  // ---------- suelo ----------
  let sueloTex = texSuelo(pal);
  const sueloMat = new THREE.MeshStandardMaterial({ map: sueloTex, roughness: 0.18, metalness: 0.35 });
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(19, 72), sueloMat); suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true; root.add(suelo);
  const exterior = new THREE.Mesh(new THREE.RingGeometry(19, 60, 48), mat(0x05060e, { roughness: 0.9 })); exterior.rotation.x = -Math.PI / 2; exterior.position.y = -0.01; root.add(exterior);
  // borde curvo de luz naranja (como la curva del suelo de las fotos)
  const borde = new THREE.Mesh(new THREE.TorusGeometry(19, 0.06, 6, 120), glow(0xff7a1a, 2.2)); borde.rotation.x = Math.PI / 2; borde.position.y = 0.03; root.add(borde);

  // ---------- pantalla gigante ----------
  const PW = 15, PH = 7.6;
  const pantCanvas = document.createElement('canvas'); pantCanvas.width = 1600; pantCanvas.height = 810;
  const pg = pantCanvas.getContext('2d'); const pantTex = new THREE.CanvasTexture(pantCanvas); pantTex.colorSpace = THREE.SRGBColorSpace; pantTex.anisotropy = 4;
  const pantalla = new THREE.Group(); pantalla.position.set(-7.5, 0, -9.5); pantalla.rotation.y = 0.5; root.add(pantalla);
  const marco = new THREE.Mesh(new THREE.BoxGeometry(PW + 0.6, PH + 0.6, 0.5), mat(0x1a1d2a, { metalness: 0.6, roughness: 0.4 })); marco.position.y = 1.6 + PH / 2; pantalla.add(marco);
  const pantMesh = new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), new THREE.MeshBasicMaterial({ map: pantTex, toneMapped: false })); pantMesh.position.set(0, 1.6 + PH / 2, 0.27); pantalla.add(pantMesh);
  // zócalo con tira LED azul
  const zocalo = new THREE.Mesh(new THREE.BoxGeometry(PW + 0.6, 1.6, 0.9), mat(0xd8dce8, { metalness: 0.4, roughness: 0.3 })); zocalo.position.y = 0.8; pantalla.add(zocalo);
  for (let k = 0; k < 2; k++) { const tira = new THREE.Mesh(new THREE.BoxGeometry(PW + 0.4, 0.08, 0.02), glow(0x2a7bff, 3)); tira.position.set(0, 0.45 + k * 0.7, 0.46); pantalla.add(tira); }
  const pant = { modo: 'logo', datos: {}, sucio: true, t: 0 };

  function pintarPantalla(t) {
    const g = pg, w = pantCanvas.width, h = pantCanvas.height; const d = pant.datos;
    if (pant.modo === 'panel' && d.celdas) {
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#0a1450'); gr.addColorStop(1, '#1838b0'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
      const n = d.celdas.length, cols = d.cols || 4, rows = Math.ceil(n / cols); const top = d.tiempo != null ? 150 : 40, cw = (w - 80) / cols, ch = (h - top - 40) / rows;
      if (d.tiempo != null) { g.font = '900 130px "Arial Black", Arial'; g.fillStyle = '#fff'; g.textAlign = 'left'; g.textBaseline = 'top'; g.shadowColor = '#5fd8ff'; g.shadowBlur = 20; g.fillText(String(d.tiempo), 50, 6); g.shadowBlur = 0; }
      if (d.cat) { g.font = '900 54px Arial'; g.textAlign = 'right'; g.textBaseline = 'top'; g.fillStyle = '#ffe066'; g.fillText(String(d.cat).toUpperCase().slice(0, 34), w - 40, 50); }
      d.celdas.forEach((c, i) => {
        const x = 40 + (i % cols) * cw, y = top + Math.floor(i / cols) * ch;
        const est = c.est || '';
        const col = est === 'ya' ? ['#fff07a', '#e0b000'] : est === 'yb' ? ['#ff9ad0', '#d02a88'] : est === 'ok' ? ['#ffe066', '#ff9a00'] : est === 'ko' ? ['#ff4a4a', '#7a0010'] : est === 'sel' ? ['#ffb347', '#c45200'] : est === 'tapada' ? ['#2a2f50', '#10142a'] : pal.celda;
        const gg = g.createLinearGradient(0, y, 0, y + ch); gg.addColorStop(0, col[0]); gg.addColorStop(1, col[1]); g.fillStyle = gg;
        g.fillRect(x + 8, y + 8, cw - 16, ch - 16); g.strokeStyle = '#bfe4ff'; g.lineWidth = 5; g.strokeRect(x + 8, y + 8, cw - 16, ch - 16);
        g.fillStyle = est === 'ok' ? '#3a2000' : '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
        const txt = est === 'tapada' ? '?' : String(c.t || '').toUpperCase(); let fs = Math.min(58, ch * 0.3); g.font = `900 ${fs}px Arial`;
        const pal2 = txt.split(' '); const lines = []; let cur = '';
        for (const p of pal2) { const tst = cur ? cur + ' ' + p : p; if (g.measureText(tst).width > cw - 40 && cur) { lines.push(cur); cur = p; } else cur = tst; } lines.push(cur);
        while (lines.some(l => g.measureText(l).width > cw - 30) && fs > 20) { fs -= 4; g.font = `900 ${fs}px Arial`; }
        lines.slice(0, 3).forEach((l, k) => g.fillText(l, x + cw / 2, y + ch / 2 + (k - (Math.min(3, lines.length) - 1) / 2) * fs * 1.05));
      });
    } else if (pant.modo === 'bote') {
      fondoRayos(g, w, h, t, pal.pantalla);
      rayo(g, w * 0.5, h * 0.48, h * 0.9, '#33e6ff', 40, h * 0.004);
      g.font = '900 200px "Arial Black", Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineWidth = 16; g.strokeStyle = '#5a2a00'; g.strokeText(d.texto || '', w / 2, h * 0.5);
      g.fillStyle = '#ffffff'; g.shadowColor = '#fff2a0'; g.shadowBlur = 30; g.fillText(d.texto || '', w / 2, h * 0.5); g.shadowBlur = 0;
    } else if (pant.modo === 'info' && d.title) {
      fondoRayos(g, w, h, t, pal.pantalla); g.fillStyle = 'rgba(6,20,80,0.82)'; g.fillRect(90, 90, w - 180, h - 180); g.strokeStyle = '#5fd8ff'; g.lineWidth = 8; g.strokeRect(90, 90, w - 180, h - 180);
      g.fillStyle = '#ffe066'; g.font = '900 86px "Arial Black", Arial'; g.textAlign = 'center'; g.textBaseline = 'top'; g.fillText(d.title, w / 2, 120);
      g.font = 'bold 50px Arial'; (d.rows || []).slice(0, 6).forEach(([k, v], i) => { g.textAlign = 'right'; g.fillStyle = '#9fd8ff'; g.fillText(k, w / 2 - 20, 250 + i * 72); g.textAlign = 'left'; g.fillStyle = '#fff'; g.fillText(v, w / 2 + 20, 250 + i * 72); });
    } else {
      fondoRayos(g, w, h, t, pal.pantalla);
      if (ctx.logoPantalla && ctx.logoPantalla.complete && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla, s = Math.min((w * 0.7) / i.naturalWidth, (h * 0.8) / i.naturalHeight); g.drawImage(i, (w - i.naturalWidth * s) / 2, (h - i.naturalHeight * s) / 2, i.naturalWidth * s, i.naturalHeight * s); }
      else drawLogo(g, w * 0.5, h * 0.48, w * 0.6, t, ctx.logoOpts || {});
      if (ctx.banner) { g.font = '900 54px Arial'; g.textAlign = 'center'; g.fillStyle = '#fff'; g.strokeStyle = '#5a2a00'; g.lineWidth = 8; g.strokeText(ctx.banner, w / 2, h - 60); g.fillText(ctx.banner, w / 2, h - 60); }
    }
    pantTex.needsUpdate = true;
  }

  // ---------- columnas de luces ----------
  const columnas = [];
  const addColumna = (x, z, ry, alto, ci) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry;
    const fr = new THREE.Mesh(new THREE.BoxGeometry(1.1, alto, 0.5), mat(0xc8ccd8, { metalness: 0.6, roughness: 0.35 })); fr.position.y = alto / 2; g.add(fr);
    const tex = texColumna(pal.columnas[ci], x * 3 + z);
    const m = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.6 });
    const pnl = new THREE.Mesh(new THREE.PlaneGeometry(0.8, alto - 0.4), m); pnl.position.set(0, alto / 2, 0.26); g.add(pnl);
    root.add(g); columnas.push({ g, m, ci, fase: Math.random() * 6 });
  };
  for (let i = 0; i < 14; i++) addColumna(1 + i * 1.25, -12.6 + Math.sin(i * 0.5) * 0.3, 0, 6 + (i % 3) * 1.6 + (i % 5 === 0 ? 1.5 : 0), i % 3);
  for (let i = 0; i < 9; i++) addColumna(17.8 - i * 0.2, -10.5 + i * 1.6, -Math.PI / 2 + 0.1, 6.5 + (i % 3) * 1.4, (i + 1) % 3);
  for (let i = 0; i < 6; i++) addColumna(-15.5 - i * 0.6, -4 + i * 1.5, Math.PI / 2 - 0.2, 5 + (i % 2) * 1.5, (i + 2) % 3);
  // estructura metálica (celosía) detrás de las columnas
  const cel = mat(0x8a90a0, { metalness: 0.8, roughness: 0.3 });
  for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(18, 0.08, 0.08), cel); b.position.set(9.5, 1 + i * 1.6, -13.1); root.add(b); }

  // ---------- atril del presentador ----------
  const atrilTex = canvasTex(256, 512, (g, w, h) => { g.fillStyle = '#f4f6fb'; g.fillRect(0, 0, w, h); g.fillStyle = '#d8dce8'; g.fillRect(0, h - 40, w, 40); rayo(g, w / 2, h * 0.45, 260, '#2a8bff', 20, 1.4); });
  const pres = new THREE.Group(); pres.position.set(5.5, 0, -7.6); root.add(pres);
  const pA = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.25, 0.7), [mat(0xf0f2f8), mat(0xf0f2f8), mat(0xf0f2f8), mat(0xf0f2f8), new THREE.MeshStandardMaterial({ map: atrilTex, roughness: 0.4 }), mat(0xf0f2f8)]); pA.position.y = 0.625; pA.castShadow = true; pres.add(pA);
  const pTop = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.9), mat(0xffffff, { roughness: 0.2 })); pTop.position.y = 1.29; pres.add(pTop);
  // cartel del logo detrás del presentador
  const cartelTex = canvasTex(1024, 640, (g, w, h) => { g.fillStyle = '#1a0b30'; g.fillRect(0, 0, w, h); const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#ff4fa8'); gr.addColorStop(1, '#3a8bff'); g.fillStyle = gr; g.globalAlpha = 0.5; g.fillRect(0, 0, w, h); g.globalAlpha = 1; drawLogo(g, w / 2, h * 0.48, w * 0.72); });
  const cartel = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2), new THREE.MeshBasicMaterial({ map: cartelTex, toneMapped: false })); cartel.position.set(5.5, 3.2, -11.2); root.add(cartel);
  const presentador = figure({ body: 0x1a2a5a, legs: 0x15151f, skin: 0xd9b08c, hair: 0x2a1a10 }); presentador.position.set(5.5, 0, -8.35); root.add(presentador);
  { const camisa = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.05), mat(0xffffff)); camisa.position.set(0, 1.15, 0.15); presentador.add(camisa); }

  // ---------- atriles de los concursantes (blancos, con rayo, pulsador rojo y bombilla) ----------
  const atriles = [], figs = [];
  const posA = [[-1.8, 1.6], [1.0, 2.6], [3.8, 2.8], [6.6, 2.0]];
  const mirar = new THREE.Vector3(-7.5, 0, -9.5);
  const crearRotulo = () => canvasTex(512, 128, () => {});
  posA.forEach(([x, z], i) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.lookAt(mirar.x, 0, mirar.z); root.add(g);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.08, 28), mat(0xd8dce8, { metalness: 0.5 })); base.position.y = 0.04; g.add(base);
    const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.0, 12), mat(0xe8eaf2, { metalness: 0.6, roughness: 0.25 })); poste.position.y = 0.55; g.add(poste);
    const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.32, 0.5), mat(0xf6f7fb, { roughness: 0.3 })); cuerpo.position.y = 1.18; cuerpo.castShadow = true; g.add(cuerpo);
    const rTex = crearRotulo(); const rot = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.18), new THREE.MeshBasicMaterial({ map: rTex, toneMapped: false })); rot.position.set(0, 1.18, -0.26); rot.rotation.y = Math.PI; g.add(rot);
    const boton = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.07, 20), glow(0xff1a1a, 1.2)); boton.position.set(0, 1.37, 0.05); g.add(boton);
    const bulbo = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 14), new THREE.MeshStandardMaterial({ color: 0xfff8e0, emissive: 0x000000, transparent: true, opacity: 0.85, roughness: 0.1 })); bulbo.position.set(0.3, 1.62, 0.12); g.add(bulbo);
    const casq = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.12, 12), mat(0xb0b4c0, { metalness: 0.8 })); casq.position.set(0.3, 1.42, 0.12); g.add(casq);
    const luz = new THREE.PointLight(0xffd060, 0, 4, 2); luz.position.copy(bulbo.position); g.add(luz);
    const f = figure({ body: [0x2a6b3a, 0x202024, 0xf0f0f0, 0xc81e3a][i], legs: [0xc8b89a, 0x223355, 0x334477, 0xc81e3a][i], skin: [0xc8a07a, 0xd9b08c, 0xe0b898, 0xc89070][i], hair: [0x1a1008, 0x3a2a1a, 0x5a3a20, 0x101010][i] });
    f.position.set(0, 0, -0.75); g.add(f);
    atriles.push({ g, bulbo, luz, rot, rTex, boton, est: 'off', shards: null }); figs.push(f);
  });
  function setAtril(i, { nombre = '', color = '#fff', dinero = '' } = {}) {
    const a = atriles[i]; if (!a) return; const { c, g } = a.rTex.userData; g.clearRect(0, 0, 512, 128); g.fillStyle = '#0a1a5a'; g.fillRect(0, 0, 512, 128); g.fillStyle = color; g.fillRect(0, 0, 14, 128);
    g.font = '900 54px Arial'; g.fillStyle = '#fff'; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(String(nombre).toUpperCase().slice(0, 12), 30, 64); g.textAlign = 'right'; g.fillStyle = '#ffe066'; g.font = '900 40px Arial'; g.fillText(dinero, 500, 64); a.rTex.needsUpdate = true;
  }
  function bombilla(i, est) {
    const a = atriles[i]; if (!a) return; a.est = est;
    if (a.shards) { a.g.remove(a.shards); a.shards = null; }
    a.bulbo.visible = est !== 'rota';
    a.bulbo.material.emissive.set(est === 'on' ? 0xffd040 : 0x000000); a.bulbo.material.emissiveIntensity = est === 'on' ? 3 : 0; a.luz.intensity = est === 'on' ? 6 : 0;
    if (est === 'rota') { const s = new THREE.Group(); for (let k = 0; k < 14; k++) { const m = new THREE.Mesh(new THREE.TetrahedronGeometry(0.04 + Math.random() * 0.04), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, roughness: 0 })); m.position.copy(a.bulbo.position); m.userData.v = new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2); s.add(m); } s.userData.t = 0; a.g.add(s); a.shards = s; }
  }
  // ---------- focos móviles ----------
  const focos = [];
  const coneGeo = new THREE.ConeGeometry(1.4, 12, 24, 1, true); coneGeo.translate(0, -6, 0);
  for (let i = 0; i < 8; i++) {
    const piv = new THREE.Group(); piv.position.set(-12 + i * 3.4, 12.5, -6 + (i % 2) * 6); root.add(piv);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), mat(0x222228)); piv.add(cab);
    const cone = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.045, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); piv.add(cone);
    focos.push({ piv, cone, fase: i * 0.8 });
  }
  // charcos de luz en el suelo
  const charcos = []; const charcoMat = c => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let i = 0; i < 7; i++) { const m = new THREE.Mesh(new THREE.CircleGeometry(1.2, 32), charcoMat(i % 2 ? 0x5fd8ff : 0xffffff)); m.rotation.x = -Math.PI / 2; m.position.y = 0.02; root.add(m); charcos.push({ m, fase: i * 1.3 }); }
  // truss del techo
  for (let k = 0; k < 2; k++) { const t = new THREE.Mesh(new THREE.BoxGeometry(30, 0.3, 0.3), cel); t.position.set(0, 12.8, -6 + k * 6); root.add(t); }

  // ---------- gradas con público (opción «Público en las gradas») ----------
  const grada = new THREE.Group(); grada.userData.publico = true; root.add(grada);
  for (let fila = 0; fila < 3; fila++) {
    const esc = new THREE.Mesh(new THREE.BoxGeometry(16, 0.5, 1.2), mat(0x1a1d2e)); esc.position.set(2, 0.25 + fila * 0.5, 15 + fila * 1.2); esc.scale.y = 1 + fila; esc.position.y = (0.5 * (1 + fila)) / 2; grada.add(esc);
    for (let k = 0; k < 12; k++) { const p = figure({ body: [0xff5a5a, 0x5a8aff, 0xffd34d, 0x8aff8a, 0xff8ad8][(k + fila) % 5], seated: true, scale: 0.9 }); p.position.set(-5 + k * 1.3 + (fila % 2) * 0.4, 0.5 * (1 + fila), 15 + fila * 1.2); p.rotation.y = Math.PI; grada.add(p); }
  }
  // ---------- paseo (walker + marca + colisiones) ----------
  const walker = figure({ body: 0xff7a1a, legs: 0x223355 }); walker.visible = false; root.add(walker);
  const marca = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 8, 36), glow(0x33ff88, 3)); marca.rotation.x = Math.PI / 2; marca.visible = false; root.add(marca);
  const posAtril = i => { const v = new THREE.Vector3(); figs[i].getWorldPosition(v); return v; };
  function bloqueado(x, z) {
    if (Math.hypot(x, z) > 17.5) return true;
    if (z < -11.8) return true;
    // pantalla (en coordenadas locales)
    const lx = (x + 7.5) * Math.cos(-0.5) - (z + 9.5) * Math.sin(-0.5) * -1; void lx;
    const p = new THREE.Vector3(x, 0, z); pantalla.worldToLocal(p); if (Math.abs(p.x) < PW / 2 + 0.4 && p.z < 1 && p.z > -1.5) return true;
    if (Math.abs(x - 5.5) < 0.9 && Math.abs(z + 7.6) < 0.6) return true;
    for (const a of atriles) { if (Math.hypot(x - a.g.position.x, z - a.g.position.z) < 0.5) return true; }
    if (z > 13.8) return true;
    return false;
  }
  const alturaEn = () => 0;

  // ---------- celebración (confeti) ----------
  let confeti = null;
  function celebrar() {
    if (confeti) root.remove(confeti);
    const n = 400, geo = new THREE.BufferGeometry(), pos = new Float32Array(n * 3), col = new Float32Array(n * 3), vel = [];
    const cs = [new THREE.Color(0xffd21a), new THREE.Color(0x33e6ff), new THREE.Color(0xff4fa8), new THREE.Color(0xffffff)];
    for (let i = 0; i < n; i++) { pos.set([(Math.random() - 0.5) * 20, 12 + Math.random() * 6, (Math.random() - 0.5) * 16], i * 3); const c = cs[i % 4]; col.set([c.r, c.g, c.b], i * 3); vel.push(1 + Math.random() * 2); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    confeti = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.15, vertexColors: true })); confeti.userData = { vel, t: 0 }; root.add(confeti);
  }

  // ---------- tema / paleta ----------
  function setTema(p) {
    pal = { ...PALETA_BASE, ...(p || {}) };
    scene.background.set(pal.fondo); scene.fog.color.set(pal.fondo);
    sueloTex.dispose(); sueloTex = texSuelo(pal); sueloMat.map = sueloTex; sueloMat.needsUpdate = true;
    columnas.forEach(c => { c.m.emissiveMap.dispose(); c.m.emissiveMap = texColumna(pal.columnas[c.ci], c.fase * 10); c.m.needsUpdate = true; });
    focos.forEach((f, i) => f.cone.material.color.set(pal.focos[i % pal.focos.length]));
    charcos.forEach((c, i) => c.m.material.color.set(pal.focos[i % pal.focos.length]));
    fill.color.set(pal.columnas[0]); fill2.color.set(pal.columnas[2]);
    pant.sucio = true;
  }
  // ---------- carrera hasta la pantalla (El minuto diabólico) ----------
  const carreras = new Map();
  function correr(i, ida) { const f = figs[i]; const a = atriles[i]; const dest = new THREE.Vector3(); if (ida) { dest.set(0, 0, 1.2); pantalla.localToWorld(dest); a.g.worldToLocal(dest); } else dest.set(0, 0, -0.75); carreras.set(i, { f, dest, t: 0 }); }

  let pantT = 0;
  function update(t, dt) {
    pantT += dt; if (pant.sucio || (pant.modo !== 'panel' && pantT > 0.12)) { pintarPantalla(t); pant.sucio = false; pantT = 0; }
    focos.forEach(f => { f.piv.rotation.z = Math.sin(t * 0.7 + f.fase) * 0.55; f.piv.rotation.x = Math.cos(t * 0.5 + f.fase * 1.3) * 0.4; });
    charcos.forEach(c => { c.m.position.set(Math.sin(t * 0.4 + c.fase) * 9, 0.02, Math.cos(t * 0.33 + c.fase * 2) * 7 + 1); });
    columnas.forEach(c => { c.m.emissiveIntensity = 1.2 + Math.sin(t * 2.2 + c.fase) * 0.5; });
    atriles.forEach(a => { if (a.shards) { a.shards.userData.t += dt; a.shards.children.forEach(m => { m.position.addScaledVector(m.userData.v, dt); m.userData.v.y -= 6 * dt; if (m.position.y < 0.02) { m.position.y = 0.02; m.userData.v.set(0, 0, 0); } }); } if (a.est === 'on') a.luz.intensity = 5 + Math.sin(t * 20) * 1; });
    presentador.rotation.y = Math.sin(t * 0.6) * 0.25 + 0.3;
    for (const [i, c] of carreras) { c.t += dt; const d = c.dest.clone().sub(c.f.position); d.y = 0; const L = d.length(); if (L < 0.08) { carreras.delete(i); c.f.children.forEach(m => m.rotation.x = 0); continue; } d.normalize().multiplyScalar(Math.min(L, dt * 7)); c.f.position.add(d); c.f.rotation.y = Math.atan2(d.x, d.z); c.f.children.forEach((m, k) => { if (k >= 5) m.rotation.x = Math.sin(c.t * 16) * 0.7 * (k % 2 ? 1 : -1); }); }
    if (confeti) { const p = confeti.geometry.attributes.position; confeti.userData.t += dt; for (let i = 0; i < p.count; i++) { let y = p.getY(i) - confeti.userData.vel[i] * dt; p.setX(i, p.getX(i) + Math.sin(t * 3 + i) * dt * 0.5); p.setY(i, y); } p.needsUpdate = true; if (confeti.userData.t > 9) { root.remove(confeti); confeti = null; } }
  }
  setTema(null);
  return {
    root, update, setTema, celebrar, presentador, figs, atriles, setAtril, bombilla, walker, marca, posAtril, bloqueado, alturaEn, correr, pantallaObj: pantalla,
    pantalla(modo, datos = {}) { pant.modo = modo; pant.datos = datos; pant.sucio = true; },
    refrescarPantalla() { pant.sucio = true; },
    ocultarFig(i, v) { if (figs[i]) figs[i].visible = !v; },
    reset() { atriles.forEach((a, i) => { bombilla(i, 'off'); figs[i].position.set(0, 0, -0.75); figs[i].rotation.y = 0; figs[i].visible = true; }); carreras.clear(); pant.modo = 'logo'; pant.sucio = true; },
  };
}
