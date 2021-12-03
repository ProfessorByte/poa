import React, { useState, useEffect} from "react";
import "../css/ButtonsUser.css";
import { getEstadosNivs} from "../server/api";
import { useSigninCheck } from "reactfire";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";*/
import Abeja from "../assets/Avatars_poa/abejitas.PNG";
import Ballena from "../assets/Avatars_poa/BallenaTumblr.PNG";
import Lampara from "../assets/Avatars_poa/Lampara.PNG";
import Librito from "../assets/Avatars_poa/librito.PNG";
import Mariposa from "../assets/Avatars_poa/MariposaTraicionera.PNG";
import Mochila from "../assets/Avatars_poa/mochilaRosas.PNG";
import Poscion from "../assets/Avatars_poa/posicion magica.PNG";
import Prt from "../assets/Avatars_poa/prt.PNG";
import Submarino from "../assets/Avatars_poa/submarino.PNG";
import TocaDiscos from "../assets/Avatars_poa/TocaDiscos.PNG";
import Torre from "../assets/Avatars_poa/Torre.PNG";
import Rafael from "../assets/Avatars_poa/Tortuguita.PNG";
import Platano from "../assets/images/platano.png";

/*import cambiar from "./CambioIconos"*/

const BotonIcono = ({ cerrarSesion }) => {
  const [icono, setIcono] = useState(Abeja);
  const imagenAleatoria = () => {
    var url = [
      Abeja,
      Ballena,
      Lampara,
      Librito,
      Mariposa,
      Mochila,
      Poscion,
      Prt,
      Submarino,
      TocaDiscos,
      Torre,
      Rafael,
      Platano,
    ];
    var azar = Math.floor(Math.random() * url.length);
    return url[azar];
  };
  
  const { status, data: signInCheckResult } = useSigninCheck();

  const [userName, setUserName] = useState(""); 

  const obtNameUsuario = async () => {
    if (status !== "loading" && signInCheckResult.signedIn) {
      const querySnapshot = await getEstadosNivs(signInCheckResult.user.uid);
      let userName = "";
      querySnapshot.forEach((estado) => {
        userName = estado.data().name
      });
      setUserName(userName);
    }
  }

  useEffect(() => {
   obtNameUsuario();
  }, [])

  return (
    <div className="dropdown dropstart">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img id="iconu" src={icono} width="150px" alt="Imágen de usuario" />
      </button>
      <div
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuButton"
      >
        {status !== "loading" && signInCheckResult.signedIn ? <a className="dropdown-item" >
          {userName}
        </a> : <div>Anónimo</div>}
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setIcono(imagenAleatoria());
          }}
        >
          Cambiar Icono
        </a>
        <a className="dropdown-item" href="/poa" onClick={cerrarSesion}>
          Cerrar Sesion
        </a>
      </div>
    </div>
  );
};
export default BotonIcono;
