import React, { useState, useEffect } from 'react';
import './Consumption.css';
import ConsumptionData from './ConsumptionData';
import backendUrl from '../../services/backendLink';

function Consumption () {
  const [consumptionAC36, setConsumptionAC36] = useState([]);
  async function getConsumptionAC36 () {
    try {
      const fetchResponse = await fetch(`${backendUrl}/api/consumption/ac36`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      });
      const data = await fetchResponse.json();
      setConsumptionAC36(data);
    } catch (error) {
      return (error);
    }
  }

  const [consumptionAC22, setConsumptionAC22] = useState([]);
  async function getConsumptionAC22 () {
    try {
      const fetchResponse = await fetch(`${backendUrl}/api/consumption/ac22`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      });
      const data = await fetchResponse.json();
      setConsumptionAC22(data);
    } catch (error) {
      return (error);
    }
  }

  const [consumptionDC50, setConsumptionDC50] = useState([]);
  async function getConsumptionDC50 () {
    try {
      const fetchResponse = await fetch(`${backendUrl}/api/consumption/dc50`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      });
      const data = await fetchResponse.json();
      setConsumptionDC50(data);
    } catch (error) {
      return (error);
    }
  }

  useEffect(() => {
    getConsumptionAC36();
    getConsumptionAC22();
    getConsumptionDC50();
  }, []);

  return (
    <div className='consumption-wrapper'>
      <p className='kw ac36'>AC 3.6kW</p>
      <p className='kw ac22'>AC 22kW</p>
      <p className='kw dc50'>DC 50kW</p>
      <p className='text daily'>Electricity consumption today:</p>
      <p className='text weekly'>Electricity consumption for the previous 7 days:</p>
      <img src={require('../../img/charger4.png')} className='ac36img img' alt='ac36img' />
      <img src={require('../../img/charger2.png')} className='ac22img img' alt='ac22img' />
      <img src={require('../../img/charger1.png')} className='dc50img img' alt='dc50img' />
      <div className='ac36daily sql-data'>
        {consumptionAC36.map(cons =>
          <ConsumptionData key={cons.id} daily_consumption={cons.daily_consumption + 'kW'} />)}
      </div>
      <div className='ac36weekly sql-data'>
        {consumptionAC36.map(cons =>
          <ConsumptionData key={cons.id} weekly_consumption={cons.weekly_consumption + 'kW'} />)}
      </div>
      <div className='ac22daily sql-data'>
        {consumptionAC22.map(cons =>
          <ConsumptionData key={cons.id} daily_consumption={cons.daily_consumption + 'kW'} />)}
      </div>
      <div className='ac22weekly sql-data'>
        {consumptionAC22.map(cons =>
          <ConsumptionData key={cons.id} weekly_consumption={cons.weekly_consumption + 'kW'} />)}
      </div>
      <div className='dc50daily sql-data'>
        {consumptionDC50.map(cons =>
          <ConsumptionData key={cons.id} daily_consumption={cons.daily_consumption + 'kW'} />)}
      </div>
      <div className='dc50weekly sql-data'>
        {consumptionDC50.map(cons =>
          <ConsumptionData key={cons.id} weekly_consumption={cons.weekly_consumption + 'kW'} />)}
      </div>
    </div>
  );
}

export default Consumption;
