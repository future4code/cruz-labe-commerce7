import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header'
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
