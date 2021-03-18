import styled from 'styled-components'

export const DivFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    & > h3 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 400;
    }
`

export const DivFlexRow = styled(DivFlexColumn)`
    flex-direction: row;
`

export const Link = styled.a`
    margin-right: 14px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        color: #ff7f50;
    }
`

export const TextUpperCase = styled.p`
    text-transform: uppercase;
    margin: 0;
`