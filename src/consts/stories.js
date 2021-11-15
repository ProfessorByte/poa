export const stories = [
  {
    id: 1,
    title: "Tipos de datos",
    paragraphs: [
      "Hace mucho tiempo existía un mago que preparaba muchas pociones, de diferentes tipos. Estas pociones las usaba para ayudar a la gente, pero había un problema. Para cada una de las pociones necesitaba un tipo especial de frasco, este podía ser de muchas medidas por lo que tenia un límite. Es decir, que no se podía almacenar una poción de fuerza en un frasco en una poción de salto.",
      "Un día, su aprendiz, luego de aprender magia, debía aprender a crear pociones. Sin embargo, por lo emocionado que estaba, un día sin la vigilancia de su maestro, preparó exitosamente una poción de visión nocturna , sin embargo , por no tener el conocimiento previo, la poción dentro del frasco explotó.",
    ],

    question: "Entonces, ¿Cuál es el error que cometió el estudiante?",
    options: [
      "Preparó mal la poción",
      "No uso el frasco correspondiente a la poción",
      "Lo agitó mucho y Explotó",
    ],
    ifCorrect:
      "Evidentemente, el aprendiz estuvo usando los frascos equivocados. Por suerte, el mago valoró mucho la capacidad de preparación de su pupilo que no le regaño, si no le mostró su error.",
    ifWrong:
      "El mago se enfadó por que su aprendiz hizo la preparación de pociones sin su permiso, por lo que tendrá que estar castigado leyendo todos los libros de la biblioteca de magia.",
    idxCorrect: 1,
    endCorrect:
      "Para poder entender la relación toma la poción como un valor, ejemplo la cadena “Hola”. Este valor solo puede ser almacenado en variables con tipos especifico. Para nuestra cadena “Hola mundo” podría almacenarse en un variable (tomado como frasco) de tipo String. Si intentáramos colocar un valor booleano como true(poción), sería un error, y no podríamos usarlo. Es importante aprender a diferenciarlos para poder dominar el manejo de tipos de dato.",
    endWrong: "",
  },
];
