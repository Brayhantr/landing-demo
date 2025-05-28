import { Movie } from '../types';

// Helper function to extract YouTube ID from a URL
const getYoutubeId = (url: string): string => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'www.youtube.com' && urlObj.searchParams.has('v')) {
      return urlObj.searchParams.get('v') || '';
    } else if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.substring(1);
    }
    return '';
  } catch (error) {
    return '';
  }
};

export const moviesData: Movie[] = [
  {
    title: "Ma",
    poster: "https://m.media-amazon.com/images/M/MV5BNDZhYmM5NjItMGFhNi00YzFhLWFmYzItN2M2ZDVjNGI2NGY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    michelRating: 5,
    brayhantRating: 6.5,
    synopsis: "Una mujer solitaria se hace amiga de unos adolescentes y les permite hacer fiestas en su casa. Sin embargo, una serie de sucesos desconcertantes los llevan a cuestionar las verdaderas intenciones de la, en apariencia, inofensiva anfitriona.",
    trailerUrl: "https://www.youtube.com/watch?v=eIvbEC8N3cA"
  },
  {
    title: "Hanzel y Gretel",
    poster: "https://m.media-amazon.com/images/M/MV5BMjA4MDQwODg2NV5BMl5BanBnXkFtZTcwNTc5ODc2OA@@._V1_.jpg",
    michelRating: 6,
    brayhantRating: 9,
    synopsis: "Una moderna adaptación del cuento clásico donde dos hermanos deben enfrentarse a una bruja malvada en un bosque encantado.",
    trailerUrl: "https://www.youtube.com/watch?v=ieA0RLD4q2w"
  },
  {
    title: "Caza: De sombras",
    poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfKBCJJtxBN9JLsLxO_lAm-xPBMYPIzVm-EtCyqx2F3OXVVuUHLfCbsDeo-JVOqsvefJieXcDkrsaYF6gm06jZ0094TeIXL2nvnFu54cQcysxbS6OlAztY5ETsX7sgeh3QikkdsePJ2qEC/s1600/Ciudad+de+hueso.jpg",
    michelRating: 10,
    brayhantRating: 8.5,
    synopsis: "Una chica que descubre su herencia como cazadora de sombras cuando presencia la muerte de un chico a manos de unos jóvenes tatuados en una discoteca. Clary se une a los cazadores de sombras, seres mitad ángeles que protegen al mundo de los demonios, y se enfrenta a peligros, misterios y un amor prohibido.",
    trailerUrl: "https://www.youtube.com/watch?v=jQwKTG9gkDw"
  },
  {
    title: "Animales Fantásticos",
    poster: "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_.jpg",
    michelRating: 8,
    brayhantRating: 9.5,
    synopsis: "En el mundo mágico creado por J.K. Rowling, un magizoólogo viaja por el mundo documentando criaturas mágicas extraordinarias.",
    trailerUrl: "https://www.youtube.com/watch?v=QfYgcLuxS5Y"
  },
  {
    title: "La Bella y la Bestia",
    poster: "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
    michelRating: 8.5,
    brayhantRating: 8,
    synopsis: "Un clásico cuento de hadas sobre una joven que descubre la belleza interior de una bestia aparentemente aterradora.",
    trailerUrl: "https://www.youtube.com/watch?v=11XTiaX9lLc"
  },
  {
    title: "Polar",
    poster: "https://m.media-amazon.com/images/M/MV5BZmEzNzU2MDUtZmJiNi00ZGI0LWFiNjItYWQzNGIxY2I2MGZjXkEyXkFqcGc@._V1_.jpg",
    michelRating: 9.5,
    brayhantRating: 8.5,
    synopsis: "Un asesino a sueldo retirado es perseguido por su antigua organización, obligándolo a volver a su violento pasado.",
    trailerUrl: "https://www.youtube.com/watch?v=oMHwRal-AR8"
  },
  {
  title: "Damsel",
  poster: "https://m.media-amazon.com/images/M/MV5BZTAzODc1ZjUtNGQwZS00YTc2LTliNzQtMDdlNzllNmU5Yzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  michelRating: 8.5,
  brayhantRating: 8,
  synopsis: "Una joven acepta casarse con un apuesto príncipe, pero descubre que todo es una trampa. Es arrojada a una cueva con un dragón que escupe fuego y debe confiar únicamente en su ingenio y voluntad para sobrevivir.",
  trailerUrl: "https://www.youtube.com/watch?v=iM150ZWovZM"
},
{
  title: "Morbius",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/10645b95add6d94eff5ce37a1e95dbc8a771ee91a5745660d74e8a6a620dceab.jpg",
  michelRating: 9,
  brayhantRating: 9,
  synopsis: "Un bioquímico que sufre una rara enfermedad sanguínea se transforma accidentalmente en un ser con poderes vampíricos al intentar curarse.",
  trailerUrl: "https://www.youtube.com/watch?v=oZ6iiRrz1SY"
},
{
  title: "Corazones malheridos",
  poster: "https://m.media-amazon.com/images/M/MV5BMDZiOWUxNTMtMWZiMi00YTNkLTlhMjUtNzMyMjlkZThhODdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  michelRating: 8.5,
  brayhantRating: 9,
  synopsis: "Una emotiva historia de amor entre dos personas con pasados dolorosos que intentan sanar juntos sus heridas emocionales.",
  trailerUrl: "https://www.youtube.com/watch?v=sbNbeSCQfX8"
},
{
  title: "Un amor para recordar",
  poster: "https://m.media-amazon.com/images/M/MV5BYWYyYTA5NGMtZjc4MC00MzY5LWFkN2ItMDJmZjkyMjM5OWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  michelRating: 6.5,
  brayhantRating: 6,
  synopsis: "Un romance adolescente que explora temas de prejuicios sociales, enfermedad y el poder transformador del amor.",
  trailerUrl: "https://www.youtube.com/watch?v=ZnpMsaha880"
},
{
  title: "Todo, todo",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/6aed1b725384fe94917f8f50b513f59134901088e4e79fb849cac8850f54df62.jpg",
  michelRating: 8.5,
  brayhantRating: 8,
  synopsis: "La historia de un héroe poco convencional que debe superar sus propios miedos para salvar su comunidad.",
  trailerUrl: "https://www.youtube.com/watch?v=42KNwQ6u42U"
},
{
  title: "Una parte de ti",
  poster: "https://m.media-amazon.com/images/M/MV5BMTBlODMyYmMtMTVmMi00YmZiLThhODgtM2I0MGM4ZmQyYTA4XkEyXkFqcGc@._V1_.jpg",
  michelRating: 2,
  brayhantRating: 8,
  synopsis: "Un drama introspectivo sobre la pérdida y el proceso de aceptación tras la muerte de un ser querido.",
  trailerUrl: "https://www.youtube.com/watch?v=dkUAuCjtlus"
},
{
  title: "Noche sin paz",
  poster: "https://m.media-amazon.com/images/M/MV5BZGNiM2Y2OWItNjlhOS00OGJhLTk0ZDktMjBiMjg0N2MyZTA2XkEyXkFqcGc@._V1_.jpg",
  michelRating: 9,
  brayhantRating: 8.5,
  synopsis: "Un Papá Noel poco convencional debe salvar a una familia de mercenarios durante la noche de Navidad.",
  trailerUrl: "https://www.youtube.com/watch?v=bVy2G3MY_8E"
},
{
  title: "Mi primer beso",
  poster: "https://m.media-amazon.com/images/M/MV5BNmRjODk4M2QtNGZiMi00ODFhLWJjMWQtYWViMjZhYWU0OWJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  michelRating: 7.5,
  brayhantRating: 7,
  synopsis: "Una niña con una extraña enfermedad que le impide tener contacto con otros, encuentra un amigo.",
  trailerUrl: "https://www.youtube.com/watch?v=_JRODzZ0cjw"
},
{
  title: "Te esperaré en Venus",
  poster: "https://musicart.xboxlive.com/7/4e2b6700-0000-0000-0000-000000000002/504/image.jpg",
  michelRating: 6.5,
  brayhantRating: 7,
  synopsis: "Mia, una adolescente, viaja a España para conocer a su madre biológica con la ayuda de un chico.",
  trailerUrl: "https://www.youtube.com/watch?v=9Prb2togmM0"
},
{
  title: "Verdad o reto",
  poster: "https://m.media-amazon.com/images/M/MV5BYTBiZThjNjUtZTYxMy00MzIwLTliNDMtM2IyZTY4NjI4NDM4XkEyXkFqcGc@._V1_.jpg",
  michelRating: 8,
  brayhantRating: 8,
  synopsis: "Un grupo de amigos juega 'Verdad o Reto', pero el juego se vuelve mortal cuando empiezan a ser castigados por mentir o rechazar un reto.",
  trailerUrl: "https://www.youtube.com/watch?v=D9CtJKofX6U"
},
{
  title: "Scape room",
  poster: "https://m.media-amazon.com/images/I/81+Lsjqx32L._AC_UF894,1000_QL80_.jpg",
  michelRating: 9.5,
  brayhantRating: 9.5,
  synopsis: "Seis extraños se encuentran en un laberinto de escape mortal donde deben usar su ingenio para sobrevivir.",
  trailerUrl: "https://www.youtube.com/watch?v=6dSKUoV0SNI"
},
{
  title: "Smile",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/6b5ab186ea9364caa7964630cf20b6321361dd3c7a909ae8cf118d750a01b387.jpg",
  michelRating: 9,
  brayhantRating: 8.5,
  synopsis: "Después de presenciar un incidente traumático, una doctora comienza a experimentar sucesos aterradores.",
  trailerUrl: "https://www.youtube.com/watch?v=BcDK7lkzzsU"
},
{
  title: "Smile 2",
  poster: "https://m.media-amazon.com/images/I/71tSnnLBreL._AC_UF894,1000_QL80_.jpg",
  michelRating: 4,
  brayhantRating: 3,
  synopsis: "Secuela de Smile.",
  trailerUrl: "https://www.youtube.com/watch?v=0HY6QFlBzUY"
},
{
    title: "Un lugar en silencio 2",
    poster: "https://m.media-amazon.com/images/M/MV5BZGE5MGQ1NmMtYjIwMi00ZTZmLWFkMjMtZGIzMGQzZWE4OTNlXkEyXkFqcGc@._V1_.jpg",
    michelRating: 5.5,
    brayhantRating: 5,
    synopsis: "La familia Abbott continúa luchando en silencio por su supervivencia contra las criaturas que cazan por el sonido, ahora enfrentando nuevos peligros en el mundo exterior.",
    trailerUrl: "https://www.youtube.com/watch?v=MKkjSVuo384"
  },
  {
    title: "Bagman",
    poster: "https://i.ytimg.com/vi/vHzdBIOOqL8/maxresdefault.jpg",
    michelRating: 2,
    brayhantRating: 1,
    synopsis: "Un thriller psicológico sobre un hombre perseguido por una entidad sobrenatural que se oculta en una bolsa y acecha a sus víctimas en la oscuridad.",
    trailerUrl: "https://www.youtube.com/watch?v=slrzCgYIUPM"
  },
  {
    title: "C.I.P.O.L",
    poster: "https://m.media-amazon.com/images/M/MV5BYzZiZmVlMmQtZmJmOS00YWMxLWIxZjQtOTdmZTJhN2VjYTJkXkEyXkFqcGc@._V1_.jpg",
    michelRating: 9.5,
    brayhantRating: 10,
    synopsis: "Una película de ciencia ficción que explora la inteligencia artificial avanzada y los límites éticos de la tecnología en un futuro próximo.",
    trailerUrl: "https://www.youtube.com/watch?v=EuQ4CmjpTPc"
  },
  {
    title: "Spencer Confidencial",
    poster: "https://m.media-amazon.com/images/M/MV5BZGJhM2RlZDgtNDY2OS00NzBkLWE5NDktZmI3NmNkYjY1N2Y4XkEyXkFqcGc@._V1_.jpg",
    michelRating: 9.5,
    brayhantRating: 8.5,
    synopsis: "Un ex policía convertido en convicto descubre una conspiración dentro del departamento de policía de Boston y trabaja para exponer la verdad.",
    trailerUrl: "https://www.youtube.com/watch?v=Kq0rqYAgMMU"
  },
  {
    title: "Sweet girl",
    poster: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYusyk8CtBDZWCpQ8fuzlczp0Vmo-UEsCMf9YFzTbJWZcrhf3as67Q_2WPTwjVwq3HWXXUyx4uMwGr-eod8UTqywqJoggBn2dild.jpg?r=91b",
    michelRating: 7,
    brayhantRating: 6.5,
    synopsis: "Un padre devastado jura venganza contra una compañía farmacéutica responsable de retirar un medicamento del mercado que podría haber salvado a su esposa.",
    trailerUrl: "https://www.youtube.com/watch?v=NiFuJV2GLkY"
  },
  {
    title: "Lyft",
    poster: "https://m.media-amazon.com/images/M/MV5BZTFhMGZlN2MtNmNiNi00M2YyLTliODMtMmUxYmJhNDNhYjk5XkEyXkFqcGc@._V1_.jpg",
    michelRating: 8,
    brayhantRating: 7,
    synopsis: "Un thriller moderno donde un pasajero de un servicio de transporte compartido se ve envuelto en una peligrosa situación durante lo que debería haber sido un viaje rutinario.",
    trailerUrl: "https://www.youtube.com/watch?v=QfFasuouxQI"
  },
  {
    title: "Línea mortal al límite",
    poster: "https://m.media-amazon.com/images/M/MV5BMTU4MTg3OTc5Nl5BMl5BanBnXkFtZTgwMDUxNTQwMzI@._V1_FMjpg_UX1000_.jpg",
    michelRating: 7.5,
    brayhantRating: 8,
    synopsis: "Un grupo de estudiantes de medicina experimenta con experiencias cercanas a la muerte, pero pronto descubren las peligrosas consecuencias de jugar con el más allá.",
    trailerUrl: "https://www.youtube.com/watch?v=M2KiY9C_5EI"
  },
  {
    title: "Fractura",
    poster: "https://m.media-amazon.com/images/M/MV5BMDViOTQwZDMtNjBiMS00YzU4LTllNGUtM2YwNjk4NGMwOTk3XkEyXkFqcGc@._V1_.jpg",
    michelRating: 6,
    brayhantRating: 4,
    synopsis: "Un padre desesperado busca a su hija desaparecida en un hospital, enfrentándose a un sistema que niega que ella haya estado allí y cuestiona su cordura.",
    trailerUrl: "https://www.youtube.com/watch?v=dEw_cB2_7Rk"
  },
  {
    title: "Escuadrón 6",
    poster: "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    michelRating: 8.5,
    brayhantRating: 8,
    synopsis: "Seis individuos de diferentes partes del mundo, cada uno experto en su campo, fingen sus propias muertes para formar un equipo que lucha contra el crimen a nivel global.",
    trailerUrl: "https://www.youtube.com/watch?v=_kdF_w5lPxk"
  },
  {
    title: "La era de hielo 3",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMzNDkzMTcyOV5BMl5BanBnXkFtZTcwNDIzMjM2MQ@@._V1_.jpg",
    michelRating: 8,
    brayhantRating: 8.5,
    synopsis: "En esta tercera entrega de la saga animada, Manny y Ellie esperan su primer hijo mientras el grupo descubre un mundo subterráneo habitado por dinosaurios.",
    trailerUrl: "https://www.youtube.com/watch?v=aLwf1RDP0p4"
  },
  {
    title: "La madre",
    poster: "https://m.media-amazon.com/images/M/MV5BOGJlODBmODQtMWE3Ni00YWQ3LTkxNzktNDBmN2RmNmU1MjE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    michelRating: 6,
    brayhantRating: 7,
    synopsis: "Una asesina entrenada sale de su escondite para proteger a la hija que abandonó años antes, enfrentándose a peligrosos perseguidores.",
    trailerUrl: "https://www.youtube.com/watch?v=iuaWUDqUu0g"
  },
  {
    title: "See 1",
    poster: "https://m.media-amazon.com/images/M/MV5BMDEwYTg3MWQtZTNmMi00ZjU1LTkwNWQtZDFmODQ5NjcwMDc2XkEyXkFqcGc@._V1_.jpg",
    michelRating: 9,
    brayhantRating: 8.5,
    synopsis: "En un futuro distópico donde la humanidad ha perdido el sentido de la vista, la llegada de gemelos con capacidad visual amenaza el orden establecido.",
    trailerUrl: "https://www.youtube.com/watch?v=7Rg0y7NT1gU"
  },
  {
    title: "See 2",
    poster: "https://images.justwatch.com/poster/249409194/s718/temporada-2.jpg",
    michelRating: 8,
    brayhantRating: 9,
    synopsis: "La saga continúa mientras Baba Voss lucha por reunir a su familia y protegerlos de una guerra inminente entre reinos rivales.",
    trailerUrl: "https://www.youtube.com/watch?v=WTVWaNwTRaE"
  },
  {
    title: "See 3",
    poster: "https://m.media-amazon.com/images/M/MV5BMDEwYTg3MWQtZTNmMi00ZjU1LTkwNWQtZDFmODQ5NjcwMDc2XkEyXkFqcGc@._V1_.jpg",
    michelRating: 8.5,
    brayhantRating: 9,
    synopsis: "En la temporada final, Baba Voss debe enfrentarse a nuevos enemigos y alianzas cambiantes en un mundo donde la visión se está volviendo cada vez más común.",
    trailerUrl: "https://www.youtube.com/watch?v=L2idzg4dBWU"
  },
  {
    title: "Disomnia",
    poster: "https://es.web.img3.acsta.net/pictures/21/05/06/08/34/4872448.jpg",
    michelRating: 8.5,
    brayhantRating: 8,
    synopsis: "Un evento global impide que las personas puedan dormir, llevando a la sociedad al caos mientras una madre lucha por proteger a su hija, que podría ser la clave para encontrar una cura.",
    trailerUrl: "https://www.youtube.com/watch?v=5Nu7CIa4Dtg"
  },
  {
    title: "El viaje de Chihiro",
    poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    michelRating: 8.5,
    brayhantRating: 8.5,
    synopsis: "Una niña de 10 años se adentra en un mundo de dioses, espíritus y seres mágicos cuando sus padres son transformados en cerdos por una bruja tras mudarse a un nuevo vecindario.",
    trailerUrl: "https://www.youtube.com/watch?v=5Fgq4Osh6XQ"
  },
  {
    title: "La princesa Mononoke",
    poster: "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg",
    michelRating: 8,
    brayhantRating: 8.5,
    synopsis: "Un príncipe se ve envuelto en un conflicto entre los dioses del bosque y los humanos que consumen sus recursos, conociendo a una joven criada por lobos que lucha por proteger la naturaleza.",
    trailerUrl: "https://www.youtube.com/watch?v=vf6c6n35wr4"
  },
  {
    title: "Si decido quedarme",
    michelRating: 8.5,
    brayhantRating: 7.5,
    poster: "https://m.media-amazon.com/images/M/MV5BZWVkNWM4M2ItMzU0Ni00ODI1LThmMDktNTAwMTI3YzBmMWRjXkEyXkFqcGc@._V1_.jpg",
    synopsis: "Una joven música lucha por decidir entre la vida y la muerte después de un trágico accidente.",
    trailerUrl: "https://www.youtube.com/watch?v=B0chmofGqpk"
  },
  {
    title: "Si no despierto",
    michelRating: 8,
    brayhantRating: 7.5,
    poster: "https://m.media-amazon.com/images/I/81zdapIkq0L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Una adolescente revive el mismo día de su muerte una y otra vez, tratando de cambiar su destino.",
    trailerUrl: "https://www.youtube.com/watch?v=0cals8KlWX4"
  },
  {
    title: "Amor de medianoche",
    michelRating: 8.5,
    brayhantRating: 10,
    poster: "https://m.media-amazon.com/images/I/81TDY4wHjaL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Una joven con una rara enfermedad que la hace sensible a la luz del sol, encuentra el amor.",
    trailerUrl: "https://www.youtube.com/watch?v=yzlWIZbJtrM"
  },
  {
    title: "Yo antes de ti",
    michelRating: 9,
    brayhantRating: 9,
    poster: "https://m.media-amazon.com/images/M/MV5BZjU3NmJmYWItMDVhZC00NmM2LWI3YzEtYTg4MzA0YWZiYTQ2XkEyXkFqcGc@._V1_.jpg",
    synopsis: "Una joven se convierte en la cuidadora de un hombre paralizado, y su relación se desarrolla de manera inesperada.",
    trailerUrl: "https://www.youtube.com/watch?v=FRrc2X4Uzm4"
  },
  {
    title: "Maléfica 1",
    michelRating: 9,
    brayhantRating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAwOTk2MGItZTlmYS00Yzk5LTgyNTYtMjkxY2FkZWI1NzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    synopsis: "La historia no contada de la villana de 'La Bella Durmiente' y los eventos que la llevaron a maldecir a la princesa Aurora.",
    trailerUrl: "https://www.youtube.com/watch?v=LaArkjF7AnM"
  },
  {
    title: "Maléfica 2",
    michelRating: 9.5,
    brayhantRating: 8.5,
    poster: "https://m.media-amazon.com/images/I/81quUqSXzGL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Maléfica y su ahijada Aurora comienzan a cuestionar los lazos familiares que las unen cuando se ven amenazadas por nuevos enemigos.",
    trailerUrl: "https://www.youtube.com/watch?v=yL1f8yNxGBk"
  },
  {
    title: "Tinker bell",
    michelRating: 7,
    brayhantRating: 6,
    poster: "https://images.justwatch.com/poster/80673991/s718/campanilla-y-el-tesoro-perdido.jpg",
    synopsis: "Tinker Bell, un hada, se embarca en una aventura para ayudar a traer la primavera a la Tierra Firme.",
    trailerUrl: "https://www.youtube.com/watch?v=qewuA2qwf1w"
  },
  {
    title: "Peter pan",
    michelRating: 8,
    brayhantRating: 8,
    poster: "https://cartelera.montevideo.com.uy/imagenes_espectaculos/moviedetail13/18544.jpg",
    synopsis: "Un niño que no quiere crecer, lleva a una niña y a sus hermanos al mundo mágico de Nunca Jamás.",
    trailerUrl: "https://www.youtube.com/watch?v=SyYESEvDNIg"
  },
  {
    title: "Piratas del caribe 3",
    michelRating: 8.5,
    brayhantRating: 9,
    poster: "https://i.pinimg.com/564x/53/2c/61/532c614dedc6a677e72f8c62600f49dc.jpg",
    synopsis: "El Capitán Jack Sparrow debe ser rescatado del fin del mundo para que pueda unirse a la lucha contra Davy Jones.",
    trailerUrl: "https://www.youtube.com/watch?v=o8DeDDZakco"
  },
  {
    title: "Duna 2",
    michelRating: 8,
    brayhantRating: 9,
    poster: "https://m.media-amazon.com/images/M/MV5BNzBiMTQ0YjMtZDRhMC00ZDU4LTk3MDMtNWQxOGMwMjQzYjc4XkEyXkFqcGc@._V1_.jpg",
    synopsis: "Paul Atreides se une a los Fremen en el planeta desértico Arrakis para vengar a su familia y prevenir un futuro terrible.",
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w"
  },
  {
    title: "Bala perdida",
    michelRating: 8,
    brayhantRating: 8,
    poster: "https://pics.filmaffinity.com/balle_perdue-785684707-large.jpg",
    synopsis: "Un mecánico con un pasado criminal debe usar sus habilidades para encontrar un coche desaparecido que contiene pruebas de un asesinato.",
    trailerUrl: "https://www.youtube.com/watch?v=AlinTKAGENQ"
  },
  {
    title: "Bala perdida 2",
    michelRating: 9,
    brayhantRating: 9,
    poster: "https://m.media-amazon.com/images/M/MV5BZWNhOGFmYWItYzg5NC00M2JmLThmMDktYzc2YTE4NjgwYjI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    synopsis: "Tras la muerte de Charras, Lino y Julia forman la nueva Unidad de Narcóticos. Decidido a encontrar a los asesinos de su hermano y de su mentor, Lino continúa su cacería y no deja que nadie se interponga en su camino.",
    trailerUrl: "https://www.youtube.com/watch?v=Rw37Qy1ZyP8"
  },
  {
    title: "Querido John",
    michelRating: 7.5,
    brayhantRating: 7,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/854afa4a5b840e029a53acb8c6e6f2144773eda6529daeacaf39a543626d6acd.jpg",
    synopsis: "Un soldado y una estudiante universitaria se enamoran, pero su relación se complica por sus deberes y la distancia.",
    trailerUrl: "https://www.youtube.com/watch?v=_99xWg_Fesw"
  },
  {
    title: "Sweeny todd",
    michelRating: 9,
    brayhantRating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_FMjpg_UX1000_.jpg",
    synopsis: "Un barbero busca venganza contra los que lo enviaron injustamente a prisión, con la ayuda de una pastelera.",
    trailerUrl: "https://www.youtube.com/watch?v=acHBq_oZm-8"
  },
  {
    title: "Boda sangrienta",
    michelRating: 7,
    brayhantRating: 7.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMTViMDA4YjgtZDQ4NC00ZDk2LTg0MWItOTc4MTkwMmVkZWRmXkEyXkFqcGc@._V1_.jpg",
    synopsis: "Una novia descubre que la familia de su esposo tiene una tradición mortal para los nuevos miembros de la familia.",
    trailerUrl: "https://www.youtube.com/watch?v=3YijgxqCJmk"
  },
  {
    title: "La chica de la capa roja",
    michelRating: 8.5,
    brayhantRating: 8,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_FMjpg_UX1000_.jpg",
    synopsis: "Una joven que vive en una aldea aterrorizada por un lobo feroz, se enamora de un forastero.",
    trailerUrl: "https://www.youtube.com/watch?v=3P89h__03LI"
  },
  {
    title: "Oni goroshi : Ciudad de los demonios",
    michelRating: 7.5,
    brayhantRating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BYzg3ZGY5MmUtNGViOC00ZjRkLTg4ZmYtMDI1NWZiZDQ0Zjc2XkEyXkFqcGc@._V1_.jpg",
    synopsis: "Inculpado por el asesinato de su familia y dado por muerto, un asesino a sueldo retirado no se detendrá ante nada para vengarse de los demonios enmascarados que se han apoderado de su ciudad.",
    trailerUrl: "https://www.youtube.com/watch?v=dcIU_9YZfyQ"
  },
  {
    title: "Kraven",
    michelRating: 5,
    brayhantRating: 5,
    poster: "https://brainstomping.com/wp-content/uploads/2023/06/kraven-el-cazador-huntr-movie-poster-aaron-tylor-johnson-sony-marvel-comics.jpg",
    synopsis: "Una niña salvó a Kraven de la muerte y le confirió los poderes de los animales. Años después, convertido en un justiciero, se enfrenta a una banda de criminales que ha secuestrado a su hermano para tenderle una trampa y asesinarlo.",
    trailerUrl: "https://www.youtube.com/watch?v=I8gFw4-2RBM"
  },
  {
    title: "Equipaje de mano",
    michelRating: 9.5,
    brayhantRating: 9.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMDMyZWYwYTEtMmUwNy00NTE4LTkxNmUtY2Y1YzllYTUwYTQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    synopsis: "Un joven agente de aduanas es chantajeado por un pasajero que amenaza con introducir de contrabando un peligroso paquete en un avión en Nochebuena.",
    trailerUrl: "https://www.youtube.com/watch?v=9Xtod7Nlsxk"
  },
  {
    title: "La vieja guardia",
    michelRating: 9.5,
    brayhantRating: 9.5,
    poster: "https://m.media-amazon.com/images/M/MV5BY2RkNjA1YmMtM2VlYi00ZjllLThjN2MtOTFmZGM4MTMwNjAyXkEyXkFqcGc@._V1_.jpg",
    synopsis: "Un grupo de guerreros inmortales que han protegido a la humanidad durante siglos, se enfrentan a una nueva amenaza.",
    trailerUrl: "https://www.youtube.com/watch?v=Tzl2WUhGLjk"
  },
  {
    title: "Ladronas",
    michelRating: 6,
    brayhantRating: 4,
    poster: "https://m.media-amazon.com/images/M/MV5BOWNiMjlmZjItNTFmYS00ZWVjLTlmODgtZjE1MTVmNmJhODI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    synopsis: "Tres ladronas expertas deben unirse para un último atraco.",
    trailerUrl: "https://www.youtube.com/watch?v=lYednWpcM8w"
  }
];

// Add YouTube IDs for each movie
export const moviesWithYoutubeIds = moviesData.map(movie => ({
  ...movie,
  youtubeId: movie.trailerUrl ? getYoutubeId(movie.trailerUrl) : undefined
}));