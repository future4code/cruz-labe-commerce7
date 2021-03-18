import React from 'react';
import styled from 'styled-components'

import {TextUpperCase} from '../carrinho-styles-global'

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const DiscricaoProduto = styled.p`
    font-size: 1.6em;
    margin: 0;
`

const PrecoProduto = styled.p`
    letter-spacing: 6px;
    margin-top: 10%;
    margin: 2% 0;
    color: #ff7f50;
`

export default class InfoProduto extends React.Component {
    render() {
        return (
            <DivInfo>
                <DiscricaoProduto><TextUpperCase>CAMISETA RENAN DE ALMEIDA</TextUpperCase></DiscricaoProduto>
                <PrecoProduto>R$:69,90</PrecoProduto>
            </DivInfo>
        )
    }
}