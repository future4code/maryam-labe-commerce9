import React from "react";
import { Cartao, TextoDoCartao } from "./estiloDoCartao";
import { FiShoppingCart } from "react-icons/fi";


class CartaoDosProdutos extends React.Component {
  render() {
    return (
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
          <h2>{this.props.nome}</h2>
          <h3>R$ {this.props.valor},00</h3>
          <button onClick={this.props.onClick}>Adicionar carrinho <FiShoppingCart /></button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}

export default CartaoDosProdutos;
