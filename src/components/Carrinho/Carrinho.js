import React from 'react';
import styled from 'styled-components'

import camiseta from '../../img/comiseta.jpg'
import deleteIcon from '../../icons/delete.png'

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
    width: 80%;
`

const Produto = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2% 0;
`

const ImagemProduto = styled.img`
    width: 100px;
`

const InfoProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > p:first-child {
        font-size: 1.4em;
    }

    & > p:last-child {
        font-size: 1.2em;
        letter-spacing: 4px;
        font-weight: 400;
    }
`

const Quantidade = styled(InfoProduto)`
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Remover = styled(InfoProduto)`
    align-items: center;

    & > img {
        width: 30px;
    }
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
                        <Produto>
                            <ImagemProduto src={camiseta} />
                            <InfoProduto>
                                <p>
                                    <TextUpperCase>CAMISETA RENAN DE ALMEIDA</TextUpperCase>
                                </p>
                                <p>
                                    R$:69,90
                                </p>
                            </InfoProduto>
                            <Quantidade>
                                <p>
                                    <TextUpperCase>Quantidade</TextUpperCase>
                                </p>
                                <div>
                                    <ButtonAction>-</ButtonAction>
                                    <p>1</p>
                                    <ButtonAction>+</ButtonAction>
                                </div>
                            </Quantidade>
                            <Remover>
                                <p>
                                    <TextUpperCase>Remover</TextUpperCase>
                                </p>
                                <img src={deleteIcon} alt=''/>
                            </Remover>
                        </Produto>
                        <Produto>
                            <ImagemProduto src={camiseta} />
                            <InfoProduto>
                                <p>
                                    <TextUpperCase>CAMISETA RENAN DE ALMEIDA</TextUpperCase>
                                </p>
                                <p>
                                    R$:69,90
                                </p>
                            </InfoProduto>
                            <Quantidade>
                                <p>
                                    <TextUpperCase>Quantidade</TextUpperCase>
                                </p>
                                <div>
                                    <ButtonAction>-</ButtonAction>
                                    <p>1</p>
                                    <ButtonAction>+</ButtonAction>
                                </div>
                            </Quantidade>
                            <Remover>
                                <p>
                                    <TextUpperCase>Remover</TextUpperCase>
                                </p>
                                <img src={deleteIcon} alt=''/>
                            </Remover>
                        </Produto>
                        <hr />
                        <FinalizarCompra>
                            <p>Total: R$69,90</p>
                            <ButtonAction>Finalizar Compra</ButtonAction>
                        </FinalizarCompra>
                    </ContainerProdutos>
                </DivFlexColumn>
            </DivPrincipal>
        )
    }
}