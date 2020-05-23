import React, { useState } from 'react';
import './Subscription.css';
import Button from './Button';

function Subscription() {
    return (
        <form>
            <input type='text' placeholder='Név' />
            <input type='email' placeholder='E-mail cím' />
            <Button className='sibscribeButton' textContent='Feliratkozás' />
        </form>
    )
}

export default Subscription;
