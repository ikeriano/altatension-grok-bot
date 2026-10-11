# ¡Alta Tensión! El juego 3D

Juego web 3D (Three.js + esbuild, PWA instalable) inspirado en el concurso ¡Alta Tensión!. Proyecto de fans, sin ánimo de lucro.
Misma interfaz que la plantilla de menús (título «Toca para empezar», menú, Jugar, Opciones, Historia, Cómo se juega, Créditos, Instalar app).

**Juego creado por: Iker**

## Modos
- **Programa completo** (Telecinco/Cuatro 2021-22, Telemadrid 2025, À Punt 2024): repesca, ¡A por todas!, ¡Esa me suena!, Fíjate bien, La bombilla caliente, Busca pareja, Cara a cara (desempate Jaque mate) y El minuto diabólico.
- **Clásico** (Antena 3 1998-2000, Cuatro 2006-08, Veo7 «Tensión sin límite» 2011): 3 concursantes, 3 paneles de 16, paneles de 12 con apuestas y ronda final por el coche.
- **Entrenamiento**, **Explorar el plató**, **Monólogos del presentador** y **Programa especial** (temas).

## Desarrollo
```
npm install
npx esbuild src/main.js --bundle --format=iife --minify --outfile=js/app.js
python3 -m http.server 8767
```
- Paneles: `src/data/paneles.json` (generado con `tools/gen_paneles.py`). Para añadir paneles sin recompilar, edita `data/paneles_extra.js`.
- Voces Piper pregeneradas: `node tools/frases.mjs` y `python tools/gen_voces.py tools/frases.json .` (presentador es_ES davefx; concursantes sharvard, carlfm, ald, daniela). Lo que no está grabado lo lee la voz del navegador (masculina si existe).
- Pruebas: `node tools/menus.mjs` y `node tools/flujo.mjs programa normal capturas/flujo`.
