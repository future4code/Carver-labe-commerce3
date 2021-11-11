import React from "react";
import styled from "styled-components";


const ProdContainer = styled.div`
  border: 1px solid gray;
  width: 200px;
  margin: 10px;
  padding: 10px;
  align-items: center;
`;

const ImgCard = styled.img`
  width: 100%;
  text-align: center;
`;

const listaDeProdutos = [
  {
    id: "1",
    imagem: "https://a-static.mlcdn.com.br/618x463/foguete-espacial-astronautas-com-luz-e-sons-fun/toys2you/6818493145/29a1946fd7e8aeaefbbb4694ce139fb8.jpg",
    nome: "Brinquedo Astronautas à lua",
    valor: 150,
  },
  {
    id: "2",
    imagem: "https://ae01.alicdn.com/kf/H9e5910a0530c4a0fa93a09f26d1c2ad37/Brinquedo-espacial-modelo-de-foguete-de-avia-o-brinquedos-educacionais-para-crian-as.jpg_q50.jpg",
    nome: "Brinquedo Dominando o Universo",
    valor: 200,
  },
  {
    id: "3",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_725385-MLB42254032573_062020-O.jpg",
    nome: "Brinquedo Piloto de Foguete",
    valor: 250,
  },
  {
    id: "4",
    imagem: "https://www.dhresource.com/0x0/f2/albu/g5/M01/95/21/rBVaI1mxS1uASzkSAAO7bX2n9ds616.jpg/factory-direct-sale-child-and-adult-space.jpg",
    nome: "Roupa Epacial (Vários tamanhos)",
    valor: 100,
  },
  {
    id: "5",
    imagem: "https://img.elo7.com.br/product/original/2E698D6/body-roupa-bebe-nasa-astronauta-espacial-espaco-agencia-body-manga-comprida.jpg",
    nome: "Roupa Mini trabalhador da nasa",
    valor: 350,
  },
  {
    id: "6",
    imagem: "https://www.ofertaviva.com.br/photo-1/crianca-traje-stormtrooper-estacao-espacial-astronauta-trajes-de-super-herois-impresso-jumpsuit-ferias-cosplay-roupas-para-menin.jpg",
    nome: "Fantasia Stormtrooper",
    valor: 220,
  }
]


class CardProduto extends React.Component {





  render() {
   
    return (
      <ProdContainer key={this.listaDeProdutos.id}>
        <ImgCard src={this.listaDeProdutos.imagem} />
        <b>Produto: {this.listaDeProdutos.nome} </b>
        <p>R$: {this.listaDeProdutos.valor},00</p>
        <button>Adicionar ao carrinho</button>
      </ProdContainer>
    );

  }

}


export default CardProduto;
