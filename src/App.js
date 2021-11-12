import React from 'react';
import Filtros from './Components/Filtros';
import Carrinho from './Components/Carrinho/Carrinho';
import styled from 'styled-components';

const MainContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
height: 100vh;
`
const ProdContainer = styled.div`
  border: 1px solid gray;
  width: 200px;
  margin: 10px;
  padding: 10px;
  align-items: center;
`;

class App extends React.Component {

  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaProduto: "",
    ordem: "",
    // itensNoCarrinho: []
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

  render() {

    const produtos = listaDeProdutos.map((produto)=> {
      return <ProdContainer>
      <img src={produto.imagem}/>
      <div>
        <p>{produto.nome}</p>
        <p>R${produto.valor},00</p>
        <button>
          Adicionar ao carrinho
        </button>
      </div>
    </ProdContainer>
    })
    
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
        
      <ContainerCentro>
      {produtos}
      </ContainerCentro>

        <Carrinho />
      </MainContainer>
    );
  }
}

export default App;