import React from 'react'
import styled from 'styled-components';

const ContainerDosCards = styled.div`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6%;
  min-width: 30%;

  & > img {
    width: 180px;
    max-height: 50%;
  }
`;

const InformacaoDosCards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  justify-content: space-between;
  flex: 1;

  p {
    margin: 4px 0;
  }
`

const BotaoAdicionarCarrinho = styled.button`
  align-self: center;
  margin-top: 6%;
  width: 100%;
  padding: 10px;
  letter-spacing: 2px;
`

const PrecoProduto = styled.p`
  color: #ff7f50;
  letter-spacing: 4px;
  margin-top: 2%;
`

const TextUpperCase = styled.span`
  text-transform: uppercase;
`

const Title = styled.p`
  font-size: 1.4em;
  letter-spacing: 2px;
`

export class CardProduto extends React.Component {
  render() {
    const produto = this.props.produto
    return <ContainerDosCards>
      <img src={produto.imageUrl} alt=''/>

      <InformacaoDosCards>
        <Title><TextUpperCase>{produto.name}</TextUpperCase></Title>
        <PrecoProduto>R${produto.value}</PrecoProduto>

        <BotaoAdicionarCarrinho onClick={() => this.props.adicionarAoCarrinho(produto.id)}>
          <TextUpperCase>Adicionar ao carrinho</TextUpperCase>
        </BotaoAdicionarCarrinho>

      </InformacaoDosCards>
    </ContainerDosCards>
  }
}
