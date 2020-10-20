import React from 'react';
import './Navbar.css';
import logo from '../../img/chargeportLC22.png';
import { useHistory } from 'react-router';

function Navbar() {
  const history = useHistory();

  function navigateToHome() {
    history.push('/');
  }
  function navigateToAboutUS() {
    history.push('/aboutus');
  }
  function navigateToEVcalc() {
    history.push('/evcalculator');
  }
  function navigateToForum() {
    history.push('/forum');
  }
  function navigateToMarketplace() {
    history.push('/marketplace')
  }
  function navigateToCart() {
    history.push('/cart')
  }
  function navigateOrders() {
    history.push('./orders')
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <img src={logo} className='logo' alt='market-place-logo' />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToHome}>Homepage</p>
          </li>
          <li className="nav-item active">
            <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToEVcalc}>EV calculator</p>
          </li>
          <li className="nav-item active">
            <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToForum}>Posts</p>
          </li>
          <li className="nav-item dropdown">
            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Marketplace
            </p>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToMarketplace}>EV Chargers</p>
              <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToCart}>My Cart</p>
              <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateOrders}>My Orders</p>
              <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Login</p>
            </div>
          </li>
          <li className="nav-item active">
            <p className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToAboutUS}>Rólunk</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
