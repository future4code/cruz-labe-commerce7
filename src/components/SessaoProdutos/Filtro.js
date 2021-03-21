import React from 'react'
import styled from 'styled-components';

const ContainerDeFiltros = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ContainerDoInput = styled.label`

`

export class Filtro extends React.Component {
  render() {
    return <ContainerDeFiltros>
      <h3>Filtros</h3>
        <ContainerDoInput>
          Valor mínimo:
          <input
            type="number"
            value={this.props.filtroMinimo}
            onChange={this.props.onChangeFiltroMinimo}
          />
        </ContainerDoInput>
        <ContainerDoInput>
          Valor máximo:
          <input
            type="number"
            value={this.props.filtroMaximo}
            onChange={this.props.onChangeFiltroMaximo}
          />
        </ContainerDoInput>
        {/* <ContainerDoInput>
          Busca por nome:
          <input
            type="text"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
          />
        </ContainerDoInput> */}
    </ContainerDeFiltros>
  }
}