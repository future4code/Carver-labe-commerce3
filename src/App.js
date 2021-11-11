import React from 'react';
import {CardProduto} from './Components/Produtos/CardProduto';
import produtos from './Components/produtos.json'
import styled from 'styled-components';

const LayoutMenu = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
align-items: baseline;
justify-items: center;
`;

class App extends React.Component {
  state = {
    produtos: produtos
  }

  render() {
    

    return (
      <LayoutMenu>
          {this.state.produtos.map(produto => {
            return <CardProduto key={produtos.id} produto={produto} />
          })}
        
      </LayoutMenu>
    );
  }
}
export default App;
