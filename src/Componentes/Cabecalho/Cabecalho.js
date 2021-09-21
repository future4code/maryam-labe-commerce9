import React from "react";
import { CabecalhoStyle, CabecalhoTitulo } from "./estiloDoCabecalho"


export default class Cabecalho extends React.Component {
    render() {
        return (
            <CabecalhoStyle>
                <CabecalhoTitulo>
                    <a href="index.html"> <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad26f9100973805.5f182130e442d.gif" alt="pig Hi" /> </a>
                    <h1>Mr. Pig</h1>
                </CabecalhoTitulo>

                <nav>
                    <a href="/">Produtos</a>
                    <a href="#contato">Contatos</a>
                    <a href="#redes">Redes</a>
                </nav>

            </CabecalhoStyle>
        )
    }
}