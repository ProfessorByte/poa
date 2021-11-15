import { auto } from "@popperjs/core";
import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import "../css/StylesHistoria.css";

//Escenas//
import img1 from "../assets/escenas/img1.png";
import img2 from "../assets/escenas/img2.png";
import img3 from "../assets/escenas/img3.png";
import img4 from "../assets/escenas/img4.png";
import img5 from "../assets/escenas/img5.png";
import img6 from "../assets/escenas/img6.png";
import img7 from "../assets/escenas/img7.png";
import img8 from "../assets/escenas/img8.png";

export default function Historia (){
  return( 
   <div className="Historia"> 
     <Parallax  
      bgImage={img1}
      strength={500}
      bgImageStyle={{height:'100%',width:'100%'}}
      
     >

     </Parallax>
    <div className="parallax1">
     <Parallax 
      bgImage={img2}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:850}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>
     <div className="parallax1">
     <Parallax
      bgImage={img3}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
      
     >
          <div style={{ height: 800 }}>
          </div>

     </Parallax>     
     </div>

     <div className="parallax1">
     <Parallax
      bgImage={img4}
      strength={500}
      bgImageStyle={{height:'100%'}}
      // style={{height:800}}
     >
       <div style={{ height: 800 }}>
       </div>
     </Parallax>
     </div>

     <div className="parallax1">
     <Parallax 
      bgImage={img5}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
       <div style={{ height: 800 }}>
       </div>
     </Parallax>
     </div>

     <div className="parallax1">
     <Parallax
      bgImage={img6}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>

     <div className="parallax1"> 
     <Parallax
      bgImage={img7}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>

     <div className="parallax1"> 
     <Parallax
      bgImage={img8}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>
   </div>

  )
}

