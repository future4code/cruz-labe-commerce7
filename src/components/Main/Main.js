import React from "react"
import {Filtros} from "./Filtros"
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
                name: 'Camiseta Astronauta',
                value: 69.90,
                imageUrl: 'https://ae01.alicdn.com/kf/He7a4f30c865043fd8fdeec3ed1302dd8A.jpg_q50.jpg',
                quantidade: 1
            },

            {
                id: 2,
                name: 'Camiseta Futuro Astronauta',
                value: 69.90,
                imageUrl: 'https://s2.thcdn.com/productimg/1600/1600/11922618-5224619363853636.jpg',
                quantidade: 1
            },

            {
                id: 3,
                name: 'Camiseta Lua e Astronauta',
                value: 69.90,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51AZtyHT-4L._AC_UL1000_.jpg',
                quantidade: 1
            }
        ],

        produtosCarrinho: []
    }


    state = {
        filtroMinimo: 100,
        filtroMaximo: 100,
        filtroNome: 'Produto'
    }

    onChangeFiltroMaximo = (event) => {
        this.setState({filtroMaximo: event.target.value})
    }

    onChangeFiltroMinimo = (event) => {
        this.setState({filtroMinimo: event.target.value})
    }

    // onChangeFiltroNome = (event) => {
    //     this.setState({filtroNome: event.target.value})
    // }



    adicionarAoCarrinho = (id) => {
        const produto = this.state.produtos.find(produto => id === produto.id)

        if(produto) {
            const novoProduto = {
                ...produto
            }

            const novoProdutosCarrinho = [...this.state.produtosCarrinho, novoProduto ]
            
            // const novoProdutosCarrinho = this.state.produtosCarrinho.map(
            //   (produto) => {
            //     if (id === this.state.produtos.id) {
            //         produto.quantidade += 1
            //         return produto
            //     }
            //     return produto;
            //   }
            // )
            

            this.setState({produtosCarrinho: novoProdutosCarrinho})
        }
            // const produtoAdicionado = produtos.find(produto => id === produto.id)
            // const novoProdutosCarrinho = [...this.state.produtosCarrinho, {...produtoAdicionado, quantidade: 1}]
            // this.setState({produtosCarrinho: novoProdutosCarrinho})
        
    }


    removerDoCarrinho = (id) => {
        const produtosFiltrados = this.state.produtosCarrinho.filter(produto => {
            return produto.id !== id ? true : false
        })

        this.setState({produtosCarrinho: produtosFiltrados})
    }

    render() {
        console.log(this.props.filtroBusca)
        return (
            <DivPrincipal>
                <Filtros
                    // filtroNome={this.state.filtroNome}
                    filtroMaximo={this.state.filtroMaximo}
                    filtroMinimo={this.state.filtroMinimo}
                    // onChangeFiltroNome={this.onChangeFiltroNome}
                    onChangeFiltroMaximo={this.onChangeFiltroMaximo}
                    onChangeFiltroMinimo={this.onChangeFiltroMinimo}
                />
                {/* <Produtos
                    produtos={produtos}
                    // filtroNome={this.state.filtroNome}
                    filtroMaximo={this.state.filtroMaximo}
                    filtroMinimo={this.state.filtroMinimo}
                    adicionarAoCarrinho={this.adicionarAoCarrinho}
                /> */}
                {this.props.exibindoCarrinho &&
                    <Carrinho 
                        produtos={this.state.produtosCarrinho}
                        remover={this.props.removerDoCarrinho}
                    />
                }
                {/* {!this.props.exibindoCarrinho && //CHAMAR PRODUTOS } */}
            </DivPrincipal>
        )
    }
}