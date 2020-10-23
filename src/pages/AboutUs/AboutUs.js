import React from 'react';
import classes from './AboutUs.module.css';
import reactReduxLogo from '../../img/react-redux-logo.png';
import nodeJsLogo from '../../img/nodejs-logo.png';
import awsLogo from '../../img/aws-logo.png';

function aboutUs() {
  return (
    <div className={`${classes.aboutus} container`}>
      <div className="row">
        <div className="col-sm">
          <p>The page was developed for practicing React, Redux, NodeJS and MySQL.</p>
          <p>The front and backend are deployed to heroku, the DB to AWS.</p>

          <p>By subscribing to the newsletter, no data will be stored.</p>
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
