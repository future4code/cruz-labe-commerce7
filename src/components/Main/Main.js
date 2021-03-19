import React from "react"
import styled from 'styled-components'

import Carrinho from '../Carrinho/Carrinho'


const DivPrincipal = styled.div`
    grid-row: 2 / 3;
`

export default class Main extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: '../../img/comiseta.jpg'
            },

            {
                id: 2,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: '../../img/comiseta.jpg'
            },

            {
                id: 3,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: '../../img/comiseta.jpg'
            }
        ],

        produtosCarrinho: []
    }

    removerDoCarrinho = (id) => {
        const produtosFiltrados = this.state.produtosCarrinho.filter(produto => {
            return produto.id !== id ? true : false
        })

        this.setState({produtosCarrinho: produtosFiltrados})
    }

    render() {
        return (
            <DivPrincipal>
                {this.props.exibindoCarrinho &&
                    <Carrinho 
                        produtos={this.state.produtosCarrinho}
                        remover={this.props.removerDoCarrinho}
                    />
                }
                {/* {!this.props.exibindoCarrinho && //CHAMAR PRODUTOS } */}
                <Carrinho />
            </DivPrincipal>
        )
    }
}