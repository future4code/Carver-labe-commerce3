import React from 'react';
import styled from 'styled-components'
import Carrinho from '././Componentes/Carrinho/Carrinho'
import Filtros from '././Componentes/Filtros/Filtros'
// import CardProduto from '././CardProduto'

const MainContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
height: 100vh;
`
class App extends React.Component {
  render() {
    return (

      <MainContainer>
        <Filtros/>
        <p>Produtos</p>
        <Carrinho/>
      </MainContainer>
    );
  }
}

export default App;
