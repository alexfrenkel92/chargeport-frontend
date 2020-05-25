import React from 'react';
import './Main.css';
import Details from './Details';
import Button from './Button';
import Video from './Video';
import Subscription from './Subscription';

function Main() {
    return (
        <div className='main'>
            <Details />
            <Button className='big-marketing-picture' />
            <Video />
            <Subscription />
            <Button className='useage-data' />
        </div>
    )
}

export default Main;