import React from "react";
import styled from "styled-components";

import { TextUpperCase, Title } from "../carrinho-styles-global";

const DivPrincipal = styled.div`
  display: grid;
  grid-template: 1fr / 3fr 0.8fr;
`;

const DivInfo = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DiscricaoProduto = styled.p`
  font-size: 1.6em;
  margin: 0;
`;

const PrecoProduto = styled.p`
  letter-spacing: 6px;
  margin-top: 10%;
  margin: 2% 0;
  color: #ff7f50;
`;

const DivQuantidade = styled(DivInfo)`
  grid-column: 2 / 3;
  justify-content: space-between;
`;

const ButtonActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

const ButtonAction = styled.button`
  background-color: #ff7f50;
  text-align: center;
  padding: 2px 10px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  flex: 0.2;
`;

export default class InfoProduto extends React.Component {
  state = {
    quantidadeProduto: 0,
  };

  aumentarQuantidade = () => {
    this.setState({quantidadeProduto: this.state.quantidadeProduto + 1})
  };

  diminuirQuantidade = () => {
    this.setState({quantidadeProduto: this.state.quantidadeProduto - 1})
  }

  render() {
    const produto = this.props.produto;
    return (
      <DivPrincipal>
        <DivInfo>
          <DiscricaoProduto>
            <TextUpperCase>{produto.name}</TextUpperCase>
          </DiscricaoProduto>
          <PrecoProduto>R$: {produto.value}</PrecoProduto>
        </DivInfo>
        <DivQuantidade>
          <Title>
            <TextUpperCase>Quantidade</TextUpperCase>
          </Title>
          <ButtonActionContainer>
            <ButtonAction onClick={this.diminuirQuantidade}>-</ButtonAction>
            <p>{this.state.quantidadeProduto}</p>
            <ButtonAction onClick={this.aumentarQuantidade}>+</ButtonAction>
          </ButtonActionContainer>
        </DivQuantidade>
      </DivPrincipal>
    );
  }
}
