import { filter } from "dom-helpers";
import React, { useState } from "react";
import JSONDATA from '../assets/MOCK_DATA.json'
import { ButtonBack } from "../components/ButtonBackComponent";

export default function Vocabulario() {
    const [searchTerm, setSearchTerm] = useState('')
    return ( <div>
        <input type="text" placeholder="Buscar..." onChange={event => {setSearchTerm(event.target.value)}}></input>

        {JSONDATA.filter((val) => {
            if(searchTerm == ""){
                return val;
            }else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }).map((val,key) => {
            return <div>
                {
                    <div> 
                         <button>{val.first_name}</button>
                    </div>
                   
                }
            </div>
        })}
    </div> );
}
