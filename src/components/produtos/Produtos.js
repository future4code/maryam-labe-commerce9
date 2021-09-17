import React from "react";
import styled from "styled-components";

import ProdutosCard from "./ProdutosCard";

const ProdutosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: lightblue;
`;

const NavProdutosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: lightcoral;    
`;

const Quantidade = styled.div``;

const FiltroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;    
    justify-content: space-evenly;
`;


export default class Produtos extends React.Component {
    render() {
        return (
            <ProdutosContainer>

                <NavProdutosContainer>
                    <Quantidade>
                        <h2>Quantidade de Produtos: 0</h2>
                    </Quantidade>
                    <FiltroContainer>
                        <h2>Ordenação</h2>
                        <select value="filtro">
                            <option value="crescente">Mais caros</option>
                            <option value="descrescente">Mais baratos</option>
                        </select>
                    </FiltroContainer>
                </NavProdutosContainer>

                <CardsContainer>

                    <ProdutosCard />  

                </CardsContainer>

            </ProdutosContainer>
        )
    }
}