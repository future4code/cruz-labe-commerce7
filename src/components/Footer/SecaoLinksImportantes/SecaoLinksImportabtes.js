import React from 'react';
import styled from 'styled-components'

import {
    DivFlexColumn,
    Link,
    TextUpperCase    
} from '../footer-styles-global'

const DivPrincipal = styled(DivFlexColumn)`
    & > a {
        margin: 0;
        margin-top: 6%;
    }
`

export default class SecaoLinksImportabtes extends React.Component {
    render() {
        return (
            <DivPrincipal>
                <h3><TextUpperCase>Relacionamento</TextUpperCase></h3>
                <Link href='#'><TextUpperCase>Política de privacidade</TextUpperCase></Link>
                <Link href='#'><TextUpperCase>Política de troca</TextUpperCase></Link>
                <Link href='#'><TextUpperCase>Manual do produto</TextUpperCase></Link>
                <Link href='#'><TextUpperCase>Guia de tamanhos</TextUpperCase></Link>
                <Link href='#'><TextUpperCase>Trabalhe conosco</TextUpperCase></Link>
            </DivPrincipal>
        )
    }
}