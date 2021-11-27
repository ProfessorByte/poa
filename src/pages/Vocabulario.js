import React from "react";
import JSONDATA from '../assets/MOCK_DATA.json'
import { ButtonBack } from "../components/ButtonBackComponent";

export default function Vocabulario() {
    return ( <div>
        <input type="text" placeholder="Buscar..."></input>

        {JSONDATA.map((val,key) => {
            return <div>
                {
                    <div> 
                         <button>val.first_name</button>
                    </div>
                   
                }
            </div>
        })}
    </div> );
}
