import React from "react";
import { Filtro, GrupoDeFiltros } from "./estiloDoFiltro";


class Filtros extends React.Component {
  render() {
    return <GrupoDeFiltros>
        <h2>Filtros</h2>
        <Filtro>
            <p>Mínimo:</p>
            <input type={"number"}
            value={this.props.minimo}
            onChange = {this.props.onChangeMinimo}
            placeholder = "Valor Minimo"
            />
        </Filtro>

        <Filtro>
            <p>Máximo:</p>
            <input type={"number"}
            value={this.props.maximo}
            onChange = {this.props.onChangeMaximo}
            placeholder = "Valor Máximo"
            />
        </Filtro>

        <Filtro>
            <p>Item:</p>
            <input type={"text"}
            value={this.props.buscaPorNome}
            onChange = {this.props.onChangeBuscaPorNome}
            placeholder = "Nome do item"
            />
        </Filtro>

        <div>
           <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/374969100973805.5f1821314b451.gif" />
        </div>

    </GrupoDeFiltros>;
  }
}

export default Filtros;
