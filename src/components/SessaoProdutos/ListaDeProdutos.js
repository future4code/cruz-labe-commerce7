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

const GridDeProdutos = styled.div`

`

export class ListaDeProdutos extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  // mostraFiltrosOrdenados = () => {
  //   return this.props.produtos
  //     .filter((produto) => this.props.filtroMaximo ? produto.value < this.props.filtroMaximo : true)
  //     .filter((produto) => this.props.filtroMinimo ? produto.value > this.props.filtroMinimo : true)
  //     //   .filter((produto) => this.props.filtroNome ? product.name.includes(this.props.filtroNome) : true)
  //     .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
  // }

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value })
  }

  render() {
    // const mostraFiltrosOrdenados = this.mostraFiltrosOrdenados()
    const mostraFiltrosOrdenados = this.props.produtos.filter((produto) => {
      return produto.name.toUpperCase().includes(this.props.filtroBusca)
    })

    return <DivPrincipal>
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
      <ContainerDeProdutos>
          {mostraFiltrosOrdenados.map((produto) => {
          return <CardProduto
            produto={produto}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          />
        })} 
          {/* <CardProduto produto={this.props.produtos[0]} /> */}
        
      </ContainerDeProdutos>
    </DivPrincipal>
  }
}
