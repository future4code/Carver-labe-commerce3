import React from 'react';
import styled from 'styled-components'
// import CardProduto from '././CardProduto'


// Aqui estilizei os boxes onde ficam os inputs de filtro
const OpcoesFiltro = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 80vh;
width: 250px;
padding: 5px;
margin: 5px;
input,label,select{
  width: 180px;
  margin-top: 3px;
}
`

class Filtros extends React.Component {

  state = {

    valorMinimo: "",
    valorMaximo: "",
    campoDePreenchimento: "",
    order: ""

  }

  atualizaValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  atualizaValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  atualizaCampo = (event) => {
    this.setState({ campoDePreenchimento: event.target.value })
  }

  atualizaOrdem = (event) => {
    this.setState({order: event.target.value})
  }

  render() {

    return (
      <OpcoesFiltro>
        <h3>Filtros</h3>
        <label>Valor Mínimo:</label>
        {/* Aqui coloquei os tipos e agora falta chamar as funcoes que filtram baseado nos valores */}
        <input
          type="number"
          value={this.state.valorMinimo}
          onChange={this.atualizaValorMinimo}
        />
        <label >Valor Máximo:</label>
        <input
          type="number"
          value={this.state.valorMaximo}
          onChange={this.atualizaValorMaximo} />
        <label>Busca por nome:</label>
        <input
          type="text"
          value={this.state.campoDePreenchimento}
          onChange={this.atualizaCampo} />
        
          <label>Ordenação:</label>
          <select
            name= "order"
            value={this.state.order}
            onChange={this.atualizaOrdem}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        
      </OpcoesFiltro>



    );
  }
}

export default Filtros;
