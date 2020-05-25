import React, { useState } from 'react';
import './Subscription.css';
import Button from './Button';

function Subscription() {
    return (
        <div className='subscription-wrapper'>
        <p>Feliratkozás a hírlevélre</p>
        <form className='subscription'>
            <input type='text' placeholder='Név' />
            <input type='email' placeholder='E-mail cím' />
            <Button className='subscribe-button' textContent='Feliratkozás' />
        </form>
        </div>
    )
}

export default Subscription;
