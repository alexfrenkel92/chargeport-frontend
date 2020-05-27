import React from 'react';
import './Main.css';
import Details from '../components/Details';
import Button from '../components/Button';
import Video from '../components/Video';
import Subscription from '../components/Subscription';
import MyGallery from '../components/Gallery';

function Main () {
  return (
    <div className='main'>
      <Details />
      <MyGallery />
      {/* <Button className='big-marketing-picture' /> */}
      <Video />
      <Subscription />
      <Button className='useage-data' />
    </div>
  );
}

export default Main;
