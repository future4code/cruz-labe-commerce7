import React from 'react';
import styled from 'styled-components'

import mastecardLogo from '../../../img/mastercard-logo.png'
import visaLogo from '../../../img/visa-logo.png'
import eloLogo from '../../../img/elo_logo.png'
import pixLogo from '../../../img/pix-logo.png'
import boletoLogo from '../../../img/boleto-bancario.png'

import {DivFlexColumn, DivFlexRow, TextUpperCase} from '../footer-styles-global'

const ContainerCartãoLogo = styled(DivFlexRow)`
    align-items: center;
    flex-wrap: wrap;

    margin-top: 2%;
    
    & > img {
        width: 30px;
        margin-right: 20px;
    }
` 

export default class SecaoFormasPagamento extends React.Component {
    render() {
        return (
            <DivFlexColumn>
                <h3><TextUpperCase>formas de pagamento</TextUpperCase></h3>
                <ContainerCartãoLogo>
                    <img src={mastecardLogo} alt=''/>
                    <img src={visaLogo} alt=''/>
                    <img src={eloLogo} alt=''/>
                    <img src={pixLogo} alt=''/>
                    <img src={boletoLogo} alt=''/>
                </ContainerCartãoLogo>
            </DivFlexColumn>
        )
    }
}