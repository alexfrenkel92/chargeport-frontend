import React from 'react';
import './Main.css';
import Details from '../components/Details';
import Video from '../components/Video';
import Subscription from '../components/Subscription';
import MyGallery from '../components/Gallery';
import Consumption from '../components/Consumption';

function Main () {
  return (
    <div className='main'>
      <Details />
      <MyGallery />
      <Video />
      <Subscription />
      <Consumption />
    </div>
  );
}

export default Main;
