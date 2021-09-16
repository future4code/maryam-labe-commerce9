import React from "react";
import styled from "styled-components";

const NavCabecalho = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:50px;

    h1 {
        font-size:20px;
    }

    a {
        text-decoration: none;
    }

`;



export default class Cabecalho extends React.Component {
    render() {
        return (
            <NavCabecalho>
                <h1>E-Commerce</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Produtos</a>
                    <a href="/">Contatos</a>
                </nav>
            </NavCabecalho>
        )
    }
}