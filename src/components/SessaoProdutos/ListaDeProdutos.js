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
`

export class ListaDeProdutos extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  mostraFiltrosOrdenados = () => {
    if(this.props.filtroMinimo > 0 || this.props.filtroMaximo > 0) {
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
    .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
    return <DivPrincipal>
      <CaixaDeProdutos>
          <p>Quantidade de produtos: {filtrosOrdenados.length}</p>
          <label>
            Ordenação:
          <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={'CRESCENTE'}>Crescente</option>
              <option value={'DECRESCENTE'}>Decrescente</option>
            </select>
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

