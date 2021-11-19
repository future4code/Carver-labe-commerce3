import React from 'react';
// import CardProduto from './Components/Produtos/CardProduto';
import Carrinho from './Components/Carrinho/Carrinho';
import Filtros from './Components/Filtros';
import styled from 'styled-components';

const ContainerCentro = styled.div`
display: grid;
grid-template-columns: repeat(3, 200px);
/* grid-template-rows: repeat(2, 200px); */
gap: 8px;
`

const ProdContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
padding: 0 auto;
width: 200px;
height: 350px;
    img{
        width: 100%,
    }

`

const MainContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
height: 100vh;
`

const DescricaoProduto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`



const listaDeProdutos = [
    {
        id: 1,
        imagem: "https://ae01.alicdn.com/kf/H27b3de58f8334ffd90431c4fdee576d4j/Quebra-cabe-a-de-brinquedo-otico-espa-o-montessori-esta-o-espacial-s-rie-de-avia.jpg_Q90.jpg_.webp",
        nome: "Brinquedo Astronautas à lua",
        valor: 150,
    },
    {
        id: 2,
        imagem: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1878877098",
        nome: "Brinquedo Astronauta lego",
        valor: 200,
    },
    {
        id: 3,
        imagem: "https://images-americanas.b2w.io/produtos/3240378301/imagens/brinquedos-de-banho-de-bebe-elovien-brinquedos-de-banheira-de-forma-de-foguete-espacial-para-criancas-brinquedos-de-agua-spray-c-fonte-giratoria-brinquedos-de-chuveiro-de-banheiro-para-bebes-de-18-meses-1-2-3-4-5-meninos-criancas-meninas/3240378301_1_large.jpg",
        nome: "Brinquedo Nave na hora do banho",
        valor: 150,
    },
    {
        id: 4,
        imagem: "https://www.ofertaviva.com.br/photo-2/brinquedo-espacial-para-criancas-blocos-de-construcao-de-blocos-de-construcao-de-nave-espacial-para-brincadeiras-colecionaveis.jpg",
        nome: "Brinquedo Nave Muito Louca",
        valor: 100,
    },
    {
        id: 5,
        imagem: "https://cf.shopee.com.br/file/cb1a9ffb2d32263dd00d94d1d1a1a4c6",
        nome: "Brinquedo Base espacial Lego",
        valor: 350,
    },
    {
        id: 6,
        imagem: "https://img.bestdealplus.com/ae04/kf/H3031fff0119c4f298d753681fc375e49E.jpg",
        nome: "Fantasia Astronauta (vários tamanhos)",
        valor: 220,
    }
]
class App extends React.Component {
    state = {
        valorMinimo: "",
        valorMaximo: "",
        buscaProduto: "",
        ordem: "",
        itensNoCarrinho: [],
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
        this.setState({ ordem: event.target.value })
    }

    addAoCarrinho = (id) => {
        const produtoNoCarrinho = listaDeProdutos.filter((produto) => {
            return produto.id === id
        })

        const novoCarrinho = [...this.state.itensNoCarrinho, produtoNoCarrinho[0]]


        this.setState({ itensNoCarrinho: novoCarrinho })
        console.log("carrinho", this.state.itensNoCarrinho)
    }

    removeDoCarrinho = (id) => {
        const produtosRemovidos = [...this.state.itensNoCarrinho];

        const itemRemovido = produtosRemovidos.filter((produto) => {
            return produto.id !== id;
        });

        this.setState({ itensNoCarrinho: itemRemovido })
        console.log("removeu", this.state.itensNoCarrinho)
    };




    render() {

        const produtos = listaDeProdutos
            .filter(produto => {
                return produto.nome.toLowerCase().includes(this.state.buscaProduto.toLowerCase())
            })
            .filter(produto => {
                return this.state.valorMinimo === "" || produto.valor >= this.state.valorMinimo
            })
            .filter(produto => {
                return this.state.valorMaximo === "" || produto.valor <= this.state.valorMaximo
            })
            .sort((a, b) => {
                return this.state.ordem * a.valor - b.valor
            })
            .map((produto) => {
                return <ProdContainer>
                    <img src={produto.imagem} />
                    <DescricaoProduto>
                        <p>{produto.nome}</p>
                        <p>R${produto.valor},00</p>
                        <button onClick={() => this.addAoCarrinho(produto.id)}>
                            Adicionar ao carrinho
                        </button>
                    </DescricaoProduto>
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

                <Carrinho
                    itensCarrinho={this.state.itensNoCarrinho}
                    itensRemovido={this.removeDoCarrinho}
                />

            </MainContainer>
        );
    }

}

export default App;