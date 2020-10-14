import React from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import CacheRoute from 'react-router-cache-route'
import './App.css';
import Navbar from './components/Shared/Navbar';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import EVcalc from './pages/EVcalc';
import Forum from './pages/Forum';
import Footer from './components/Shared/Footer';
import MarketPlace from './pages/Marketplace';

function App() {
    return (
            <div className='App'>
                <Navbar />
                <CacheRoute exact path='/' component={Main} />
                <CacheRoute path='/aboutus' component={AboutUs} />
                <CacheRoute path='/evcalculator' component={EVcalc} />
                <CacheRoute path='/marketplace' component={MarketPlace} />
                <CacheRoute path='/forum' component={Forum} />
                <Footer />
            </div>
    );
}

export default App;