import React from 'react';
import styled from 'styled-components'

import Produto from './Produto/Produto'

const DivPrincipal = styled.div`
    grid-row: 2 / 3; 
    font-family: 'Yanone Kaffeesatz', sans-serif;
    letter-spacing: 2px;
    margin-top: 4%;
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
`

const FinalizarCompra = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, .38);
    padding: 10px 0;

    & > p {
        font-size: 1.2em;
    }
`

const ButtonAction = styled.button`
    text-align: center;
    width: 20%;
    font-weight: bold;
`

const PrecoTotal = styled.span`
    color: #ff7f50;
    font-weight: 500;
`

export default class Carrinho extends React.Component {
    render() {
        const produtos = this.props.produtos.map((produto) => {
            return <Produto 
                        key={produto.id.toString()} 
                        produto={produto}
                        removerDoCarrinho={this.props.removerDoCarrinho}
                    />
        })

        return (
            <DivPrincipal>
                <DivFlexColumn>
                    <h1>
                        <TextUpperCase>Carrinho</TextUpperCase>
                    </h1>
                    <ContainerProdutos>
                        {produtos}
                    </ContainerProdutos>
                    <FinalizarCompra>
                        <p>Total: <PrecoTotal>R$69,90</PrecoTotal></p>
                        <ButtonAction><TextUpperCase>Finalizar Compra</TextUpperCase></ButtonAction>
                    </FinalizarCompra>
                </DivFlexColumn>
            </DivPrincipal>
        )
    }
}