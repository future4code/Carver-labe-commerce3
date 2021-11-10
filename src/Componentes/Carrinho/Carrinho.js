import React from 'react';
import styled from 'styled-components'
import ItensCarrinho from './ItensCarrinho'


const TotalCarrinho = styled.div`
border: 1px solid black;
height: 80vh;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 250px;
padding: 5px;
`
class Carrinho extends React.Component {

  render() {

    return (
      <TotalCarrinho>
        <h3>Carrinho:</h3>
        <ItensCarrinho/>
        <p>Valor Total:</p>
      </TotalCarrinho>
    );
  }
}

export default Carrinho;