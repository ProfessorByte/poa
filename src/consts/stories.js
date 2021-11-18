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
  {
    id: 2,
    title: "Abstracción",
    paragraphs: [
      "Continuando con el entrenamiento para el aprendiz del mago, existía un detalle importante para poder hacer magia mucho más poderosa, la cual sólo dominan los magos expertos. Para hacer esto, debe tener la capacidad de imaginar los encantamientos, pensar cómo sería mucho más poderoso. Por ello, es necesario tomar en cuenta los detalles más relevantes. En un encantamiento para crear un arma, por ejemplo, si es una espada, es necesario poder imaginarse los detalles más importantes, como ser el tipo de arma, el alto, ancho, la cantidad de magia, el tipo de mango.",
      `Junto con el mago, el aprendiz en el primer intento de crear un escudo normal para poder defenderte de armas normales, no lo logró, pues el mago solo mencionó: “Tienes que entender los atributos más importantes de un arma, para poder hacer una que realmente valga la pena”`,
      "En los alrededores, había materiales de todos los tipos, metales, piedras preciosas, madera y cuero.",
      "El aprendiz, con su máximo esfuerzo intento crear algo, pero solo incendio unos árboles de fuera, pues no pudo saber a qué se refería con decir atributos.",
    ],

    question:
      "En el segundo intento, trata de pensar de nuevo a que se refería su maestro. ¿Qué atributos se podría pensar que tiene en un escudo?",
    options: [
      "Material principal, material secundario, alto, ancho, grosor, forma.",
      "Tipo de madera, cantidad de metal usado, tipo de agarrador, peso del escudo.",
      "Cantidad de daño recibido, año de tala de la madera, color del metal, combinación de colores de metal-madera.",
    ],
    ifCorrect:
      "¡El aprendiz lo logró! Identifico bien lo esencial en atributos, características con las cuales podría hacer cualquier escudo, por lo que pensó en hacer un escudo de diamante y acero, pues seria lo mas resistente, con un alto proporcional a su brazo, ancho adecuado para cubrirse, y un ancho que no haga que el escudo sea muy pesado, además de un de una forma circular. El mago reconoció que el aprendiz realmente hizo un excelente trabajo.",
    ifWrong:
      "El aprendiz fracaso de nuevo, quizás lo realmente importante son otras cosas que no se pudo imaginar, el mago replantea una estrategia de como explicarle mejor para que se fije realmente en lo importante.",
    idxCorrect: 1,
    endCorrect:
      "Dentro de la historia , para poder crear exitosamente una clase en Programación orientada a objetos, debemos tomar en cuenta la abstracción, que es llevar cosas del mundo real identificando los atributos  más importantes que podríamos necesitar dentro de un contexto, en este caso, elegir que materiales(diamante y acero), alto(proporcional), ancho(adecuado al cuerpo), grosor(lo suficiente para no hacerlos pesado) y forma(circular) de ese escudo , sería asignar valores a estos atributos, para poder crear un escudo que nos sirva. Podemos hacer infinidad de nuevos escudos solo dando nuevos valores a estos atributos.",
    endWrong: "",
  },
  {
    id: 3,
    title: "Tipos de Modificadores de Acceso",
    paragraphs: [
      "Después de dominar la fabricación de las pociones, el mago debía aclarar a quienes iba dirigidas, pues todas tenían orientado un público o un usuario especifico. Todas estas están acomodadas en un almacén.",
      "De las pociones fabricadas, las más poderosas eran privadas (fuerza, inmunidad al fuego, visión nocturna), solo podían ser usadas por el mago.",
      "Las que eran para evitar el paso del tiempo o para recuperar fuerzas, las hacia el mago y solo podía ser usada por el y por su aprendiz. Las de sanación y curación de enfermedades podía ser usada por todos.",
      "Cabe resaltar que todos tienen un color que permite identificarlos.",
      "Es importante poder diferenciarlos, pues un solo error dentro del orden de las pociones, podría costar la develación de los secretos del mago.",
    ],
    question:
      "El mago encargo al aprendiz que acomodará las pociones, ¿Cuál sería la mejor forma de no confundirse?",
    options: [
      "Acordarse absolutamente de todos los tipos de poción para poder clasificarlas en los almacenes.",
      "Bebérselas todas, y anotar el efecto que tiene cada una.",
      "Etiquetar las pociones con ayuda del mago, con privada, pública y protegida.",
    ],
    ifCorrect:
      "El mago felicita por la manera en que sugirió etiquetar las pociones. Gracias a las etiquetas se podrá identificar fácilmente cuáles no.",
    ifWrong:
      "El mago empieza a reconsiderar la inteligencia de su aprendiz, aunque en parte se sintió culpable por no ayudarle.",
    idxCorrect: 1,
    endCorrect:
      "Las etiquetas en las pociones, en realidad, son palabras reservadas (palabras propias de lenguaje de programación) que sirven para darle este mismo uso. Las clases pueden tener atributos o métodos con estas palabras que denotan su uso, en el sentido de quienes pueden usarlo. En el caso de ser privado, solo la clase puede usarlo(el mago),protegido (en el sentido que solo puede usarlo el mago y su aprendiz, esto se aclarará después), y público, que pueden usarlo todos.",
    endWrong: "",
  },
  {
    id: 4,
    title: "Objeto y Clase",
    paragraphs: [
      "Otro de los artefactos más importantes que utilizaban los magos eran las recetas.Para poder crearlas se tiene que dominar el arte de abstracción, cosa que ya dominaba el aprendiz. Se usaban estas recetas para crear los objetos, por lo que era importante aprender su diferencia.",
      "Por sorprendente que parezca , los magos novatos solían valorar mucho más a los objetos , pues dejaban de lado las recetas. Incluso creían que un objeto debía ser más valorado que la receta.",
    ],
    question: "¿Cual crees que es mas importante, el objeto o la receta?",
    options: [
      "El objeto claramente",
      "La receta, quién pensaría lo contrario?",
      "La salud",
      "La Familia",
    ],
    ifCorrect:
      "El aprendiz de mago está yendo por un excelente camino para convertirse en un gran mago",
    ifWrong:
      "El aprendiz tiene que aprender a ver mejor el valor que tienen las cosas.",
    idxCorrect: 2,
    endCorrect:
      "Como se pudo ver, la receta(clase) es vital para crear nuevas clases, pues estas una vez instanciadas se convierten en objetos. Es decir, los objetos nacen desde las clases. Mientras mejor se definan las clases mejor será el objeto que tengas.",
    endWrong: "",
  },
  {
    id: 5,
    title: "Constructores",
    paragraphs: [
      "Ya vimos que las recetas eran muy importantes para los magos. Estas contenían los atributos, y la descripción de todo lo que podía hacer el objeto que ahí se describe. Claramente el mago podía modificar estos valores en un futuro. Lo importante es el contenido que tenía cada receta.",
      "También se sabe que cada receta podía crear una cantidad infinita de los mismos objetos,siempre y cuando se cumpla con los requisitos de la misma claramente. Jamás se puede crear un objeto con atributos distintos a los que pida la receta.",
      "El mago le da una receta de un cetro a su aprendiz, en esta receta dice que se necesita una piedra preciosa,un material de la barra, un alto definido, un radio definido y un tipo de encantamiento.",
    ],
    question: "¿Cuáles serían los valores adecuados para este?",
    options: [
      "Diamante , piedra volcánica, 1.5 m , 20 cm , lluvia eterna.",
      "Rubi, madera, congelación, 2 m.",
      "Dragón, zapato, hamburguesa.",
    ],
    ifCorrect:
      "El mago se siente orgulloso de su aprendiz, está casi a punto de convertirse en un mago verdadero, pues ya domina la mayoría de cosas que debería dominar normalmente un mago.",
    ifWrong:
      "El mago no se enoja, sin  embargo , no piensa ser duro puesto que este es el casi último tema que necesita aprender.",
    idxCorrect: 1,
    endCorrect:
      "Los constructores son métodos que sirven para instanciar una clase, es decir, para crear un objeto. Este objeto se diferencia de otros por su estado , en este caso, por los valores dentro de los atributos que llega  a tener.",
    endWrong: "",
  },
  {
    id: 6,
    title: "Métodos",
    paragraphs: [
      "Hay una parte especial de crear los objetos, puesto que después de tener los atributos correctos también se debe saber el tipo de comportamiento va a tener, como que hechizos se pueden activar, como se los activa, entre otras características especiales que podría tener un arma.",
      "Es muy importante saber esto ya que si no definimos bien en una receta de una espada por ejemplo, podría ser que sea de diamante, y podría tener un comportamiento o un hechizo de siempre fallar. Si no se revisa bien esto, podría tener una consecuencia fuerte al momento de crear el objeto.",
    ],
    question: "¿Qué encantamientos serían adecuados para un arco?",
    options: [
      "Multidisparo,flecha en llamas, empuje.",
      "Filo , protección, espinas.",
      "Fraqueza, valor, coraje",
    ],
    ifCorrect:
      "Lo más importante para poner un hechizo es el sentido común, el mago está aliviado de ver que su aprendiz si lo tiene.",
    ifWrong:
      "El mago cree que a su aprendiz le falta sentido común, cosa que solo se puede aprender con un viaje en solitario de 35 días.",
    idxCorrect: 1,
    endCorrect:
      "Como se puede ver , dentro de la clase se definen los métodos, los cuales muestran los comportamientos que tendrán los objetos instanciados. Es muy importante que cada método tenga mucha coherencia, pues sino, será error de parte de una mala abstracción.",
    endWrong: "",
  },
  {
    id: 7,
    title: "Variables locales y globales",
    paragraphs: [""],
    question: "",
    options: [""],
    ifCorrect: "",
    ifWrong: "",
    idxCorrect: 3,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 8,
    title: "Interacción de Objetos",
    paragraphs: [
      "El año 2445 la civilización de la Tierra tuvo suficientes avances tecnológicos para hacer viajes intergalácticos. Es así como un grupo de humanos se enfrascó en un objetivo, el cuál fue expandir su vasto imperio por los confines del universo. Sin embargo se encontraron con un sin fin de razas bélicas de alienígenas que buscaban exactamente lo mismo, es así como durante siglos la raza humana formó parte de está enorme guerra interplanetaria.",
      "Después de tanto tiempo todos perdieron las esperanzas sobre lograr su objetivo inicial y decepcionados muchos decidieron acabar con sus vidas y los que no lo hicieron se condenaron a sobrevivir el resto de su vida escapando y ocultándose en diferentes zonas de la galaxia.",
      "Después de algún tiempo un pequeño grupo de desertores decidieron reconstruir su vieja nave con la que habían llegado a ese lugar para regresar a la Tierra, ya que en tanto tiempo de generación en generación se contaron historias sobre un planeta en el que no habían guerras, un planeta donde habían grandes avances en medicina y ciencia, un planeta donde se podía desarrollar la vida en completa plenitud.",
    ],
    question:
      "Tenían que ensamblar las piezas para el correcto y óptimo funcionamiento de la nave. Es así como 3 de sus mejores ingenieros entraron en debate sobre la reconstrucción de la nave y cada uno tenía una opinión diferente:",
    options: [
      "Los propulsores deben estar en las alas para que se pueda maniobrar con facilidad.",
      "El propulsor de maniobras debe estar en la cola de la nave, pero el tanque debe estar cerca del habitáculo para cargarlo rápidamente.",
      "El sistema de control de altitud debe estar en la parte frontal de la nave y el propulsor de maniobras en la cola junto a los motores principales y el tanque.",
    ],
    ifCorrect:
      "Excelente decisión, el grupo de sobrevivientes llegó a la Tierra y fueron recibidos como héroes por los humanos que la habitaban.",
    ifWrong:
      "Tomamos una muy mala decisión, los sobrevivientes se perdieron en la inmensidad del espacio y murieron después de que se les acabó la comida, el agua y el oxígeno.",
    idxCorrect: 3,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 9,
    title: "Arreglos y Matrices",
    paragraphs: [
      "Para llegar a las tierras Baldías, se debe de cruzar dos laberintos, en el cual esta ocasión se enfrentaba Dixie y Luis, de manera que solo se le permitía entrar una persona por laberinto, había un cartel que les alertaba de que debían de pensar bien cuál laberinto deben escoger, ya que el que llegaba primero a la meta ganaría una recompensa y el perdedor deberá pagarla, uno era largo y el otro era corto, pero más confuso de encontrar la salida, Dixie se decidió por el primer laberinto largo  y Luis por el segundo, Luis no contaba que este laberinto no era un camino recto sino que era bidimensional, había bajadas y subidas, lo cual estaba resignado de que el ganara la recompensa. pero aun así siguió y encontró más atajos.",
      "Mientras Dixie se confundió y tardo más en salir, al final de estos recorridos Luis fue el ganador y Dixie tuvo que pagar la recompensa.",
    ],
    question: "¿Por qué Luis ganó el laberinto?",
    options: [
      "Porque el recorrido de Dixie era complicado",
      "Porque su recorrido de Luis era una matriz, pero más corto.",
      "Porque le ayudaron otras personas.",
    ],
    ifCorrect:
      "Luis tuvo que pasar un laberinto con subidas y bajadas, y él era muy listo con encontrar atajos, también el laberinto que le toco era más corto que de Dixie.",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 2,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 10,
    title: "Ciclo while y for",
    paragraphs: [
      "En un lugar no muy lejano del planeta tierra Marte es el hogar de los marcianos ellos son seres muy peculiares ya que no les gusta hacer la misma tarea muchas veces cuando lo hacen se enojan muchísimo tanto que pueden llegar a explotar y no queras que un marciano explote eso haría que todos los marcianitos se extinguieran de Marte , es  por eso que crearon una herramienta la cual les ayude a hacer una tarea repetitiva n veces ,esto les hace extremadamente felices.",
      "Esta herramienta se llama forsky que tiene la forma de  un cubo de oro cuando un marciano quiere  utilizar esta herramienta lo único que hace es gritar “forsky forsky”, entonces forsky hace la tarea tantas veces como el marcianito le diga también existe otra herramienta llamada whilekam que tiene la forma de un cubo de diamante a esta herramienta solo la llamas cuando tienes que  hacer una tarea pero quieres que pare cuando llegue a cierto punto entonces le dices “whilemka stop”, los marcianos deben saber muy bien cuándo utilizar qué herramienta porque sino la tarea tardaría 10 años en completarse y eso sería  lo peor que le puede pasar a un marcianito.",
    ],
    question: "¿En qué momento debes llamar a forsky?",
    options: [
      "Cuando tienes hambre",
      "Cuando tienes que  hacer una tarea pero quieres que pare cuando llegue a cierto punto.",
      "Cuando quieres hacer una tarea repetitiva n veces.",
    ],
    ifCorrect:
      "Cuando programamos muchas veces es necesario utilizar estructuras de control iterativas (ciclo for y while) estas estructuras hacen que un bloque de código se pueda ejecutar n veces.",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 3,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 11,
    title: "If-Else",
    paragraphs: [
      "Marcianalandia es el planeta vecino de marte  donde viven los parientes de los marcianitos ellos también vienen de la descendencia de los marcianos con la pequeña diferencia que ellos tienen la sangre azul y se podría decir que al tener este color de sangre estos marcianos se caracterizan por ser muy indecisos es por eso que crearon otra herramienta.",
      "Esta herramienta tiene la forma de un cubo rojo y te ayuda a tomar decisiones  lo único que los marcianos tiene que hacer es gritar “iftalky iftalky ” y mandarl una condición  esta herramienta es la salvación para los marcianos de este planeta ya que si no tuvieran esta herramienta es muy probable que también explotarian por tanta ansiedad de no poder tomar una decisión.",
    ],
    question: "¿Cuál es la forma de la herramienta if-talky?",
    options: [
      "Forma de un pokemon",
      "Forma de un cubo rojo.",
      "Forma de cono rojo.",
    ],
    ifCorrect:
      "Las estructuras de control if-else  (la herramienta if-talky) evalúa una condición en paréntesis si el resultado es verdadero ejecuta un bloque de código pero si esta condición es falsa ejecuta el bloque de código de la parte else ",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 2,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 12,
    title: "Herencia",
    paragraphs: [""],
    question: "",
    options: [""],
    ifCorrect: "",
    ifWrong: "",
    idxCorrect: 1,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 13,
    title: "Herencia Múltiple",
    paragraphs: [
      "A veces se encuentran situaciones un tanto especiales por las cuales un aprendiz de héroe debe pasar, tal que, este pueda heredar/aprender habilidades de este tales como Inteligencia, Agilidad o Fuerza. Todo esto depende del tipo de tutor que uno tenga.",
      "Sin embargo, un aprendiz puede heredar distintos tipos de conocimientos y habilidades, tales como la batalla cuerpo a cuerpo (Fuerza), la velocidad y destreza necesaria (Agilidad) o la sabiduría y conocimientos necesarios (Inteligencia). Tal que así a un aprendiz se le puede dar el rango de Fuerza, Agilidad, o Inteligencia.",
      "Pero existen casos en los que un aprendiz puede aprender. Esto se debe a que uno puede tener cualidades de Fuerza y Agilidad o Fuerza e Inteligencia, de ser así esto se conocería como una herencia múltiple que se le puede dar a un aprendiz de héroe, esto puede ayudar a un héroe que necesita de las habilidades en su momento de batalla.",
    ],
    question:
      "Un aprendiz quiere ser más veloz para llegar a tiempo a sus deberes y también quiere analizar muy bien las situaciones en las cuales se encuentra atrapado. ¿Cuáles son las cualidades que nuestro aprendiz necesita?",
    options: [
      "Fuerza y Agilidad",
      "Inteligencia y Fuerza",
      "Agilidad y Inteligencia",
      "Coca cola y pan",
    ],
    ifCorrect: "¡Bieeeeeeeeeen!, elegiste la opción correcta...",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 3,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 14,
    title: "Clases Abstractas",
    paragraphs: [
      "Existen varios tipos de héroes los cuales tienen objetivos en común como  ayudar a los demás, brindar seguridad para todos, etc. Pero existen diferentes tipos de héroes los cuales ayudan en diferentes situaciones que ameriten, unos salvan personas, otros salvan animales, otros construyen hogares para aquellos que lo necesitan y así, cada uno de estos héroes se comporta de manera distinta.",
      "Los héroes comparten características comunes pero estos no hacen todo igual los unos a otros, cada héroe realiza sus acciones de manera diferente. Un tipo de héroe no es algo concreto que se pueda definir, pero es posible basarse en este para poder crear tu definición de héroe.",
    ],
    question:
      "Si usted quisiera balancearse por la ciudad ¿A que tipo de héroe llamaría?",
    options: ["Spiderman", "Hulk", "Deadpool", "El wey que vende empanadas"],
    ifCorrect: "¡Bieeeeeeeeeen!, elegiste la opción correcta...",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 1,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 15,
    title: "Interface",
    paragraphs: [
      "Un héroe tiene obligaciones las cuales debe seguir, como se explicó anteriormente un héroe tiene diferentes tipos de habilidades y características que lo diferencia de los demás, sin embargo, estos tienen métodos que los hacen iguales en cierto modo.",
      "Un héroe es aquel que siempre ve el bien de los demás. En muchos casos estos cuentan con métodos los cuales los convierten en héroes del pueblo.",
      "De tal modo que un héroe puede llegar a ser cualquier persona que veas, incluso tu mismo puedes llegar a ser un héroe, tal vez no como en las películas o series que viste, pero puedes ser un héroe a tu modo, solo necesitas aprender de estos métodos que un héroe posee, tales como la valentía, coraje, esperanza, etc. ",
    ],
    question:
      "Es tu momento crear tu héroe, para esto usted debe crear los métodos iniciales que su héroe tendrá ¿Cuáles de estas cree que son las correctas?",
    options: [
      "Valentía, Coraje, astucia",
      "Miedo, Vergüenza, ira",
      "Envidia, pereza, flojera",
      "Azucar, flores y muchos colores",
    ],
    ifCorrect: "¡Bieeeeeeeeeen!, elegiste la opción correcta...",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 1,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 16,
    title: "Polimorfismo",
    paragraphs: [
      "Si los cuentos pudieran traer amor, esperanza y salvación al mundo, entonces, ¿cómo es que todavía hay almas heridas que persisten? Cuenta la leyenda que en lo profundo de las tierras Baldías se encontraba Terrizla en una celda llamada la puerta del amanecer se esconde la oscura y secreta historia del imperio.",
      "Cuando los guardias de Moniyan abrieron la cerradura, todo lo que pudieron ver era la celda vacía ¡Terizla había escapado! y.… desde ese día empezó con su venganza.",
      "Pasaron días donde Terrizla y sus aliados planean su venganza, lo cual los guardianes de Moniyan estaban preparados a la defensa, y llegó el día de la batalla en el cual Terrizla acabaría con su sed secreta de venganza... y así que se encontraban frente a frente entonces la batalla comenzó...",
      "Terizla y sus aliados se veían en desventaja a comparación de todos los guerreros de Moniyan, pero no contaron con las habilidades de Terizla, podía  cambiar de forma, tenía el poder de transformarse en los distintos héroes de la academia Moniyan, en los combatientes, en los magos y en los que tienen poder de agilidad.",
    ],
    question: "¿Porqué Terizla puede transformarse?",
    options: [
      "Porque él era uno de los guardianes de Moniyan y puede adquirir los mismos conocimientos y capacidades de los guardianes",
      "Porque era el mejor de todos",
    ],
    ifCorrect:
      "Terizla sabía que algún día el imperio Moniyan pagaría por todo el mal que le habían hecho.... Terizla era uno de los guardianes del imperio Moniyan pero el egocentrismo de algunos tutores decidió hacer experimentos con él, Terizla sufrió bastante y era hoy el día que cobraría venganza.",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 1,
    endCorrect: "",
    endWrong: "",
  },
  {
    id: 4,
    title: "Enlace Dinámico y Estático",
    paragraphs: [
      "Larry el Dinamico es una persona que utiliza muchas herramientas, a Larry le afecto la vejez, le dio demencial senil y olvido para que sirven sus herramientas, solo sabe que puede manejar una herramienta, en una ocasion, Larry recogio una herramienta y esta resulto ser un hacha y el quiere recoger sus cultivos, el usa su herramienta y resulta que no le sirvio para recoger sus cultivos, los perdio o al menos la mayor parte, luego quiso cortar madera pero en su mano traia una azada de herramienta, esta demas decir que no pudo prender su fogata…",
      "Al día siguiente se le vino a la cabeza que cada herramienta servia para algo y dependiendo que herramienta es su uso es diferente, al final de cuenta su hacha, azada, y pala son herramientas y sirven para algo, el aun sigue sin recordar el nombre de sus herramientas, pero memorizo su uso.",
    ],
    question:
      "¿Al ver las utilidades de estas herramientas, a qué concepto podríamos asociarlo ?",
    options: ["Enlace Dinámico", "Enlace Estático", "Variables", "Ninguno"],
    ifCorrect: "¡Bieeeeeeeeeen!, elegiste la opción correcta...",
    ifWrong: "¡Noooooooooo!, te equivocaste...",
    idxCorrect: 1,
    endCorrect: "",
    endWrong: "",
  },
];
