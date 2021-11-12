import React from 'react';
import styled from 'styled-components';

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
        <p>oie</p>
        {/* Aqui coloquei uma simulação da sintaxe que chama a quantidade de produtos e o nome deles*/}
        {/* <p>{this.props.produto.nome}</p> */}
        {/* <p>{this.props.CardProduto.nome}</p> */}
        {/* Aqui precisa descobrir a sintaxe para remoção de item (rever aulas sobre exclusão) */}
        {/* <button onClick={() =>{this.state.removeDoCarrinho(produto.id)}}>Remover</button> */}
      </ItensContainer>
    );
  }
}
export default ItensCarrinho;