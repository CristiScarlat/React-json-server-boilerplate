import React from 'react'
import './App.scss';
import Home from './pages/home';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portofolio from './pages/portofolio';
import About from './pages/about';
import Cities from './pages/cities';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='portofolio' element={<Portofolio/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cities' element={<Cities/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
