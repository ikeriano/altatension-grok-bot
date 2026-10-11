// Monólogos ORIGINALES del presentador virtual (con el público, al teléfono y cambiando las normas)
export const TIPO_ICONO = { publico: '👏', telefono: '📞', normas: '📜' };
export const TIPO_TXT = { publico: 'Con el público', telefono: 'Al teléfono', normas: 'Las normas' };
export const MONOLOGOS = [
  { id: 'pub-saludo', tipo: 'publico', titulo: 'Bajando a saludar', cam: 'publico', lineas: [
    '¡Un momento! Antes de empezar voy a saludar a la gente de las gradas.',
    'Señora de la primera fila, ¡ese vestido brilla más que nuestra pantalla!',
    'Caballero, ¿usted viene todos los días? ¡Si ya tiene hasta su bombilla con nombre!',
    'Y los del fondo, ¡aplaudid fuerte, que si no se nos apagan las luces!',
    '¡Muchas gracias! Me vuelvo al plató antes de que alguien toque un enchufe sin mí.'] },
  { id: 'pub-cumple', tipo: 'publico', titulo: 'Un cumpleaños en el público', cam: 'publico', lineas: [
    'Me dicen que hoy hay alguien de cumpleaños en el público.',
    '¡Felicidades! Aquí no tenemos velas… tenemos bombillas. ¡Pide un deseo y sopla fuerte!',
    'No, no se apagan. Son de bajo consumo, duran más que mis chistes.',
    '¡Un aplauso para nuestro cumpleañero!'] },
  { id: 'tel-madre', tipo: 'telefono', titulo: 'Llama mi madre', cam: 'presentador', lineas: [
    'Perdonad, que me está sonando el móvil… ¡Es mi madre!',
    '¿Sí, mamá? Sí, estoy en directo. No, no me he puesto el jersey de rombos.',
    '¿Que si he comido? Mamá, que hay cuatro concursantes esperando.',
    '¿Que te diga la respuesta de la casilla tres? ¡Mamá, eso es trampa!',
    'Vale, vale, un beso. ¡Os manda recuerdos a todos!'] },
  { id: 'tel-electricista', tipo: 'telefono', titulo: 'El electricista', cam: 'presentador', lineas: [
    'Un segundo, que me llama el electricista del plató.',
    '¿Cómo que hay una bombilla que no se rompe? ¡Pues será la del pasillo!',
    '¿Y la factura de la luz de este mes? No, no me la leas en directo, que el público se desmaya.',
    'Gracias, Manolo. ¡Que no se te funda nada!'] },
  { id: 'nor-nuevas', tipo: 'normas', titulo: 'Normas nuevas del plató', cam: 'general', lineas: [
    'Atención, que producción me pasa unas normas nuevas.',
    'Norma uno: está prohibido llamar «lámpara» a una bombilla delante de ella. Se ofenden.',
    'Norma dos: si alguien se planta, el público tiene que decir «¡ohhh!». Probamos… ¡Muy bien!',
    'Norma tres: el presentador siempre tiene razón. Salvo cuando se equivoca, que es casi siempre.',
    '¡Y con estas normas, seguimos con el programa!'] },
  { id: 'nor-bote', tipo: 'normas', titulo: 'Cómo cuidar el bote', cam: 'pantalla', lineas: [
    'Os voy a explicar cómo cuidamos el bote en Alta Tensión.',
    'Cada noche le damos las buenas noches y le cantamos una nana.',
    'Si nadie se lo lleva, crece. Como las plantas, pero con más ceros.',
    '¡Y algún día alguien se lo llevará a casa! ¿Será hoy?'] },
];
