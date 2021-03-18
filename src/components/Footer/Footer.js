import React from 'react';
import styled from 'styled-components'

import logo from '../../img/logo.png'
import mastecardLogo from '../../img/mastercard-logo.png'
import visaLogo from '../../img/visa-logo.png'
import eloLogo from '../../img/elo_logo.png'
import pixLogo from '../../img/pix-logo.png'
import boletoLogo from '../../img/boleto-bancario.png'
import instagram from '../../icons/instagram.png'
import facebook from '../../icons/facebook.png'

const Rodape = styled.footer`
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    gap: 40px;
    padding: 30px;
    letter-spacing: 2px;
    font-family: 'Yanone Kaffeesatz', sans-serif;

    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
`

const DivFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    & > h3 {
        text-transform: uppercase;
        margin: 0;
        font-size: 1.1em;
        font-weight: 400;
    }

    & > p {
        margin-top: 4% 0;
    }
`

const TextUpperCase = styled.p`
    text-transform: uppercase;
`

const DivFLexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0%;
    flex-wrap: wrap;

    & > hr {
        margin: 0 2%;
        height: 60%;
    }

    & > a {
        margin: 2% 0 ;
    }

    & > img {
        width: 26px;
        margin-right: 6%;
    }
`

const LogoImg = styled.img`
    width: 40px;
`

const Lista = styled.ul`
    display: flex;
    justify-content: flex-start;
    padding: 0;
    list-style: none;
    width: 100%;
    margin: 6% 0;
`

const Link = styled.a`
    margin-right: 14px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    & > img {
        width: 22px;
    }

    &:hover {
        color: #ff7f50;
    }
`

export default class Footer extends React.Component {
    render() {
        return (
            <Rodape>
                <DivFlexColumn>
                    <LogoImg src={logo} alt='Labe Space'/>
                    <Lista>
                        <li>
                            <Link href='#'>
                                <img src={instagram} alt='Instagram' />
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <img src={facebook} alt='Facebook' />
                            </Link>
                        </li>
                    </Lista>
                    <DivFlexColumn>
                        <h3>Atendimento Online</h3>
                        <p>De segunda a sexta, das 8h às 17h.</p>
                        <DivFLexRow>
                            <Link href='#'>
                                Contato
                            </Link>
                            <hr />
                            <Link href='#'>
                                Fele conosco
                            </Link>
                        </DivFLexRow>
                    </DivFlexColumn>
                </DivFlexColumn>

                <DivFlexColumn>
                    <h3>Relacionamento</h3>
                    <Link href='#'><TextUpperCase>Política de privacidade</TextUpperCase></Link>
                    <Link href='#'><TextUpperCase>Política de troca</TextUpperCase></Link>
                    <Link href='#'><TextUpperCase>Manual do produto</TextUpperCase></Link>
                    <Link href='#'><TextUpperCase>Guia de tamanhos</TextUpperCase></Link>
                    <Link href='#'><TextUpperCase>Trabalhe conosco</TextUpperCase></Link>
                </DivFlexColumn>

                <DivFlexColumn>
                    <h3>formas de pagamento</h3>
                    <DivFLexRow>
                        <img src={mastecardLogo} alt=''/>
                        <img src={visaLogo} alt=''/>
                        <img src={eloLogo} alt=''/>
                        <img src={pixLogo} alt=''/>
                        <img src={boletoLogo} alt=''/>
                    </DivFLexRow>
                </DivFlexColumn>
            </Rodape>
        )
    }
}