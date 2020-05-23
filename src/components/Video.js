import React from 'react';
import './Video.css';
import ReactPlayer from 'react-player'


function Video() {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=o8moc34I1-o'
                className='react-player'
                width='640px'
                // height='460px'
                controls
            />
        </div>
    )
}

export default Video;
