import React from 'react'
import styled from 'styled-components';

const ContainerDeFiltros = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);
  padding: 10px;
  color: #ff7f50;
  margin-top: 2%;

  display: flex;
  align-items: center;

  & > h3 {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.4em;
  }

  & > span {
    font-weight: bold;
    font-size: 1.6em;
  }
`;

const Input = styled.input`
  padding: 8px;
  margin: 0 4px 0 2%;
  font-size: 1em;
  border: none;
  width: 120px;
  outline-color: #ff7f50;
  letter-spacing: 2px;
`

export class Filtro extends React.Component {
  render() {
    return <ContainerDeFiltros>
      <h3>Filtro:</h3>

      <Input 
        type="number"
        value={this.props.filtroMinimo}
        onChange={this.props.handleMinValor}
        placeholder="Valor mínimo"
      />
      <span>-</span>
      <Input 
        type="number"
        value={this.props.filtroMaximo}
        onChange={this.props.handleMaxValor}
        placeholder="Valor máximo"
      />
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