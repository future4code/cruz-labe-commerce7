import React from 'react';
import styled from 'styled-components'

import {TextUpperCase, Title} from '../carrinho-styles-global'

const DivPrincipal = styled.div`
    display: grid;
    grid-template: 1fr / 3fr .8fr;
`

const DivInfo = styled.div`
    grid-column: 1 / 2;
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

const DivQuantidade = styled(DivInfo)`
    grid-column: 2 / 3;
    justify-content: space-between;
`

const ButtonActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
`

const ButtonAction = styled.button`
    background-color: #ff7f50;
    text-align: center;
    padding: 2px 10px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    flex: .2;
`

export default class InfoProduto extends React.Component {
    render() {
        return (
            <DivPrincipal>
                <DivInfo>
                    <DiscricaoProduto><TextUpperCase>CAMISETA RENAN DE ALMEIDA</TextUpperCase></DiscricaoProduto>
                    <PrecoProduto>R$:69,90</PrecoProduto>
                </DivInfo>
                <DivQuantidade>
                    <Title><TextUpperCase>Quantidade</TextUpperCase></Title>
                    <ButtonActionContainer>
                        <ButtonAction>-</ButtonAction>
                        <p>1</p>
                        <ButtonAction>+</ButtonAction>
                    </ButtonActionContainer>
                </DivQuantidade>
            </DivPrincipal>
        )
    }
}