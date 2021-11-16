
import HeaderBibliografia from '../components/HeaderBibliografia'
import "../css/HeaderBibliografia.css";
import Cards from "../components/CardsBibliografia.js";
import Header from "../components/HeaderComponent"
import firebase from "../firebase/config.js";
import React ,{useState} from 'react';



export default function BibliografiaPage() {
    const [cards,setCards]=useState([]);
    const [loading ,setLoading]=useState(false);
    const ref=firebase.firestore().collection("Bibliografia");
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
                    {loading ? <h1>Cargando...</h1> :
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
    )
}
