import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import EVcalc from './pages/EVcalc';
import ChargePortInstall from './pages/ChargePortInstall';
import Forum from './pages/Forum';
import Footer from './components/Footer';

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Main} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/evcalculator' exact component={EVcalc} />
        <Route path='/chargeportinstall' exact component={ChargePortInstall} />
        <Route path='/forum' exact component={Forum} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
