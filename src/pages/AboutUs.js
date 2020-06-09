import React from 'react';
import './AboutUs.css';

function aboutUs () {
  return (
    <div className='aboutus'>
      <p>Az oldal hobby projektként készült, gyakorlás céljából.</p>
      <p>A frontend React, backend node.js-l íródott.</p>
      <p>A hírlevélre történő feliratkozás során a név és e-mail cím nem kerül tárolásra, mindössze egy egyszeri e-mail kerül elküldésre.</p>
      <p>A backend-ről származó adatok a https://www.freemysqlhosting.net/ oldalon vannak tárolva, aminek a rendelkezésre állása korlátozott, így előfordulhat, hogy néhány adat nem mindig tölt be.</p>
    </div>
  );
}

export default aboutUs;
