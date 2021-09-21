import styled from "styled-components";

export const Cartao = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width:100%;    
  }
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    margin: 0 16px;
    padding: 10px;
  }

  h3 {
    margin: 0 16px;
    padding: 10px;
  }

  
  button {background-image: linear-gradient(to right, #ee9ca7 0%, #ffdde1  51%, #ee9ca7  100%)}
         
  button {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          button:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         


`;