import styled from "styled-components";

export const ConjuntoDeItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 10px 0;
  }
  
  button {background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)}
         button {
            margin: 8px;
            padding: 8px 20px;
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
