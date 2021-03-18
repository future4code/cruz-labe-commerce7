import React from "react";
import Logo from "../img/logo.png";
import Carrinho from "../img/twotone_shopping_cart_black_18dp.png";
import "./Header.css"

class Header extends React.Component {
  state = {
    camisetas: [],
    buscaTermo: "",
  };

  editarTermoBusca = (e) => {
    this.setState({ buscaTermo: e.target.value });
  };

  buscaDinamica = () => {
    return this.state.camisetas.filter((camiseta) =>
      camiseta.toLowerCase().includes(this.state.buscaTermo.toLowerCase())
    );
  };

  render() {
    return (
      <header>
        <div className="App-header">
          <div>
            <img src={Logo} alt="logo" className="Logo" />
            <h2>LabSpace</h2>
          </div>

          <div>
            <input
              type="text"
              value={this.state.buscaTermo}
              onChange={this.editarTermoBusca}
              placeholder="Procure por uma camiseta!"
            />
            <button type="submit"></button>
          </div>

          <div>
            <img src={Carrinho} alt="carrinho" className="Carrinho-img"></img>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
