import React from 'react';
import styled from 'styled-components'

import Produto from './Produto/Produto'

const DivPrincipal = styled.div`
    grid-row: 2 / 3; 
    font-family: 'Yanone Kaffeesatz', sans-serif;
    letter-spacing: 2px;
`

const DivFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin: 20px;

    & > h1 {
        font-size: 1.8em;
    }
`

const TextUpperCase = styled.span`
    text-transform: uppercase;
`

const ContainerProdutos = styled(DivFlexColumn)`
    /* width: 80%; */
`

const FinalizarCompra = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonAction = styled.button`
    text-align: center
`

export default class Carrinho extends React.Component {
    render() {
        return (
            <DivPrincipal>
                <DivFlexColumn>
                    <h1>
                        <TextUpperCase>Carrinho</TextUpperCase>
                    </h1>
                    <ContainerProdutos>
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                    </ContainerProdutos>
                    <FinalizarCompra>
                        <p>Total: R$69,90</p>
                        <ButtonAction>Finalizar Compra</ButtonAction>
                    </FinalizarCompra>
                </DivFlexColumn>
            </DivPrincipal>
        )
    }
}