import React, { useState } from 'react';
import './Subscription.css';
import Button from '../Shared/Button';
import backendUrl from '../../services/backendLink';

function Subscription () {
  async function subscribe () {
    try {
      const fetchResponse = await fetch(`${backendUrl}/api/subscription`, {
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
      if (subscriptionData.email.indexOf('@') === -1) {
        alert('Helytelen e-mail cím');
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
      <p className='form-title'>Feliratkozás a hírlevélre</p>
      <form className='subscription'>
        <input type='text' name='name' value={subscriptionData.name} onChange={handleName} placeholder='Név' />
        <input type='email' name='email' value={subscriptionData.email} onChange={handleEmail} placeholder='E-mail cím' />
        <Button className='subscribe-button' textContent='Feliratkozás' onClick={subscribe} />
      </form>
    </div>
  );
}

export default Subscription;
