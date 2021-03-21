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
        filtroNome: 'Produto'
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
            // const produtoAdicionado = produtos.find(produto => id === produto.id)
            // const novoCarrinho = [...this.state.carrinho, {...produtoAdicionado, quantidade: 1}]
            // this.setState({carrinho: novoCarrinho})
        
    }

    render() {
        return (
            <DivPrincipal>
                <Filtro />
                <ListaDeProdutos 
                    produtos={this.props.produtos}
                    adicionarAoCarrinho={this.adicionarAoCarrinho}
                    filtroBusca={this.props.filtroBusca}    
                />
            </DivPrincipal>
        )
    }
}