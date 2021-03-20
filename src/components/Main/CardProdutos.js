import React from 'react'
import styled from 'styled-components';

const ContainerDosCards = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const InformacaoDosCards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const BotaoAdicionarCarrinho = styled.button`
  align-self: center;
  margin-top: 4px;
`

export class CardProdutos extends React.Component {
  render() {
    const product = this.props.produto
    return <ContainerDosCards>
      <img src={produto.imageUrl}/>
      <InformacaoDosCards>
        <p>{produto.name}</p>
        <p>R${product.value},00</p>
        <BotaoAdicionarCarrinho onClick={() => this.props.adicionarAoCarrinho(produto.id)}>
          Adicionar ao carrinho
        </BotaoAdicionarCarrinho>
      </InformacaoDosCards>
    </ContainerDosCards>
  }
}
