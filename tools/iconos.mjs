// Genera icon-192.png e icon-512.png (rayo cian sobre fondo naranja con rayos, original)
import puppeteer from 'puppeteer-core'; import fs from 'fs';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const p = await b.newPage();
for (const S of [192, 512]) {
  const data = await p.evaluate(S => {
    const c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
    const gr = g.createRadialGradient(S / 2, S / 2, 4, S / 2, S / 2, S * 0.72); gr.addColorStop(0, '#ffe066'); gr.addColorStop(0.4, '#ffa000'); gr.addColorStop(1, '#e05000'); g.fillStyle = gr; g.fillRect(0, 0, S, S);
    g.save(); g.translate(S / 2, S / 2); for (let i = 0; i < 24; i++) { g.rotate(Math.PI / 12); g.fillStyle = i % 2 ? 'rgba(255,255,255,.14)' : 'rgba(255,80,0,.12)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(S, -S * 0.06); g.lineTo(S, S * 0.06); g.fill(); } g.restore();
    g.save(); g.globalAlpha = 0.7; g.strokeStyle = '#fff6c0'; g.lineWidth = S * 0.025; g.beginPath(); g.arc(S / 2, S * 0.42, S * 0.3, Math.PI * 0.78, Math.PI * 2.22); g.lineTo(S * 0.6, S * 0.8); g.lineTo(S * 0.4, S * 0.8); g.closePath(); g.stroke(); g.restore();
    const s = S / 120; g.save(); g.translate(S / 2, S * 0.48); g.scale(s, s); g.beginPath(); g.moveTo(14, -50); g.lineTo(-22, 6); g.lineTo(-2, 6); g.lineTo(-16, 50); g.lineTo(24, -10); g.lineTo(4, -10); g.lineTo(20, -50); g.closePath(); g.restore();
    g.shadowColor = '#00e0ff'; g.shadowBlur = S * 0.08; g.fillStyle = '#33e6ff'; g.fill(); g.shadowBlur = 0; g.lineWidth = S * 0.025; g.strokeStyle = '#06204a'; g.stroke();
    g.font = `900 ${S * 0.15}px Arial Black, Arial`; g.textAlign = 'center'; g.fillStyle = '#fff'; g.strokeStyle = '#06204a'; g.lineWidth = S * 0.03; g.strokeText('ALTA', S / 2, S * 0.95); g.fillText('ALTA', S / 2, S * 0.95);
    return c.toDataURL('image/png').split(',')[1];
  }, S);
  fs.writeFileSync(`icon-${S}.png`, Buffer.from(data, 'base64'));
}
await b.close(); console.log('iconos ok');
