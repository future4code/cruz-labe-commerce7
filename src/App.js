import React from 'react';
import './App.css';

import Carrinho from './components/Carrinho/Carrinho'
import Footer from './components/Footer/Footer';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <main>Main</main>
        <Footer>footer</Footer>
      </div>
    </div>
  );
}

export default App;
