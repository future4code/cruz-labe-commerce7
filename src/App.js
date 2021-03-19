import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header'

import Main from './components/Main/Main';

class App extends React.Component { 
  state = {
    exibindoCarrinho: false,
    filtroNome: ''
  }

  exibindoCarrinho = () => {
    this.setState({exibindoCarrinho: !this.state.exibindoCarrinho});
  }

  setFiltroNome = (value) => {
    this.setState({filtroNome: value})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header 
            setFiltroNome={this.setFiltroNome}
            exibindoCarrinho={this.exibindoCarrinho}
          />
          <Main 
            exibindoCarrinho={this.props.exibindoCarrinho} 
            filtroNome={this.props.filtroNome}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
