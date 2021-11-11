import React from 'react';
import styled from 'styled-components'
// import CardProduto from '././CardProduto'

// Aqui estilizei o box onde ficam as quantidades dos itens e o botão para que apareçam em linha
const ItensContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 250px;
p {
  margin: 0;
}
`

class ItensCarrinho extends React.Component {


  render() {

    return (
      <ItensContainer>
        {/* Aqui coloquei uma simulação da sintaxe que chama a quantidade de produtos e o nome deles*/}
        {/* <p>{this.props.cardProduto.quantidade}x</p> 
        <p>{this.props.cardProduto.nome}</p> */}
        {/* Aqui precisa descobrir a sintaxe para remoção de item (rever aulas sobre exclusão) */}
        <button>Remover</button>
      </ItensContainer>
    );
  }
}
export default ItensCarrinho;