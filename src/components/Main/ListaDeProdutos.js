import React from "react"
import styled from 'styled-components'
import { CardProdutos } from './CardProdutos'
import Carrinho from '../Carrinho/Carrinho'

const ContainerDeProdutos = styled.div`

`;

const CaixaDeProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const GridDeProdutos = styled.div`

`

export class ListaDeProdutos extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  mostraFiltrosOrdenados = () => {
    return this.props.produtos
      .filter((produto) => this.props.filtroMaximo ? produto.value < this.props.filtroMaximo : true)
      .filter((produto) => this.props.filtroMinimo ? produto.value > this.props.filtroMinimo : true)
    //   .filter((produto) => this.props.filtroNome ? product.name.includes(this.props.filtroNome) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const mostraFiltrosOrdenados = this.mostraFiltrosOrdenados()
    return <ContainerDeProdutos>
      <CaixaDeProdutos>
        <p>Quantidade de produtos: {mostraFiltrosOrdenados.length}</p>
        <label>
          Ordenação:
          <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
      </CaixaDeProdutos>
      <GridDeProdutos>
        {mostraFiltrosOrdenados.map((produto) => {
          return <ProductCard
            produto={produto}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          />
        })}
      </GridDeProdutos>
    </ContainerDeProdutos>
  }
}
