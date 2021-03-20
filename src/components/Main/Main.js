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
                imageUrl: '../../img/comiseta.jpg',
                quantidade: 0
            },

            {
                id: 2,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: '../../img/comiseta.jpg',
                quantidade: 0
            },

            {
                id: 3,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: '../../img/comiseta.jpg',
                quantidade: 0
            }
        ],

        produtosCarrinho: [
            {
                id: 1,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/697287/camiseta_espaco_sideral_ceu_colorido_7363_1_20191114114454.jpg',
                quantidade: 0,
            },

            {
                id: 2,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/697287/camiseta_espaco_sideral_ceu_colorido_7363_1_20191114114454.jpg',
                quantidade: 0
            },

            {
                id: 3,
                name: 'Camiseta Renan de Almeida',
                value: 69.90,
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/697287/camiseta_espaco_sideral_ceu_colorido_7363_1_20191114114454.jpg',
                quantidade: 0
            }
        ]
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
                        removerDoCarrinho={this.removerDoCarrinho}
                    />
                }
                {/* {!this.props.exibindoCarrinho && //CHAMAR PRODUTOS } */}
                {/* <Carrinho /> */}
            </DivPrincipal>
        )
    }
}