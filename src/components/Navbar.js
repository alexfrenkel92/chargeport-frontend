import React from 'react';
import './Navbar.css';
import logo from '../img/chargeportLC22.png';
import Button from './Button';
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
    function navigateToInstall() {
        history.push('/chargeportinstall');
    }
    function navigateToForum() {
        history.push('/forum');
    }

    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt='market-place-logo' onClick={navigateToHome} />
            <div className='buttons'>
            <Button className='about button' textContent='Rólunk' onClick={navigateToAboutUS} />
            <Button className='calc button' textContent='EV kalkulátor' onClick={navigateToEVcalc} />
            <Button className='install button' textContent='Töltőtelepíés' onClick={navigateToInstall} />
            <Button className='forum button' textContent='Fórum' onClick={navigateToForum} />
            </div>
        </div>
    );
}

export default Navbar;
