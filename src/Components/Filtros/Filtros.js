import React from 'react';
import styled from 'styled-components'


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


  render() {

    return (
      <OpcoesFiltro>
        <h3>Filtros</h3>
        <label>Valor Mínimo:</label>
        <input
          type="number"
          value={this.props.valorMinimo}
          onChange={this.props.atualizaValorMinimo}
        />
        <label >Valor Máximo:</label>
        <input
          type="number"
          value={this.props.valorMaximo}
          onChange={this.props.atualizaValorMaximo} />
        <label>Busca por nome:</label>
        <input
          type="text"
          value={this.props.buscaProduto}
          onChange={this.props.atualizaBuscaProduto} />
        
          <label>Ordenação:</label>
          <select
            name= "order"
            value={this.props.ordem}
            onChange={this.props.atualizaOrdem}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
      </OpcoesFiltro>

    );
  }
}

export default Filtros;