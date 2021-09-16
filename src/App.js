import React from 'react';

import Filtros from './components/filtros/Filtros';
import Produtos from './components/produtos/Produtos';
import Carrinho from './components/carrinho/Carrinho';
import Cabecalho from './components/cabecalho/Cabecalho';

import styled from 'styled-components';
//Style
const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color: lightgray;
  min-height: 100vh;
`;

const Conteudo = styled.div`
  display:flex;
  justify-content: space-between;
  background-color: lightslategray;
`

function App() {
  return (
    <Container>
      <Cabecalho />
      <Conteudo>
        <Filtros />
        <Produtos />
        <Carrinho />
      </Conteudo>
    </Container>
  );
}

export default App;
