import React from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

const TituloCarrinho = styled.div`

`;

const NavCarrinho = styled.div`
    display:flex;
`;

const TotalCarrinho = styled.div`
    background-color: lavender
`

export default class Carrinho extends React.Component {
    render() {
        return (
            <CarrinhoContainer>
                <TituloCarrinho>
                    <h1>Carrinho</h1>
                </TituloCarrinho>

                <NavCarrinho>
                    <h2>1x</h2>
                    <h2>Produto:</h2>
                    <button>Remover Produto</button>
                </NavCarrinho>

                <TotalCarrinho>
                    <h2>Total: R$100,00</h2>
                </TotalCarrinho>
            </CarrinhoContainer>
        )
    }
}