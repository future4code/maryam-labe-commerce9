import styled from "styled-components";

export const CabecalhoStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background: rgb(216,174,211);
    background: linear-gradient(214deg, rgba(216,174,211,1) 0%, rgba(235,217,221,1) 29%, rgba(145,130,196,1) 100%);
    nav {
    font-size: 40px;    
    }

    a {
        padding: 8px;
        text-decoration: none;
        color: #fff;
        :hover {text-decoration: underline;}
    }
`;

export const CabecalhoTitulo = styled.div`
    display: flex;
    align-items: center;

    img {        
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    padding: 8px;
    }

    h1 {         
    font-size: 60px;
    color: #fff;
    }
`;
