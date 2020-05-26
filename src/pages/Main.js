import React from 'react';
import './Main.css';
import Details from '../components/Details';
import Button from '../components/Button';
import Video from '../components/Video';
import Subscription from '../components/Subscription';

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