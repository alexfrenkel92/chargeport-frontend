import React from 'react';
import './Video.css';
import ReactPlayer from 'react-player';

function Video () {
  return (
    <div className='player-wrapper'>
      <div className='player'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=o8moc34I1-o'
          className='react-player'
          width='auto'
          height='263px'
          controls
        />
      </div>
      <div className='player-text'>
        <p>More information on the use of chargers in the video above</p>
      </div>
    </div>
  );
}

export default Video;
