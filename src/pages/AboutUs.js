import React from 'react';
import classes from './AboutUs.module.css';
import reactReduxLogo from '../img/react-redux-logo.png';
import nodeJsLogo from '../img/nodejs-logo.png';
import awsLogo from '../img/aws-logo.png';

function aboutUs() {
  return (
    <div className={`${classes.aboutus} container`}>
      <div className="row">
        <div className="col-sm">
          <p>Az oldal hobby projektként készült, gyakorlás céljából.</p>
          <p>A frontend React + Redux, backend node.js-l íródott.</p>
          <p>A MySQL AWS-n van tárolva.</p>
          
          <p>A hírlevélre történő feliratkozás során a név és e-mail cím nem kerül tárolásra, mindössze egy egyszeri e-mail kerül elküldésre.</p>
        </div>
       


      </div>
        <div className='row'>
          <div className={`${classes.logos} col-sm`}>
            <img src={reactReduxLogo} className={classes.reactReduxLogo} alt='react-logo' />
            <img src={nodeJsLogo} className={classes.nodeJsLogo} alt='react-logo' />
            <img src={awsLogo} className={classes.awsLogo} alt='react-logo' />
          </div>
        </div>
    </div>
  );
}

export default aboutUs;
