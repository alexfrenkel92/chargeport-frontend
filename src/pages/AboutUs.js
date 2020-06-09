import React from 'react';
import './AboutUs.css';

function aboutUs () {
  return (
    <div className='aboutus'>
      <p>Az oldal hobby projektként készült, gyakorlás céljából.</p>
      <p>A frontend React, backend node.js-l íródott.</p>
      <p>A hírlevélre történő feliratkozás során a név és e-mail cím nem kerül tárolásra, mindössze egy egyszeri e-mail kerül elküldésre.</p>
      <p>Az adatok AWS adatbázisban vannak tárolva.</p>
    </div>
  );
}

export default aboutUs;
