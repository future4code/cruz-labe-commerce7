import React from "react"
import styled from 'styled-components'
import { CardProduto } from './CardProduto'

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
`

const ContainerDeProdutos = styled.div`
  display: grid;
  grid-template: 1fr 1fr/ repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;
  padding: 10px;
`;

const CaixaDeProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  letter-spacing: 1.4px;
  margin-top: 1%;
  font-size: 1.2em;

  & > select {
    text-transform: uppercase;
    font-size: 1.4em;
  }
`
const Select = styled.select`
  display: flex;
  text-transform: uppercase;
  font-size: .8em;
  border: none;
  background-color: white;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  color: #ff7f50;
  font-weight: 700;
`


const Option = styled.option`
  display: flex;
`

const TextUpperCase = styled.span`
  text-transform: uppercase;
`

export class ListaDeProdutos extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  mostraFiltrosOrdenados = () => {
    if(this.props.filtroMinimo > 0 || this.props.filtroMaximo > 0 ) {
    return this.props.produtos
      .filter((produto) => this.props.filtroMaximo ? produto.value <= this.props.filtroMaximo : false)
      .filter((produto) => this.props.filtroMinimo ? produto.value >= this.props.filtroMinimo : false)
    } else {
      return this.props.produtos
    }
  }

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value })
  }

  render() {
    const filtrosOrdenados = this.mostraFiltrosOrdenados()
    .filter((produto) => {
      return produto.name.toUpperCase().includes(this.props.filtroBusca)
    })
    .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
    return <DivPrincipal>
      <CaixaDeProdutos>
        <div>
          {this.props.filtroBusca !== '' && 
            <p>
              <TextUpperCase>Produtos encontrado: {filtrosOrdenados.length}</TextUpperCase>
            </p>
          }
        </div>
          <label>
            <TextUpperCase>Ordenação:</TextUpperCase>
          <Select value={this.state.sort} onChange={this.onChangeSort}>
              <Option value={'CRESCENTE'}>Crescente</Option>
              <Option value={'DECRESCENTE'}>Decrescente</Option>
            </Select>
          </label>
        </CaixaDeProdutos>
      <ContainerDeProdutos>
          {filtrosOrdenados.map((produto) => {
          return <CardProduto
            produto={produto}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          />
        })}        
      </ContainerDeProdutos>
    </DivPrincipal>
  }
}

