import React from 'react';
import classes from './Main.module.css';
import Details from '../../components/Main/Details';
import Video from '../../components/Main/Video';
import Subscription from '../../components/Main/Subscription';
import Gallery from '../../components/Main/Gallery';
import Consumption from '../../components/Main/Consumption';

function Main() {
  return (
    <div className={`${classes.main} container`} >
      <div className='details-title'>
        <h3>Welcome to our page!</h3>
      </div>
      <div className="row">
        <div className="col-sm">
          <Details />
        </div>
        <div className="col-sm">
          <Video />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Gallery />
        </div>
        <div className="col-sm">
          <Consumption />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Subscription />
        </div>
      </div>
    </div>
  );
}

export default Main;
