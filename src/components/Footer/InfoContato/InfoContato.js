import React from 'react';
import styled from 'styled-components'

import {DivFlexColumn, DivFlexRow, Link, TextUpperCase} from '../footer-styles-global'

const DivPrincipal = styled(DivFlexColumn)`
    height: 100%;
    justify-content: space-around;
`

const LinksContato = styled(DivFlexRow)`
    & > a {
        margin: 0;
    }

    & span {
        margin: 0 2%;
    }
`

export default class InfoContato extends React.Component {
    render() {
        return (
            <DivPrincipal>
                <h3><TextUpperCase>Atendimento Online</TextUpperCase></h3>
                
                <p>De segunda a sexta, das 8h às 17h.</p>
                
                <LinksContato>
                    <Link href='#'>Contato</Link>
                    <span>|</span>
                    <Link href='#'>Fele conosco</Link>
                </LinksContato>

            </DivPrincipal>
        )
    }
}