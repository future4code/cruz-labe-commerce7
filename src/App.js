import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header'


import Main from './components/Main/Main';

class App extends React.Component { 
  state = {
    exibindoCarrinho: false,
    filtroBusca: '',
    quantidadeNoCarrinho: 0
  }

  exibindoCarrinho = () => {
    this.setState({exibindoCarrinho: !this.state.exibindoCarrinho});
  }

  setFiltroBusca = (value) => {
    this.setState({filtroBusca: value.toUpperCase()});
  }

  atualizaQuantidadeCarrinho = (quantidade) => {
    console.log(quantidade)
    this.setState({quantidadeNoCarrinho: quantidade})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header 
            setFiltroBusca={this.setFiltroBusca}
            exibindoCarrinho={this.exibindoCarrinho}
            quantidadeNoCarrinho={this.state.quantidadeNoCarrinho}
          />
          <Main 
            exibindoCarrinho={this.state.exibindoCarrinho} 
            filtroBusca={this.state.filtroBusca}
            atualizaQuantidadeCarrinho={this.atualizaQuantidadeCarrinho}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
