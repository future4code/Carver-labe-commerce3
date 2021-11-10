import React from 'react';
import styled from 'styled-components'


const ItensContainer = styled.div`
`

class ItensCarrinho extends React.Component {

  state = {
    itens: [
      {
      Quantidade: '',
      Produto: '',
      Remover: ''
      }
    ],

    quantidadeValue: '',
  }

  render() {

    return (
      <ItensContainer>
        
      </ItensContainer>
    );
  }
}
export default ItensCarrinho;