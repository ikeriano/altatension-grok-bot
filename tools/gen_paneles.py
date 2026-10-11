# Genera src/data/paneles.json (preguntas ORIGINALES). Edita aquí o en data/paneles_extra.js.
import json
N = []
def p(t, c, i): N.append({"t": t, "c": c, "i": i})
p("Son capitales de países europeos", ["París","Roma","Berlín","Lisboa","Viena","Atenas","Dublín","Varsovia","Praga","Budapest","Oslo"], ["Barcelona","Milán","Oporto","Múnich","Ginebra","Estambul","Róterdam"])
p("Son países de América del Sur", ["Argentina","Chile","Perú","Colombia","Brasil","Uruguay","Paraguay","Bolivia","Ecuador","Venezuela","Guyana","Surinam"], ["México","Cuba","Panamá","Honduras","Guatemala","Nicaragua","Costa Rica"])
p("Son mamíferos", ["Delfín","Murciélago","Ballena","Ornitorrinco","Canguro","Elefante","Foca","Koala","Jirafa","Topo"], ["Tiburón","Pingüino","Cocodrilo","Avestruz","Salmón","Tortuga","Rana"])
p("Son planetas del sistema solar", ["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"], ["Plutón","Luna","Sol","Ceres","Titán","Ganímedes","Sirio"])
p("Las escribió Cervantes", ["Don Quijote","La Galatea","Novelas ejemplares","Los trabajos de Persiles y Sigismunda","Rinconete y Cortadillo","El coloquio de los perros","La Numancia","El licenciado Vidriera","La gitanilla"], ["La Celestina","El Lazarillo de Tormes","La vida es sueño","Fuenteovejuna","El burlador de Sevilla","La Regenta","Bodas de sangre"])
p("Los pintó Velázquez", ["Las Meninas","Las hilanderas","La rendición de Breda","La fragua de Vulcano","El aguador de Sevilla","Los borrachos","La Venus del espejo","Cristo crucificado","Retrato de Inocencio X","Vieja friendo huevos"], ["La maja desnuda","El Guernica","La persistencia de la memoria","El jardín de las delicias","Los fusilamientos del 3 de mayo","La Gioconda","El grito"])
p("Son elementos químicos", ["Oro","Hierro","Helio","Neón","Sodio","Cobre","Plata","Carbono","Oxígeno","Uranio","Zinc"], ["Bronce","Acero","Agua","Latón","Diamante","Sal","Granito"])
p("Son comunidades autónomas", ["Andalucía","Aragón","Asturias","Cantabria","Galicia","La Rioja","Murcia","Navarra","Extremadura","Cataluña","Canarias"], ["Albacete","Bilbao","León","Almería","Toledo","Vigo","Gijón"])
p("Son ríos de España", ["Ebro","Tajo","Duero","Guadalquivir","Guadiana","Miño","Júcar","Segura","Turia","Genil","Nalón"], ["Sena","Danubio","Támesis","Rin","Po","Loira","Volga"])
p("Son deportes olímpicos de verano", ["Atletismo","Natación","Judo","Esgrima","Remo","Tenis","Baloncesto","Balonmano","Halterofilia","Tiro con arco","Gimnasia"], ["Pádel","Ajedrez","Esquí alpino","Curling","Billar","Petanca","Dardos"])
p("Son instrumentos de cuerda", ["Violín","Guitarra","Arpa","Violonchelo","Contrabajo","Viola","Laúd","Bandurria","Ukelele","Banjo","Mandolina"], ["Flauta","Trompeta","Clarinete","Tambor","Saxofón","Xilófono","Oboe"])
p("Las escribió García Lorca", ["Bodas de sangre","Yerma","La casa de Bernarda Alba","Romancero gitano","Poeta en Nueva York","Mariana Pineda","Doña Rosita la soltera","Poema del cante jondo","La zapatera prodigiosa","Así que pasen cinco años"], ["Platero y yo","Campos de Castilla","Luces de bohemia","Niebla","La colmena","Nada","Cien años de soledad"])
p("Son películas de Pixar", ["Toy Story","Buscando a Nemo","Up","Coco","Ratatouille","Wall-E","Cars","Monstruos S.A.","Los Increíbles","Del revés","Brave","Luca"], ["Shrek","Frozen","El rey león","Aladdín","Madagascar","Kung Fu Panda","Ice Age"])
p("Pagan con euros", ["España","Francia","Italia","Alemania","Portugal","Grecia","Irlanda","Austria","Finlandia","Croacia","Bélgica","Países Bajos"], ["Suecia","Dinamarca","Polonia","Reino Unido","Suiza","Noruega","Hungría","República Checa"])
p("Son frutas", ["Mango","Kiwi","Papaya","Fresa","Cereza","Ciruela","Melocotón","Piña","Higo","Granada","Albaricoque"], ["Lechuga","Cebolla","Ajo","Espinaca","Puerro","Coliflor","Apio"])
p("Han ganado un Mundial de fútbol", ["Brasil","Alemania","Italia","Argentina","Francia","Uruguay","Inglaterra","España"], ["Países Bajos","Portugal","Croacia","México","Bélgica","Suecia","Hungría"])
p("Se inventaron en el siglo XX", ["Televisión","Internet","Microondas","Teléfono móvil","Láser","Avión","Transistor","Bolígrafo","Fregona","GPS","Chupa Chups"], ["Imprenta","Brújula","Teléfono","Bombilla","Máquina de vapor","Telescopio","Pararrayos"])
p("Son huesos del cuerpo humano", ["Fémur","Tibia","Peroné","Húmero","Cúbito","Radio","Esternón","Clavícula","Rótula","Omóplato","Estribo"], ["Bíceps","Tríceps","Glúteo","Tendón de Aquiles","Páncreas","Diafragma","Hígado"])
p("Las baña el Mediterráneo", ["Barcelona","Valencia","Málaga","Alicante","Marsella","Nápoles","Niza","Palma","Génova","Tarragona","Argel","Beirut"], ["Lisboa","Bilbao","Cádiz","Oporto","Burdeos","Santander","Huelva"])
p("Son lenguajes de programación", ["Python","Java","JavaScript","C++","Ruby","PHP","Swift","Kotlin","Go","Rust"], ["Photoshop","Linux","Excel","Windows","Android","Chrome","WhatsApp"])
p("Son personajes de Harry Potter", ["Hermione","Ron","Dumbledore","Snape","Hagrid","Voldemort","Draco Malfoy","Sirius Black","Dobby","Neville"], ["Gandalf","Frodo","Legolas","Aragorn","Gollum","Bilbo","Sauron"])
p("Son óperas de Verdi", ["La traviata","Aida","Rigoletto","Nabucco","Otello","Falstaff","Il trovatore","Don Carlo","Macbeth","La forza del destino"], ["Carmen","La flauta mágica","Madama Butterfly","Tosca","La bohème","El barbero de Sevilla","Turandot"])
p("Son superhéroes de Marvel", ["Spider-Man","Iron Man","Thor","Hulk","Capitán América","Lobezno","Viuda Negra","Pantera Negra","Doctor Extraño","Ojo de Halcón","Deadpool"], ["Batman","Superman","Wonder Woman","Flash","Aquaman","Linterna Verde","Robin"])
p("Son islas españolas", ["Tenerife","Mallorca","Menorca","Ibiza","Formentera","Lanzarote","Fuerteventura","Gran Canaria","La Gomera","El Hierro","La Palma","Cabrera"], ["Madeira","Córcega","Cerdeña","Sicilia","Malta","Creta","Azores"])
p("Eran dinosaurios", ["Tiranosaurio","Velocirraptor","Triceratops","Diplodocus","Estegosaurio","Braquiosaurio","Iguanodón","Espinosaurio","Anquilosaurio","Parasaurolofus"], ["Mamut","Tigre dientes de sable","Megalodón","Dodo","Pterodáctilo","Plesiosaurio","Ictiosaurio"])
p("Ganaron el Nobel de Literatura escribiendo en español", ["García Márquez","Pablo Neruda","Vargas Llosa","Octavio Paz","Camilo José Cela","Vicente Aleixandre","Juan Ramón Jiménez","Gabriela Mistral","Miguel Ángel Asturias","Jacinto Benavente","José Echegaray"], ["Jorge Luis Borges","Julio Cortázar","Miguel Delibes","Pérez Galdós","Isabel Allende","García Lorca","Antonio Machado"])
p("Son grupos musicales españoles", ["Mecano","La Oreja de Van Gogh","Héroes del Silencio","Estopa","Amaral","El Canto del Loco","Los Secretos","Hombres G","Jarabe de Palo","Vetusta Morla","Love of Lesbian"], ["ABBA","Queen","U2","Coldplay","Maná","Soda Stereo","Los Prisioneros"])
p("Están en Italia", ["Coliseo","Torre de Pisa","Fontana di Trevi","Panteón de Agripa","Puente de Rialto","Duomo de Florencia","Arena de Verona","Ponte Vecchio","Plaza de San Marcos","Galería Vittorio Emanuele II"], ["Alhambra","Torre Eiffel","Big Ben","Partenón","Puerta de Brandeburgo","Sagrada Familia","Atomium"])
p("Son monedas en uso hoy", ["Yen","Dólar","Libra esterlina","Rublo","Rupia","Yuan","Peso mexicano","Franco suizo","Corona sueca","Real brasileño","Won"], ["Peseta","Marco alemán","Franco francés","Lira italiana","Escudo portugués","Dracma","Florín"])
p("Son sinónimos de rápido", ["Veloz","Raudo","Ligero","Presto","Ágil","Pronto","Vertiginoso","Acelerado","Expedito","Diligente"], ["Lento","Pausado","Tardo","Calmoso","Parsimonioso","Cachazudo","Pesado"])
p("Ponen huevos", ["Gallina","Ornitorrinco","Cocodrilo","Tortuga","Salmón","Pingüino","Rana","Avestruz","Equidna","Abeja"], ["Delfín","Murciélago","Canguro","Ballena","Caballo","Vaca","Gato"])
p("Las escribió Shakespeare", ["Hamlet","Macbeth","Otelo","El rey Lear","Romeo y Julieta","La tempestad","Julio César","El mercader de Venecia","Sueño de una noche de verano","Mucho ruido y pocas nueces","Ricardo III"], ["Fausto","Don Juan Tenorio","La divina comedia","Los miserables","Orgullo y prejuicio","El conde de Montecristo","Moby Dick"])
p("Son juegos de mesa", ["Parchís","Ajedrez","La oca","Damas","Monopoly","Trivial","Scrabble","Risk","Cluedo","Catán","Dominó"], ["Tetris","Fortnite","Minecraft","Pac-Man","Mario Kart","FIFA","Zelda"])
p("Son países de África", ["Marruecos","Egipto","Nigeria","Kenia","Senegal","Ghana","Etiopía","Angola","Mozambique","Camerún","Túnez","Argelia"], ["Jordania","Yemen","Omán","Irán","Siria","Líbano","Pakistán"])
p("Son mares (no océanos ni lagos)", ["Mediterráneo","Cantábrico","Caribe","Báltico","Negro","Rojo","Adriático","Egeo","Jónico","De Alborán","Del Norte"], ["Pacífico","Atlántico","Índico","Ártico","Titicaca","Baikal","Victoria"])
p("Son tipos de pasta", ["Macarrones","Espaguetis","Tallarines","Lasaña","Raviolis","Fusilli","Penne","Tortellini","Canelones","Farfalle","Fideos"], ["Cruasán","Baguette","Churro","Ensaimada","Magdalena","Rosquilla","Brioche"])
p("Son consolas de videojuegos", ["PlayStation","Xbox","Nintendo Switch","Game Boy","Wii","Mega Drive","Nintendo 64","Dreamcast","GameCube","PSP","Nintendo DS"], ["iPad","Kindle","Walkman","Tamagotchi","Discman","Smartwatch","Chromecast"])
p("Son directores de cine españoles", ["Pedro Almodóvar","Luis Buñuel","Alejandro Amenábar","Isabel Coixet","J. A. Bayona","Carlos Saura","Fernando Trueba","Icíar Bollaín","Álex de la Iglesia","Berlanga","Rodrigo Sorogoyen"], ["Steven Spielberg","Guillermo del Toro","Alfonso Cuarón","Quentin Tarantino","Martin Scorsese","Federico Fellini","Woody Allen"])
p("Son signos del zodiaco", ["Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"], ["Orión","Osa Mayor","Casiopea","Pegaso","Andrómeda","Can Mayor","Perseo"])
p("Son verduras u hortalizas", ["Lechuga","Zanahoria","Pimiento","Berenjena","Calabacín","Puerro","Coliflor","Brócoli","Espinaca","Alcachofa","Pepino"], ["Plátano","Pera","Manzana","Uva","Melón","Sandía","Naranja"])
p("Son capitales de países de América", ["Buenos Aires","Santiago de Chile","Lima","Bogotá","Caracas","Quito","Montevideo","Asunción","Ciudad de México","La Habana","Ottawa","Washington"], ["Río de Janeiro","Nueva York","Toronto","Guayaquil","Medellín","Córdoba","Valparaíso"])
p("Son dioses griegos", ["Zeus","Hera","Poseidón","Atenea","Apolo","Artemisa","Ares","Afrodita","Hermes","Hefesto","Dioniso","Deméter"], ["Odín","Thor","Ra","Anubis","Júpiter","Marte","Venus"])
p("Han ganado LaLiga", ["Real Madrid","Barcelona","Atlético de Madrid","Athletic Club","Valencia","Real Sociedad","Deportivo de La Coruña","Sevilla","Real Betis"], ["Villarreal","Celta de Vigo","Espanyol","Getafe","Osasuna","Málaga","Real Zaragoza"])
p("Salen en el Quijote", ["Sancho Panza","Dulcinea","Rocinante","Rucio","Sansón Carrasco","Maritornes","Ginés de Pasamonte","El cura","El barbero","Altisidora"], ["Lazarillo","Celestina","Melibea","Segismundo","Don Juan Tenorio","Marianela","Fortunata"])
p("Viven en la sabana africana", ["León","Cebra","Jirafa","Hipopótamo","Rinoceronte","Ñu","Guepardo","Hiena","Elefante africano","Suricata","Gacela"], ["Canguro","Koala","Panda","Tigre","Oso polar","Pingüino","Bisonte"])
M = []
def m(t, c, i): M.append({"t": t, "c": c, "i": i, "musical": True})
m("Canciones de Mecano", ["Hijo de la Luna","Cruz de navajas","Me cuesta tanto olvidarte","La fuerza del destino","Mujer contra mujer","Hoy no me puedo levantar","Barco a Venus","Me colé en una fiesta","El 7 de septiembre","Maquillaje"], ["Entre dos tierras","La flaca","Rosas","Devuélveme a mi chica","Sin documentos","Corazón partío","Chiquilla"])
m("Canciones de los Beatles", ["Yesterday","Let It Be","Hey Jude","Help!","Yellow Submarine","Something","Come Together","Michelle","Penny Lane","All You Need Is Love","Here Comes the Sun"], ["Bohemian Rhapsody","Imagine","Satisfaction","Thriller","Like a Rolling Stone","Wonderwall","Hotel California"])
m("Canciones de ABBA", ["Dancing Queen","Mamma Mia","Waterloo","Fernando","Chiquitita","Gimme! Gimme! Gimme!","The Winner Takes It All","Super Trouper","SOS","Take a Chance on Me"], ["I Will Survive","Y.M.C.A.","Like a Prayer","Girls Just Want to Have Fun","Don't Stop Me Now","Billie Jean","Staying Alive"])
m("Canciones de Queen", ["Bohemian Rhapsody","We Will Rock You","We Are the Champions","Don't Stop Me Now","Somebody to Love","Radio Ga Ga","I Want to Break Free","Another One Bites the Dust","Killer Queen","The Show Must Go On"], ["Stairway to Heaven","Smoke on the Water","Highway to Hell","Sweet Child o' Mine","Livin' on a Prayer","Born to Run","Imagine"])
m("Canciones de España en Eurovisión", ["La, la, la","Vivo cantando","Eres tú","Bailar pegados","Europe's Living a Celebration","La venda","SloMo","Eaea","Zorra","Tu canción","Dile que la quiero"], ["Waterloo","Euphoria","Fuego","Arcade","Toy","Soldi","Ne partez pas sans moi"])
m("Canciones de Rosalía", ["Malamente","Pienso en tu mirá","Con altura","Despechá","Saoko","Bizcochito","Candy","Motomami","Juro que","Di mi nombre"], ["Despacito","Gasolina","Bichota","Tusa","Mi gente","La bicicleta","Hawái"])
m("Canciones de Alejandro Sanz", ["Corazón partío","Amiga mía","Y si fuera ella","Mi soledad y yo","Cuando nadie me ve","Quisiera ser","No es lo mismo","Si hay Dios","Looking for Paradise","Pisando fuerte"], ["Hijo de la Luna","Bulería","La flaca","Vivir mi vida","Color esperanza","Entre dos tierras","Princesas"])
PAR = []
def pa(t, l): PAR.append({"t": t, "p": l})
pa("País y su capital", [["Francia","París"],["Italia","Roma"],["Portugal","Lisboa"],["Alemania","Berlín"],["Japón","Tokio"],["Egipto","El Cairo"],["Perú","Lima"],["Canadá","Ottawa"],["Grecia","Atenas"]])
pa("Autor y su obra", [["Cervantes","El Quijote"],["Shakespeare","Hamlet"],["García Márquez","Cien años de soledad"],["Lorca","Bodas de sangre"],["Tolkien","El Señor de los Anillos"],["Orwell","1984"],["Homero","La Odisea"],["Dante","La divina comedia"],["J. K. Rowling","Harry Potter"]])
pa("Pintor y su cuadro", [["Picasso","Guernica"],["Velázquez","Las Meninas"],["Goya","La maja desnuda"],["Leonardo","La Gioconda"],["Munch","El grito"],["Dalí","La persistencia de la memoria"],["Van Gogh","La noche estrellada"],["Botticelli","El nacimiento de Venus"],["El Bosco","El jardín de las delicias"]])
pa("Elemento y su símbolo", [["Oro","Au"],["Plata","Ag"],["Hierro","Fe"],["Sodio","Na"],["Potasio","K"],["Plomo","Pb"],["Cobre","Cu"],["Helio","He"],["Mercurio","Hg"]])
pa("Animal y su cría", [["Vaca","Ternero"],["Caballo","Potro"],["Oveja","Cordero"],["Perro","Cachorro"],["Cerdo","Lechón"],["Gallina","Pollito"],["Rana","Renacuajo"],["Cabra","Cabrito"],["Burro","Pollino"]])
pa("Ciudad y su monumento", [["París","Torre Eiffel"],["Granada","Alhambra"],["Roma","Coliseo"],["Londres","Big Ben"],["Agra","Taj Mahal"],["Barcelona","Sagrada Familia"],["Atenas","Partenón"],["Nueva York","Estatua de la Libertad"],["Río de Janeiro","Cristo Redentor"]])
pa("País y su moneda", [["Japón","Yen"],["Reino Unido","Libra"],["Rusia","Rublo"],["India","Rupia"],["China","Yuan"],["Suiza","Franco"],["Brasil","Real"],["México","Peso"],["Corea del Sur","Won"]])
pa("Superhéroe y su identidad", [["Batman","Bruce Wayne"],["Superman","Clark Kent"],["Spider-Man","Peter Parker"],["Iron Man","Tony Stark"],["Hulk","Bruce Banner"],["Capitán América","Steve Rogers"],["Wonder Woman","Diana Prince"],["Flash","Barry Allen"],["Lobezno","Logan"]])
pa("Grupo y su cantante", [["Héroes del Silencio","Enrique Bunbury"],["Queen","Freddie Mercury"],["U2","Bono"],["Mecano","Ana Torroja"],["La Oreja de Van Gogh","Amaia Montero"],["Jarabe de Palo","Pau Donés"],["The Police","Sting"],["Nirvana","Kurt Cobain"],["Oasis","Liam Gallagher"]])
JAQUE = [
 {"p":"¿Cuántos lados tiene un hexágono?","op":["Cinco","Seis","Ocho"],"r":1},
 {"p":"¿Qué planeta es conocido como el planeta rojo?","op":["Marte","Venus","Júpiter"],"r":0},
 {"p":"¿En qué año llegó Colón a América?","op":["1492","1512","1453"],"r":0},
 {"p":"¿Cuál es el río más largo de la península ibérica?","op":["Ebro","Duero","Tajo"],"r":2},
 {"p":"¿Cuántos jugadores de un equipo de baloncesto hay en la pista?","op":["Cinco","Seis","Siete"],"r":0},
 {"p":"¿Quién pintó el Guernica?","op":["Dalí","Picasso","Miró"],"r":1},
 {"p":"¿Cuál es la capital de Australia?","op":["Sídney","Melbourne","Canberra"],"r":2},
 {"p":"¿Cuál es el océano más grande?","op":["Atlántico","Pacífico","Índico"],"r":1},
 {"p":"¿Qué instrumento tocaba Paco de Lucía?","op":["Piano","Guitarra","Violín"],"r":1},
 {"p":"¿Cuántos minutos son hora y media?","op":["Noventa","Ochenta","Cien"],"r":0},
 {"p":"¿En qué continente está Egipto?","op":["Asia","África","Europa"],"r":1},
 {"p":"¿Qué metal tiene el símbolo Fe?","op":["Hierro","Plata","Plomo"],"r":0},
 {"p":"¿Cuántas cuerdas tiene una guitarra española?","op":["Cuatro","Seis","Doce"],"r":1},
 {"p":"¿Cuál es el animal terrestre más rápido?","op":["León","Guepardo","Caballo"],"r":1},
 {"p":"¿Qué gas necesitamos respirar para vivir?","op":["Oxígeno","Helio","Nitrógeno"],"r":0},
]
IMG = [
 {"e":"🗼","op":["Torre Eiffel","Big Ben","Torre de Pisa"],"r":0}, {"e":"🗽","op":["Estatua de la Libertad","Cristo Redentor","La Sirenita"],"r":0},
 {"e":"🎻","op":["Guitarra","Violín","Arpa"],"r":1}, {"e":"🦒","op":["Camello","Jirafa","Llama"],"r":1}, {"e":"🌋","op":["Montaña","Glaciar","Volcán"],"r":2},
 {"e":"🎡","op":["Noria","Tiovivo","Montaña rusa"],"r":0}, {"e":"🦉","op":["Halcón","Búho","Loro"],"r":1}, {"e":"🍍","op":["Mango","Coco","Piña"],"r":2},
 {"e":"🐙","op":["Calamar","Pulpo","Medusa"],"r":1}, {"e":"🏰","op":["Castillo","Iglesia","Faro"],"r":0}, {"e":"🪐","op":["Marte","Saturno","Luna"],"r":1},
 {"e":"🦩","op":["Flamenco","Cigüeña","Garza"],"r":0}, {"e":"🌵","op":["Palmera","Cactus","Helecho"],"r":1}, {"e":"🧭","op":["Reloj","Brújula","Barómetro"],"r":1},
 {"e":"🥐","op":["Cruasán","Ensaimada","Churro"],"r":0}, {"e":"🎺","op":["Trombón","Tuba","Trompeta"],"r":2},
]
json.dump({"paneles": N, "musicales": M, "parejas": PAR, "jaque": JAQUE, "imagenes": IMG}, open('src/data/paneles.json', 'w'), ensure_ascii=False, indent=0)
print(len(N), 'paneles,', len(M), 'musicales,', len(PAR), 'de parejas,', len(JAQUE), 'jaque mate,', len(IMG), 'imágenes')
bad = [x['t'] for x in N + M if len(x['c']) < 8 or len(x['i']) < 7]; print('incompletos', bad)
