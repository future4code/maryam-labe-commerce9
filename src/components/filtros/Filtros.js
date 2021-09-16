import React from "react";
import styled from "styled-components";

const NavFiltros = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;

    h1 {
        font-size: 20px;
    }

    input {
        border: 1px solid black;
        height: 25px;
        border-radius: 5px;
    }
`;

export default class Filtros extends React.Component {
    render() {
        return (
            <NavFiltros>
                <h1>Filtros</h1>
                <label>Preço mínimo</label>
                <input type="number" value="minPrice" />
                <label>Preço máximo</label>
                <input type="number" value="maxPrice" />
                <label>Buscar por nome</label>
                <input type="text" />
            </NavFiltros>
        )
    }
}