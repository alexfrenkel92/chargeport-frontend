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

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <img src={logo} className='logo' alt='market-place-logo' />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToHome}>Főoldal</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToEVcalc}>EV kalkulátor</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToForum}>Fórum</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToMarketplace}>Piactér</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={navigateToAboutUS}>Rólunk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
