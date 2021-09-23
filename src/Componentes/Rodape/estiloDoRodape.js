import styled from "styled-components"

export const FooterContainer = styled.div`
 
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    /* gap: 16px; */
    background: rgb(216,174,211);
    background: linear-gradient(214deg, rgba(216,174,211,1) 0%, rgba(235,217,221,1) 100%, rgba(145,130,196,1) 100%);

    img {        
    width: 300px;
    height: 300px;
    object-fit: cover;    
    border-radius: 50%;
    padding: 8px;
    }
`

export const Footer= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    

    h1 {
        margin:0;
        font-size:40px;
        padding:8px;
    }

    h2 {
        margin:20px 0 0;
        font-size:40px;
        padding:8px;
    }

    p {
        margin:0;
        font-size:30px;
        padding:8px;
    }

    a {
        margin:0;
        font-size:20px;
        padding:8px; 
        text-decoration: none;
    }

`

export const RedesSociais = styled.div `

    a {
        font-size: 34px;
        padding: 8px;
    }

    a:hover {       
        background-position: right center; 
        color:  #3b5998;
        text-decoration: none;
    }

`

export const Atendimento = styled.div`
    

`
