import React from 'react';
import { CardProduto } from './Components/Produtos/CardProduto';
import produtos from './Components/produtos.json';
import Carrinho from '././Components/Carrinho/Carrinho';
import Filtros from '././Components/Filtros/Filtros';
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
    produtos: produtos,
    valorMinimo: "",
    valorMaximo: "",
    buscaProduto: "",
    ordem: "",
    // carrinho: []
  }

  atualizaValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  atualizaValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  atualizaBuscaProduto = (event) => {
    this.setState({ buscaProduto: event.target.value })
  }

  atualizaOrdem = (event) => {
    this.setState({ order: event.target.value })
  }

  // adicionaItemCarrinho = (event) => {
  //   this.setState({carrinho: event.target.value})
  // }

  deletaItemCarrinho = (event) => {
    this.setState({carrinho: event.target.value})
  }

  render() {

    return (
      <MainContainer>

        <Filtros
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscaProduto={this.state.buscaProduto}
          ordem={this.state.ordem}
          atualizaValorMinimo={this.atualizaValorMinimo}
          atualizaValorMaximo={this.atualizaValorMaximo}
          atualizaBuscaProduto={this.atualizaBuscaProduto}
          atualizaOrdem={this.atualizaOrdem}
        />

        <LayoutMenu>
          {this.state.produtos.map(produto => {
            return <CardProduto key={produtos.id} produto={produto} />
          })
          }
        </LayoutMenu>
        <div>
          {this.state.produtos.filter(produto => {
            return produto.nome.toLowerCase().includes(this.state.buscaProduto.toLowerCase())
          })
          .filter(produto => {
            return this.state.valorMinimo === "" || produto.valor >= this.state.valorMinimo
          })
          .filter(produto => {
            return this.state.valorMaximo === "" || produto.valor >= this.state.valorMaximo
          })}
        </div>

        <Carrinho/>
      </MainContainer>
    );
  }
}
export default App;
