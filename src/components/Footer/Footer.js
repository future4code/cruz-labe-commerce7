import React from 'react';
import styled from 'styled-components'

import SecaoLinksImportabtes from './SecaoLinksImportantes/SecaoLinksImportabtes'
import SecaoFormasPagamento from './SecaoFormasPagamento/SecaoFormasPagamento';
import SecaoInfoContato from './SecaoInfoContato/SecaoInfoContato';

const Rodape = styled.footer`
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    gap: 40px;
    padding: 30px;
    letter-spacing: 2px;
    font-family: 'Yanone Kaffeesatz', sans-serif;

    display: grid;
    grid-template: 1fr / repeat(auto-fill, minmax(210px, 1fr));
`

export default class Footer extends React.Component {
    render() {
        return (
            <Rodape>
                <SecaoInfoContato />

                <SecaoLinksImportabtes />                

                <SecaoFormasPagamento />
            </Rodape>
        )
    }
}