import styled from "styled-components";

export const GrupoDeFiltros = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 10px;

    h2 {
        margin:20px 0 0;
        font-size:40px;
        padding:8px;
    }

    p {
        margin:0;
        font-size:30px;        
    }

    input {
        font-size: 16px;
        margin:0px;
    }

    img {        
    width: 300px;
    height: 300px;
    object-fit: cover;    
    border-radius: 50%;
    padding: 8px;
    }

`

export const Filtro = styled.label`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
`