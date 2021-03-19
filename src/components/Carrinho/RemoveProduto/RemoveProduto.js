import React from 'react';
import styled from 'styled-components'

import {Title, TextUpperCase} from '../carrinho-styles-global'

import deleteIcon from '../../../icons/delete.png'

const DivPrincipal = styled.div`
    grid-column: 3/ 4;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: center;

    }
`

const Icon = styled.img`
    width: 30px;
    margin-bottom: 2%;

    &:hover {
        opacity: .6;
        cursor: pointer;
    }
`

export default class RemoveProduto extends React.Component {
    render() {
        return (
            <DivPrincipal>
                <Title><TextUpperCase>Remover</TextUpperCase></Title>
                <div>
                    <Icon src={deleteIcon} alt=''/>
                </div>
            </DivPrincipal>
        )
    }
}