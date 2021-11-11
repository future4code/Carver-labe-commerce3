import React from 'react';
import CardProduto  from './Components/CardProduto';
import styled from 'styled-components';
import Carrinho from './Components/Carrinho';
import Filtros from './Components/Filtros';


const LayoutMenu = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
align-items: baseline;
justify-items: center;
`;

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
        <Filtros />
        <LayoutMenu>
          <CardProduto/>
        </LayoutMenu>
        <Carrinho />
      </MainContainer>
    );
  }
}
export default App;
