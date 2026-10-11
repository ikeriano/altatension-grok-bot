// Logo ORIGINAL dibujado por código: «¡ALTA TENSIÓN!» en letras celestes con rayos cian y bombilla detrás.
// (No es el logo oficial; el usuario puede subir el suyo desde Opciones.)
export function rayo(g, x, y, h, color = '#33e6ff', glow = 18, w = null) {
  const s = h / 100; w = w ?? s;
  g.save(); g.translate(x, y); g.scale(w, s);
  g.beginPath(); g.moveTo(14, -50); g.lineTo(-22, 6); g.lineTo(-2, 6); g.lineTo(-16, 50); g.lineTo(24, -10); g.lineTo(4, -10); g.lineTo(20, -50); g.closePath();
  g.restore();
  g.save(); g.shadowColor = color; g.shadowBlur = glow; g.fillStyle = color; g.fill(); g.lineWidth = Math.max(1.5, h * 0.03); g.strokeStyle = '#ffffff'; g.stroke(); g.restore();
}
/** Rayos de fondo (como la pantalla gigante naranja del plató) */
export function fondoRayos(g, w, h, t = 0, cols = ['#ff7a00', '#ffb000', '#ffe066']) {
  const gr = g.createRadialGradient(w * 0.5, h * 0.45, 10, w * 0.5, h * 0.5, Math.max(w, h) * 0.75);
  gr.addColorStop(0, cols[2]); gr.addColorStop(0.35, cols[1]); gr.addColorStop(1, cols[0]);
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.save(); g.translate(w * 0.5, h * 0.45); g.rotate(t * 0.05);
  for (let i = 0; i < 36; i++) { g.rotate(Math.PI * 2 / 36); g.fillStyle = i % 2 ? 'rgba(255,255,255,0.10)' : 'rgba(255,90,0,0.10)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.max(w, h), -40); g.lineTo(Math.max(w, h), 40); g.fill(); }
  g.restore();
  // estelas de velocidad
  g.save(); g.globalAlpha = 0.25; g.strokeStyle = '#fff';
  for (let i = 0; i < 40; i++) { const a = i * 2.39996 + t * 0.2, r0 = (0.25 + (i * 0.137 % 0.4)) * w, r1 = r0 + 0.08 * w; g.lineWidth = 1 + (i % 3); g.beginPath(); g.moveTo(w * 0.5 + Math.cos(a) * r0, h * 0.45 + Math.sin(a) * r0 * 0.6); g.lineTo(w * 0.5 + Math.cos(a) * r1, h * 0.45 + Math.sin(a) * r1 * 0.6); g.stroke(); }
  g.restore();
}
function bombilla(g, cx, cy, r, a = 1) {
  g.save(); g.globalAlpha = 0.55 * a; g.shadowColor = '#ffe680'; g.shadowBlur = r * 0.4;
  const gr = g.createRadialGradient(cx, cy, r * 0.1, cx, cy, r); gr.addColorStop(0, 'rgba(255,255,220,0.95)'); gr.addColorStop(0.6, 'rgba(255,220,120,0.5)'); gr.addColorStop(1, 'rgba(255,200,80,0)');
  g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
  g.globalAlpha = 0.9 * a; g.lineWidth = r * 0.05; g.strokeStyle = '#fff6c0';
  g.beginPath(); g.arc(cx, cy, r * 0.82, Math.PI * 0.78, Math.PI * 2.22); g.lineTo(cx + r * 0.3, cy + r * 1.05); g.lineTo(cx - r * 0.3, cy + r * 1.05); g.closePath(); g.stroke();
  for (let k = 0; k < 3; k++) { g.beginPath(); g.moveTo(cx - r * 0.32, cy + r * (1.15 + k * 0.13)); g.lineTo(cx + r * 0.32, cy + r * (1.15 + k * 0.13)); g.stroke(); }
  g.restore();
}
/** Dibuja el logo centrado en (cx, cy) con ancho w */
export function drawLogo(g, cx, cy, w, t = 0, { texto = '¡ALTA', sub = 'TENSIÓN!', valenciano = false } = {}) {
  if (valenciano) sub = 'TENSIÓ!';
  let H = w * 0.36;
  { g.save(); g.font = `900 ${H}px "Arial Black", Impact, Arial`; const m = g.measureText(texto).width; g.restore(); if (m > w * 1.05) H *= w * 1.05 / m; }
  bombilla(g, cx, cy - H * 0.35, H * 0.95, 0.9 + Math.sin(t * 3) * 0.1);
  g.save(); g.translate(cx, cy); g.transform(1, 0, -0.18, 1, 0, 0);
  g.font = `900 ${H}px "Arial Black", Impact, Arial`; g.textAlign = 'center'; g.textBaseline = 'middle';
  const gr = g.createLinearGradient(0, -H / 2, 0, H / 2); gr.addColorStop(0, '#e8fbff'); gr.addColorStop(0.5, '#7fdcff'); gr.addColorStop(1, '#1a8cff');
  g.lineJoin = 'round'; g.lineWidth = H * 0.16; g.strokeStyle = '#06204a'; g.strokeText(texto, 0, 0);
  g.lineWidth = H * 0.06; g.strokeStyle = '#ffffff'; g.strokeText(texto, 0, 0);
  g.fillStyle = gr; g.shadowColor = '#00d0ff'; g.shadowBlur = H * 0.25; g.fillText(texto, 0, 0);
  g.restore();
  // rayos dentro de las «A»
  const mw = (() => { g.save(); g.font = `900 ${H}px "Arial Black", Impact, Arial`; const m = g.measureText(texto).width; g.restore(); return m; })();
  rayo(g, cx - mw * 0.30, cy + H * 0.05, H * 0.62, '#33e6ff', H * 0.2); rayo(g, cx + mw * 0.36, cy + H * 0.05, H * 0.62, '#33e6ff', H * 0.2);
  // «TENSIÓN!»
  g.save(); g.translate(cx + w * 0.04, cy + H * 0.72); g.transform(1, 0, -0.18, 1, 0, 0);
  g.font = `900 ${H * 0.42}px "Arial Black", Impact, Arial`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineJoin = 'round'; g.lineWidth = H * 0.09; g.strokeStyle = '#06204a'; g.strokeText(sub, 0, 0);
  const g2 = g.createLinearGradient(0, -H * 0.2, 0, H * 0.2); g2.addColorStop(0, '#fff'); g2.addColorStop(1, '#5fd8ff');
  g.fillStyle = g2; g.shadowColor = '#00c8ff'; g.shadowBlur = H * 0.15; g.fillText(sub, 0, 0);
  g.restore();
}
