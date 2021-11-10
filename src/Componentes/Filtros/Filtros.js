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
input{
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
        {/* Aqui coloquei os tipos e agora falta chamar as funcoes que filtram baseado nos valores */}
        <input
          type="number"
          value=""
          onChange=""
        />
        <label >Valor Máximo:</label>
        <input
          type="number"
          value=""
          onChange="" />
        <label>Busca por nome:</label>
        <input
          type="text"
          value=""
          onChange="" />
      </OpcoesFiltro>
    );
  }
}

export default Filtros;