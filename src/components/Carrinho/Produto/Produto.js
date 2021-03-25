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
    render() {
        return (
            <DivPrincipal>
                <ImagemProduto 
                    src={this.props.produto.imageUrl} 
                />

                <InfoProduto
                    produto={this.props.produto}
                />

                <RemoveProduto 
                    removerDoCarrinho={this.props.removerDoCarrinho} 
                    id={this.props.produto.id}
                />
            </DivPrincipal>
        )
    }
}