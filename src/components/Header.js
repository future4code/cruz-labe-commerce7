import React from 'react';
import Logo from "../img/logo.png";
import Carrinho from "../img/twotone_shopping_cart_black_18dp.png";
import "./Header.css"


export default class Header extends React.Component {
  state = {
    inputBusca: "",
  };

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
    this.props.setFiltroBusca(event.target.value)
  };


  // state = {
  //   camisetas : [

  //   ],
  //   items: []
  // };

  //   filtraLista = this.filtraLista.bind(this);

  // filtraLista(e){
  //   let listaAtualizada = this.state.camisetas

  //   listaAtualizada = listaAtualizada.filter(item => {
  //     return item.toLowerCase().search(
  //       e.target.value.toLowerCase()
  //       ) !== -1;
  //   });

  //   this.setState({
  //     items: listaAtualizada
  //   });
  // }

  render() {
    return (
      <header>
        <div className="App-header">
          <div>
            <img src={Logo} alt="logo" className="Logo" />
            <h2>LabSpace</h2>
          </div>
          <div>
            <input type="text" placeholder="Procure por uma camiseta!" onChange={this.onChangeBusca} value={this.state.inputBusca}/>
            <button
              className="Botao-busca"
              type="submit"
            >
              Buscar
            </button>
          </div>
          <div>
            <img
              src={Carrinho}
              alt="carrinho"
              className="Carrinho-img"
              onClick={this.props.exibindoCarrinho}
            ></img>
            <span>{this.props.quantidadeNoCarrinho}</span>
          </div>
        </div>
      </header>
    );
  }
}

