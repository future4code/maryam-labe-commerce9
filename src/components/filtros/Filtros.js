import React from "react";
import { NavFiltros } from "./filtroStyle";

export default class Filtros extends React.Component {
    render(props) {
        return (
            <NavFiltros>

                <h1>Filtros</h1>

                <label>Buscar por nome</label>
                <input
                    type="text"
                    placeholder="Nome do item"
                    value={props.query}
                    onChange={props.updateQuery}
                />

                <label>Preço mínimo</label>
                <input
                    type="number"
                    placeholder="Mínimo"
                    value={props.minPrice}
                    onChange={props.updateMinPrice}

                />

                <label>Preço máximo</label>
                <input
                    type="number"
                    placeholder="Máximo"
                    value={props.maxPrice}
                    onChange={props.updateMaxPrice}

                />

            </NavFiltros>
        )
    }
}