import React from 'react';
import styled from 'styled-components'
import { Filtro } from './Filtro';

import { ListaDeProdutos } from './ListaDeProdutos';

const DivPrincipal = styled.div`
    display: grid;
    grid-template: .2fr 2fr/ 1fr;
`

export default class SessaoProdutos extends React.Component {
    state = {
        filtroMinimo: 100,
        filtroMaximo: 100,
    }

    onChangeFiltroMaximo = (event) => {
        this.setState({filtroMaximo: event.target.value})
    }

    onChangeFiltroMinimo = (event) => {
        this.setState({filtroMinimo: event.target.value})
    }

    adicionarAoCarrinho = (id) => {
        const produto = this.props.produtos.find(produto => id === produto.id)

        if(produto) {
            const novoProduto = {
                ...produto
            }

            const novoCarrinho = [...this.props.carrinho, novoProduto ]
            
            // const novoCarrinho = this.state.carrinho.map(
            //   (produto) => {
            //     if (id === this.state.produtos.id) {
            //         produto.quantidade += 1
            //         return produto
            //     }
            //     return produto;
            //   }
            // )
            this.props.atualizarCarrinho(novoCarrinho)
        }   
    }

    render() {
        return (
            <DivPrincipal>
                <Filtro 
                    handleMinValor={this.onChangeFiltroMinimo}
                    handleMaxValor={this.onChangeFiltroMaximo}
                />
                <ListaDeProdutos 
                    produtos={this.props.produtos}
                    adicionarAoCarrinho={this.adicionarAoCarrinho}
                    filtroBusca={this.props.filtroBusca}    
                />
            </DivPrincipal>
        )
    }
}