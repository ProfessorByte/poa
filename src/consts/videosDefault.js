/*
<button
            onClick={() => {
              {
                VIDEOS.map((video) => {
                  addDoc(collection(db, "orderedVideos"), video);
                });
              }
            }}
          >
            Subir videos
          </button>
*/

export const VIDEOS = [
  {
    sectionId: 1,
    title: "Introducción",
    topics: [
      {
        title: "Presentación",
        videoLink:
          "https://www.youtube.com/watch?v=4sZHxFEyEiE&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=xZFSFu9EVUs&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=2",
        title: "Introducción",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=xkVzLPOUmN8&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=3",
        title: "Instalación de NetBeans",
        userName: "admin1",
      },
      {
        title: "Personaliza tu NetBeans",
        videoLink:
          "https://www.youtube.com/watch?v=Rv5NVYxuh_c&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=4",
        userName: "admin1",
      },
      {
        title: "Otras Alternativas",
        videoLink:
          "https://www.youtube.com/watch?v=iqfAWvvD4yU&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=5",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 2,
    title: "Objetos y Clases",
    topics: [
      {
        videoLink:
          "https://www.youtube.com/watch?v=6cZrdMtSoN0&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=6",
        title: "Parámetros",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=Ekv9yjB61Zo&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=7",
        title: "Tipos de datos",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=oBO01Cx_YwQ&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=8",
        title: "Abstracción",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 3,
    title: "Encapsulamiento",
    topics: [
      {
        title: "Modificadores de Acceso",
        videoLink:
          "https://www.youtube.com/watch?v=gR0EssHrl24&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=9",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=u4GcviXpvCk&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=10",
        title: "Modificador Static-Final",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 4,
    title: "Definiciones de clases",
    topics: [
      {
        title: "Atributos - Métodos",
        videoLink:
          "https://www.youtube.com/watch?v=NUsqGSCNh5g&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=11",
        userName: "admin1",
      },
      {
        title: "Métodos - 2",
        videoLink:
          "https://www.youtube.com/watch?v=duZToqP-NdA&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=12",
        userName: "admin1",
      },
      {
        title: "Constructores",
        videoLink:
          "https://www.youtube.com/watch?v=5EGS6lnghYE&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=13",
        userName: "admin1",
      },
      {
        title: "Variables Locales y Globales",
        videoLink:
          "https://www.youtube.com/watch?v=ndkxmG5CDX4&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=14",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 5,
    title: "Estructuras de control",
    topics: [
      {
        title: "Sentencias de Control (if - else)",
        videoLink:
          "https://www.youtube.com/watch?v=m1xX_8WLI1M&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=15",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=p5q_Hir9Vtk&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=16",
        userName: "admin1",
        title: "Sentencias de Control (Ejercicios)",
      },
      {
        title: "Sentencias de Control (Switch - Parte 1)",
        videoLink:
          "https://www.youtube.com/watch?v=T77h7bcq4sI&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=17",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=qNMvXGGiKAg&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=18",
        title: "Sentencias de Control (Switch - Parte 2)",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 6,
    title: "Interacción de objetos",
    topics: [
      {
        title: "Interacción de objetos - Blue J",
        videoLink:
          "https://www.youtube.com/watch?v=UOpOS2-0eRI&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=19",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 7,
    title: "Arrays y Matrices",
    topics: [
      {
        videoLink:
          "https://www.youtube.com/watch?v=WXK8jgBqMsE&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=20",
        title: "Vectores (Arrays)",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=qgDWwj1eX58&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=21",
        title: "Arrays (Ejercicios)",
        userName: "admin1",
      },
      {
        title: "Matrices",
        videoLink:
          "https://www.youtube.com/watch?v=dBp4vCmhSts&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=22",
        userName: "admin1",
      },
      {
        title: "Matrices (Ejercicios)",
        videoLink:
          "https://www.youtube.com/watch?v=tZmZt2Dqg2M&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=23",
        userName: "admin1",
      },
      {
        title: "Strings y sus funciones más usadas",
        videoLink:
          "https://www.youtube.com/watch?v=6oJjy9Mg3N4&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=24",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 8,
    title: "Estructuras de control iterativas",
    topics: [
      {
        videoLink:
          "https://www.youtube.com/watch?v=qG2At2DqPiU&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=25",
        title: 'Ciclo "While"',
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=JRt6-ryXLsU&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=26",
        title: 'Ciclo "While" (Ejercicios)',
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=MG4jSh20kh4&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=27",
        title: 'Ciclo "Do While"',
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=vtRVa7aMr14&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=28",
        title: 'Ciclo "For"',
        userName: "admin1",
      },
      {
        title: 'Ciclo "For" (Ejercicios)',
        videoLink:
          "https://www.youtube.com/watch?v=8-yQs_COhQ0&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=29",
        userName: "admin1",
      },
      {
        title: 'Ciclo "For" (Ejercicios - Series)',
        videoLink:
          "https://www.youtube.com/watch?v=h4eMo4nlfgY&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=30",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=DMV1DZVW_9M&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=31",
        userName: "admin1",
        title: 'Ciclo "For Each"',
      },
    ],
  },
  {
    sectionId: 9,
    title: "Herencia",
    topics: [
      {
        videoLink:
          "https://www.youtube.com/watch?v=LZPafq9Ve_Q&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=32",
        title: "Superclases y Subclases",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=9ngWaa5iHds&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=33",
        title: "Sobrecarga y Sobreescritura",
        userName: "admin1",
      },
      {
        title: "Herencia Múltiple e Interfaces",
        videoLink:
          "https://www.youtube.com/watch?v=YcW9Xf34POI&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=34",
        userName: "admin1",
      },
      {
        videoLink:
          "https://www.youtube.com/watch?v=wSt523lfPFY&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=35",
        title: "Clases abstractas",
        userName: "admin1",
      },
      {
        title: "Interface - ejemplo",
        videoLink:
          "https://www.youtube.com/watch?v=YDNGD0gXg4s&list=PLg9145ptuAihudcXnj8yGBtVWFI6hrrF_&index=36",
        userName: "admin1",
      },
    ],
  },
  {
    sectionId: 10,
    title: "Polimorfismo",
    topics: [
      {
        videoLink: "https://www.youtube.com/watch?v=5SH5DfQZfTM",
        title: "Polimorfismo",
        userName: "admin1",
      },
      {
        title: "Conversión ascendente de tipos (Upcasting)",
        videoLink: "https://www.youtube.com/watch?v=Phi2oAHWTGs",
        userName: "admin1",
      },
      {
        videoLink: "https://www.youtube.com/watch?v=nu2SaM0Sy68",
        title: "Conversión descendente de tipos (Downcasting)",
        userName: "admin1",
      },
      {
        title: "Enlace dinámico y estático",
        videoLink: "https://www.youtube.com/watch?v=QgMRmPBgOog",
        userName: "admin1",
      },
    ],
  },
];
