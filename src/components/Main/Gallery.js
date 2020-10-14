import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css';

const images = [
  {
    original: require('../../img/bigpic3.jpg'),
    description: '3.6kW AC'
  },
  {
    original: require('../../img/bigpic1.jpg'),
    description: '22kW AC'
  },
  {
    original: require('../../img/bigpic2.jpg'),
    description: '22kW AC'
  },
  {
    original: require('../../img/bigpic4.jpg'),
    description: '50kW DC'
  },
  {
    original: require('../../img/bigpic5.jpg'),
    description: '50kW DC'
  }
];

function MyGallery () {
  return (
    <div className='gallery-wrapper'>
      <ImageGallery
        items={images} showThumbnails={false} showFullscreenButton autoPlay
        showNav={false} showBullets
      />
    </div>
  );
}

export default MyGallery;

// 273 x 470
