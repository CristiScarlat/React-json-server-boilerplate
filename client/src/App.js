import React from 'react'
import './App.scss';
import Home from './pages/home';
import Header from './components/header/header';

function App() {

  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
