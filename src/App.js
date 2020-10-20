import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CacheRoute from 'react-router-cache-route'
import './App.css';
import Navbar from './components/Shared/Navbar';
import Main from './pages/HomePage/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import EVcalc from './pages/EVcalc/EVcalc';
import Forum from './pages/Posts/Posts';
import Footer from './components/Shared/Footer';
import MarketPlace from './pages/MarketPlace/Marketplace';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <CacheRoute exact path='/' component={Main} />
            <CacheRoute path='/aboutus' component={AboutUs} />
            <CacheRoute path='/evcalculator' component={EVcalc} />
            <CacheRoute path='/marketplace' component={MarketPlace} />
            <CacheRoute path='/forum' component={Forum} />
            <CacheRoute path='/cart' component={Cart} />
            <Route path='/orders' component={Orders} />
            <Footer />
        </div>
    );
}

export default App;