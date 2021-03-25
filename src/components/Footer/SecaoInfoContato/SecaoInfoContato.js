import React from 'react';
import styled from 'styled-components'

import logo from '../../../img/logo.png'

import {DivFlexColumn} from '../footer-styles-global'
import InfoContato from '../InfoContato/InfoContato';
import ListaRedesSociais from '../ListaRedesSociais/ListaRedesSociais';

const LogoImg = styled.img`
    width: 40px;
`

export default class SecaoInfoContato extends React.Component {
    render() {
        return (
            <DivFlexColumn>
                <LogoImg src={logo} alt='Labe Space'/>
                <ListaRedesSociais />
                <InfoContato />
            </DivFlexColumn>
    )
    }
}