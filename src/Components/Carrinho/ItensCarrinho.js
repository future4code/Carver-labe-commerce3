import React from 'react';
import styled from 'styled-components';
import Carrinho from './Carrinho';

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
        <p>1x</p>
        <p>{this.props.carrinho}</p>
        <button onClick={() =>this.props.removeDoCarrinho(this.props.carrinho)}>X</button>
      </ItensContainer>
    );
  }
}
export default ItensCarrinho;