import React from 'react';
import styled from 'styled-components'

import InfoProduto from '../InfoProduto/InfoProduto';
import RemoveProduto from '../RemoveProduto/RemoveProduto';

const DivPrincipal = styled.div`
    display: grid;
    grid-template: 1fr / .4fr 2fr .6fr;
    gap: 10px;
    margin: 1.4% 0;
    
`

const ImagemProduto = styled.img`
    grid-row: 1 / -1;
    grid-column: 1 / 2;
    width: 100px;
    justify-self: center;
`

export default class Produto extends React.Component {
    state = {
        produto: {}
    }

    componentDidMount = () => {
        this.props.produto.quantidade = 1;
        this.setState({produto: this.props.produto})
    }

    render() {
        return (
            <DivPrincipal>
                <ImagemProduto 
                    src={this.state.produto.imageUrl} 
                />

                <InfoProduto
                    produto={this.state.produto}
                />

                <RemoveProduto 
                    removerDoCarrinho={this.props.removerDoCarrinho} 
                    id={this.state.produto.id}
                />
            </DivPrincipal>
        )
    }
}