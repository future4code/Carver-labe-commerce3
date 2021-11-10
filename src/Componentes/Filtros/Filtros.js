import React from 'react';
import styled from 'styled-components'


const OpcoesFiltro = styled.div`
border: 1px solid black;
height: 80vh;
width: 250px;
padding: 5px;
`

class Filtros extends React.Component {

  render() {

    return (
      <OpcoesFiltro>
        <h3>Filtros</h3>
        <p>Valor Mínimo:</p>
        <input></input>
        <p>Valor Máximo:</p>
        <input></input>
        <p>Busca por nome:</p>
        <input></input>
      </OpcoesFiltro>
    );
  }
}

export default Filtros;