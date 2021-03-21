import React from 'react';
import styled from 'styled-components'
// import { Filtro } from './Filtro';
import Filtro from "../SessaoProdutos/Filtro"

import { ListaDeProdutos } from './ListaDeProdutos';

const DivPrincipal = styled.div`
    display: grid;
    grid-template: .1fr 2fr/ 1fr;
`

export default class SessaoProdutos extends React.Component {
    state = {
        filtroMinimo: 0,
        filtroMaximo: 0,
    }

    onChangeFiltroMinimo = (event) => {
        this.setState({filtroMinimo: event.target.value})
    }

    onChangeFiltroMaximo = (event) => {
        this.setState({filtroMaximo: event.target.value})
    }

    adicionarAoCarrinho = (id) => {
        const produto = this.props.produtos.find(produto => id === produto.id)

        if(produto) {
            const novoProduto = {
                ...produto
            }

            const novoCarrinho = [...this.props.carrinho, novoProduto ]
            
            this.props.atualizarCarrinho(novoCarrinho)
        }   
    }

    render() {
        return (
            <DivPrincipal>
                <Filtro 
                    handleMinValor={this.onChangeFiltroMinimo}
                    handleMaxValor={this.onChangeFiltroMaximo}
                    filtroMinimo={this.state.filtroMinimo}  
                    filtroMaximo={this.state.filtroMaximo}  
                />
                <ListaDeProdutos 
                    produtos={this.props.produtos}
                    adicionarAoCarrinho={this.adicionarAoCarrinho}
                    filtroBusca={this.props.filtroBusca}
                    filtroMinimo={this.state.filtroMinimo}  
                    filtroMaximo={this.state.filtroMaximo}  
                />
            </DivPrincipal>
        )
    }
}