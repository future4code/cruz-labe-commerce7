import React from 'react';
import styled from 'styled-components'

import camiseta from '../../../img/comiseta.jpg'
import deleteIcon from '../../../icons/delete.png'
import InfoProduto from '../InfoProduto/InfoProduto';

const DivPrincipal = styled.div`
    display: grid;
    grid-template: 1fr / .6fr 2fr 1fr 1fr;
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
                <ImagemProduto src={camiseta} />
                <InfoProduto />
            </DivPrincipal>
        )
    }
}