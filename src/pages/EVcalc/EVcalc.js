import React, { useState } from 'react';
import './EVcalc.css';
import Button from '../../components/Shared/Button';

function EVcalc() {
  const [evData, setEvData] = useState({ evPrice: '', evFuelPrice: '', evConsumption: '' });
  const handleEVPrice = (e) => {
    setEvData({ evPrice: e.target.value, evFuelPrice: evData.evFuelPrice, evConsumption: evData.evConsumption });
  };
  const handleEVFuelPrice = (e) => {
    setEvData({ evPrice: evData.evPrice, evFuelPrice: e.target.value, evConsumption: evData.evConsumption });
  };
  const handleEVConsumption = (e) => {
    setEvData({ evPrice: evData.evPrice, evFuelPrice: evData.evFuelPrice, evConsumption: e.target.value });
  };

  const [iceData, setIceData] = useState({ icePrice: '', iceFuelPrice: '', iceConsumption: '' });
  const handleICEPrice = (e) => {
    setIceData({ icePrice: e.target.value, iceFuelPrice: iceData.iceFuelPrice, iceConsumption: iceData.iceConsumption });
  };
  const handleICEFuelPrice = (e) => {
    setIceData({ icePrice: iceData.icePrice, iceFuelPrice: e.target.value, iceConsumption: iceData.iceConsumption });
  };
  const handleICEConsumption = (e) => {
    setIceData({ icePrice: iceData.icePrice, iceFuelPrice: iceData.iceFuelPrice, iceConsumption: e.target.value });
  };

  const [mileageData, setMileage] = useState({ mileage: '' });
  const handleMileage = (e) => {
    setMileage({ mileage: e.target.value });
  };

  const evFuelCost100km = evData.evFuelPrice * evData.evConsumption;
  const evFuelCostyear = mileageData.mileage * evData.evFuelPrice * evData.evConsumption / 100;
  const iceFuelCost100km = iceData.iceFuelPrice * iceData.iceConsumption;
  const iceFuelCostyear = mileageData.mileage * iceData.iceFuelPrice * iceData.iceConsumption / 100;

  function handleSaving() {
    let saving = Math.round(iceFuelCostyear - evFuelCostyear);
    if (Math.sign(saving) === -1) saving = 'A megtakarítás 0';
    return saving;
  }

  function handleTimespan() {
    let timespan = 0;
    if (!evFuelCost100km) {
      timespan = Math.round((evData.evPrice - iceData.icePrice) / (iceFuelCostyear));
    }
    if (!mileageData.mileage, !evData.evPrice, !evData.evFuelPrice, !evData.evConsumption, iceData.icePrice, !iceData.iceFuelPrice, !iceData.iceConsumption) timespan = 0;
    if (evFuelCost100km) {
      timespan = Math.round((evData.evPrice - iceData.icePrice) / (iceFuelCostyear - evFuelCostyear));
    }
    if (Math.sign(timespan) === -1) timespan = '0';
    return timespan;
  }

  return (
    <div className="container evcalc-wrapper">
      <div className="row">
        <div className='evcalc-details-title'>
          <span>
          By using the calculator below, you can get a picture of the cost of ownership of an EV (electric vehicle) and an ICE (internal combustion engine) vehicle. 
          By filling all fields, it shows each one's consumption, fuel cost, savings (on fuel cost only) and the expected price parity of the two purchase.
          You can shorten the time by which price parity is achieved, by:
          </span>
          <ul>
          <li>charging the EV from a solar home system, by what the fuel cost can drop around 0 HUF/kW;</li>
          <li>higher annual mileage.</li>
          </ul>
        </div>
      </div>
      <div className="row calculator">
        {/* <div class="col">
        </div> */}
        <div className="col title">
          <p className='titleEV'>EV</p>
        </div>
        <div className="col title">
          <p className='titleICE'>ICE</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='mileage evcalc'>Annual mileage</p>
        </div>
        <div className="col">
          <textarea className='mileage-merged' value={mileageData.mileage} onChange={handleMileage} placeholder='pl. 25.000km' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='price evcalc'>Purchase price</p>
        </div>
        <div className="col">
          <textarea className='ev-price' value={evData.evPrice} onChange={handleEVPrice} placeholder='ex. 8 million HUF' />
        </div>
        <div className="col">
          <textarea className='ice-price' value={iceData.icePrice} onChange={handleICEPrice} placeholder='ex. 5 million HUF' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='fuel-cost evcalc'>Fuel cost</p>
        </div>
        <div className="col">
          <textarea className='kW-price' value={evData.evFuelPrice} onChange={handleEVFuelPrice} placeholder='ex. 40 HUF/kW' />
        </div>
        <div className="col">
          <textarea className='l-price' value={iceData.iceFuelPrice} onChange={handleICEFuelPrice} placeholder='ex. 380 HUF/l' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='consumption evcalc'>Consumption</p>
        </div>
        <div className="col">
          <textarea className='consumption-ev' value={evData.evConsumption} onChange={handleEVConsumption} placeholder='ex. 16kW/100km' />
        </div>
        <div className="col">
          <textarea className='consumption-ice' value={iceData.iceConsumption} onChange={handleICEConsumption} placeholder='ex. 7l/100km' />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <p className='fuel-cost-100km evcalc'>Fuel cost/100km</p>
        </div>
        <div className="col">
          <Button className='ev-fuel-cost-100km to-center' textContent={evFuelCost100km + ' HUF/100km'} />
        </div>
        <div className="col">
          <Button className='ice-fuel-cost-100km to-center' textContent={iceFuelCost100km + ' HUF/100km'} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='year-mileage evcalc'>Annual fuel cost</p>
        </div>
        <div className="col">
          <Button className='ev-fuel-cost-yearly to-center' textContent={evFuelCostyear + ' HUF/year'} />
        </div>
        <div className="col">
        < Button className='ice-fuel-cost-yearly to-center' textContent={iceFuelCostyear + ' HUF/year'} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='difference evcalc'>Savings on fuel cost</p>
        </div>
        <div className="col">
          <Button className='saving to-center' textContent={handleSaving() + ' HUF/year'} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='duration evcalc'>Expected price parity in</p>
        </div>
        <div className="col">
          <Button className='timespan to-center' textContent={handleTimespan() + ' year'} />
        </div>
      </div>
    </div>
  );
}

export default EVcalc;