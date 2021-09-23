import React from "react";
import { ConjuntoDeItens } from "./estiloDosItens";
import { FiTrash2 } from "react-icons/fi";

class Itens extends React.Component {
  render() {
    return (
      <ConjuntoDeItens>
        <p>{this.props.quantidade}x</p>
        <p>{this.props.nome}</p>
        <button onClick={this.props.onClick}>Remover <FiTrash2 /></button>
      </ConjuntoDeItens>
    );
  }
}

export default Itens;
