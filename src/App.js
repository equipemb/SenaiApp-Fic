import React from 'react';
  import './App.css';

  import Header from './componentes/Header/';
  import HomePage from './componentes/HomePage/';
  import Footer from './componentes/Footer/';
  
  function App() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>

    );
  }

  export default App;