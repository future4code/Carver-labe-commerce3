import React from 'react';
import styled from 'styled-components'
import ItensCarrinho from './ItensCarrinho'

// import CardProduto from '././CardProduto'


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
  
  // Aqui usei a sintaxe for para calcular o preco x quantidade e retornar um total simulando que esses foram os termos usados no arquivo Produtos
  // pegarValorTotal = () => {
  //   let valorTotal = 0

  //   for(let produto of this.props.cardProdutos) {
  //     valorTotal += produto.preco * produto.quantidade
  //   }

  //   return valorTotal
  // }


  render() {
    const carrinho = this.props.itensCarrinho.map((produto)=>{
      return (
        <ItensCarrinho 
          carrinho={produto.nome}
        />
      )
    })
    console.log(this.props)
    return (
      <TotalCarrinho>
        <h3>Carrinho:</h3>
        {carrinho}
        {/* Aqui chamei a funcao do for para aparcer o total na frente da frase */}
        {/* <p>Valor Total: R${this.pegarValorTotal()},00</p> */}
      </TotalCarrinho>
    );
  }
}

export default Carrinho;