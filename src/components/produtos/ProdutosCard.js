import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    background-color: lightcyan;

    img {
        width: 180px;
        height: 180px;
    }

    h2 {
        font-size: 16px;        
    }

    buttton {
        cursor: pointer;
        border-radius: 5px;
    }

`;

const ProdutoCard = (props) => {
    return (
        <Card>
            {/* <img> {props.job.img} </img> */}
            <h2>{props.job.description}</h2>
            <h2>R${props.job.price},00</h2>
            <button>Add Carrinho</button>
        </Card>
    )
}

export default ProdutoCard;