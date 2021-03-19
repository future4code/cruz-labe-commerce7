import React from "react"
import styled from 'styled-components'

import Carrinho from '../Carrinho/Carrinho'


const DivPrincipal = styled.div`
    grid-row: 2 / 3;
`

export default class Main extends React.Component {
    render() {
        return (
            <DivPrincipal>
                <Carrinho />
            </DivPrincipal>
        )
    }
}