import React from 'react'
import styled from 'styled-components';

const ContainerDeFiltros = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ContainerDoInput = styled.label`
  
`

export default class Filtro extends React.Component {
  render() {
    return <ContainerDeFiltros>
      {/* <h3>Filtros</h3> */}
        <ContainerDoInput>
          Valor mínimo:
          <input
            type="number" 
            min="0"
            value={this.props.filtroMinimo}
            onChange={this.props.handleMinValor}
          />
        </ContainerDoInput>
        <ContainerDoInput>
          Valor máximo:
          <input
            type="number"
            min="0"
            value={this.props.filtroMaximo}
            onChange={this.props.handleMaxValor}
          />
        </ContainerDoInput>
    </ContainerDeFiltros>
  }
}