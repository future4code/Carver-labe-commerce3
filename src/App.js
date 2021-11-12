import React from 'react';
import { CardProduto } from './Components/Produtos';
import styled from 'styled-components';

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
  state = {
    produtos: produtos
  }

  render() {


    return (
      <MainContainer>
        {/* <Filtros /> */}
        <LayoutMenu>
          {this.state.produtos.map(produto => {
            return <CardProduto key={produtos.id} produto={produto} />
          })}

        </LayoutMenu>
        {/* <Carrinho /> */}
      </MainContainer>
    );
  }
}
export default App;