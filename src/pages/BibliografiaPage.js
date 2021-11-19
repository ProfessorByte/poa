import HeaderBibliografia from '../components/HeaderBibliografia'
import "../css/HeaderBibliografia.css";
import Cards from "../components/CardsBibliografia.js";
import Header from "../components/HeaderComponent"
import { db } from "../server/firebaseConfig";
import React ,{useState} from 'react';
import { getFirestore, collection } from "firebase/firestore"




export default function BibliografiaPage() {
    const [cards,setCards]=useState([]);
    const [loading ,setLoading]=useState(false);
    const ref=collection(db, "Bibliografia")

    
    function getCards(){
        setLoading (true);

        ref.onSnapshot((querySnapshot) =>{
            const cardsArray=[];
            querySnapshot.forEach((doc)=>{
                cardsArray.push(doc.data());
            });
            setCards(cardsArray);
            setLoading(false);
        });

    }

    return (
        <div className="fondoBibliografia">
            <div>
                <Header/>
                <HeaderBibliografia/>
            </div>

            <div className="wrapper-grid">
                <div className="container_cards">
                    { 
                        cards.map((card,index)=>{
                        return <Cards key={index}
                                      tituloReferncia={card.tituloReferncia}
                                      autor_NombrePagina= {card.autor_NombrePagina}
                                      temas ={card.temas}
                                      tipo ={card.tipo}
                                      link ={card.link}
                        />
                    })}
                </div>
            </div>
            
        </div>
        );
        
             
   
    
  }
  
  




 