import React from 'react';
import styled from 'styled-components'

import instagram from '../../../icons/instagram.png'
import facebook from '../../../icons/facebook.png'

import {Link} from '../footer-styles-global'

const Lista = styled.ul`
    display: flex;
    justify-content: flex-start;
    padding: 0;
    list-style: none;
    width: 100%;
    margin: 6% 0;
`

const Icon = styled.img`
    width: 26px;
`

export default class ListaRedesSociais extends React.Component {
    render() {
        return (
            <Lista>
                <li>
                    <Link href='#'>
                        <Icon src={instagram} alt='Instagram' />
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        <Icon src={facebook} alt='Facebook' />
                    </Link>
                </li>
            </Lista>
        )
    }
}