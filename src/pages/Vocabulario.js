import React, { useState, useEffect } from "react";
import Header from "../components/HeaderVideos&Biblio";
import "../css/Vocabulario.css";
import FooterVocabulario from "../components/FooterRepositorio";
import FrameVocabulario from "../components/Frame_Vocabulario";
import { MDBCol, MDBIcon } from "mdbreact";
export default function Vocabulario() {
    const [searchItem, setSearchItem] = useState("");
    return (
        <div className="fondoVocabulario">
            <Header />
            <div className="content-wrap mb-3">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <h1>Vocabulario</h1>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <MDBCol md="12">
                            <div className="input-group md-form form-sm form-lg form-1 pl-0 ancho">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text purple "
                                        id="basic-text1"
                                    >
                                        <MDBIcon
                                            className="text-white"
                                            icon="search"
                                        />
                                    </span>
                                </div>
                                <input
                                    className="form-control form-control-lg "
                                    type="text"
                                    id="inputID"
                                    placeholder="Buscar"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearchItem(event.target.value);
                                    }}
                                />
                            </div>
                        </MDBCol>
                    </div>
                    <div>
                        <FrameVocabulario searchTerm={searchItem} />
                    </div>
                </div>
            </div>
            <FooterVocabulario />
        </div>

    );
}