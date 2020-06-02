import React, { useState } from 'react';
import './Subscription.css';
import Button from './Button';

function Subscription () {
  async function subscribe () {
    try {
      const fetchResponse = await fetch('http://localhost:8080/api/subscription', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(subscriptionData)
      });
      const data = await fetchResponse.json();
      if (subscriptionData.name === '') {
        alert('Kérlek add meg a neved');
        return false;
      }
      if (subscriptionData.email === '') {
        alert('Kérlek add meg az e-mail címedet');
        return false;
      }
      setData({ name: '', email: '' });
      alert('E-mail elküldve');
      return data;
    } catch (error) {
      return error;
    }
  }

  const [subscriptionData, setData] = useState({ name: '', email: '' });

  const handleName = (e) => {
    setData({ name: e.target.value, email: subscriptionData.email });
  };

  const handleEmail = (e) => {
    setData({ name: subscriptionData.name, email: e.target.value });
  };

  return (
    <div className='subscription-wrapper'>
      <p>Feliratkozás a hírlevélre</p>
      <form className='subscription'>
        <input value={subscriptionData.name} onChange={handleName} type='text' placeholder='Név' />
        <input value={subscriptionData.email} onChange={handleEmail} type='email' placeholder='E-mail cím' />
        <Button className='subscribe-button' textContent='Feliratkozás' onClick={subscribe} />
      </form>
    </div>
  );
}

export default Subscription;
