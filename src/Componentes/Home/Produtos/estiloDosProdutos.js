import styled from "styled-components";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 0;

  label {
        font-size:25px;       
    }

    select {
        font-size:20px;       
    }

    p {
        margin:0;
        font-size:25px;
        /* padding:8px; */
    }

`;

export const GrupoDeCartoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
  margin: 10px 0;
`;
