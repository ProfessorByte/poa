/*import React from "react";
import Jake from "../assets/images/jake.png"
import Bender from "../assets/images/bender.png"
var cambia_imagen = new Array();
cambia_imagen[0] = Jake;
cambia_imagen[1] = Bender;
function CambiosImagen(){
  return(Math.floor(Math.random() * n + 1 ));
} 
export default CambiosImagen;
function cambiar(){
  document.getElementById().src = cambia_imagen[rand(10)-1];
}
export default cambiar;*/
import Bender from "../assets/images/bender.png"
import Jake from "../assets/images/jake.png"
import Palta from "../assets/images/palta.jpg"
function imagenAleatoria(){
  var url = new Array();
  url [0]= Bender;
  url [1]= Jake;
  url [2]= Palta;
  var azar = Math.floor(Math.random() * url.length);
  document.getElementsByTagName("img")[0].src=url[azar];
}
export default imagenAleatoria;