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
          Az alábbi számológép segíségével kiszámolhatod, hogy üzemanyagköltség és éves futásteljesítmény alapján hány év alatt kerül egy költségszintre egy elektromos és belsőégésű motorral szerelt jármű. 
          A vételár és üzemanyagköltségen kívül más költség nem került számításba. 
          Az időszakot lerövidítheti:
          </span>
          <ul>
          <li>otthoni napelemes rendszeről való töltés, amivel az üzemanyagköltség 0Ft/kW köré süllyedhet;</li>
          <li>a minnél nagyobb éves futásteljesítmény.</li>
          </ul>
        </div>
      </div>
      <div className="row calculator">
        {/* <div class="col">
        </div> */}
        <div className="col title">
          <p className='titleEV'>Elektromos</p>
        </div>
        <div className="col title">
          <p className='titleICE'>Belsőégésű</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='mileage evcalc'>Éves futásteljesítmény</p>
        </div>
        <div className="col">
          <textarea className='mileage-merged' value={mileageData.mileage} onChange={handleMileage} placeholder='pl. 25.000km' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='price evcalc'>Vételár</p>
        </div>
        <div className="col">
          <textarea className='ev-price' value={evData.evPrice} onChange={handleEVPrice} placeholder='pl. 8 millió Ft' />
        </div>
        <div className="col">
          <textarea className='ice-price' value={iceData.icePrice} onChange={handleICEPrice} placeholder='pl. 5 millió Ft' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='fuel-cost evcalc'>Üzemanyagköltség</p>
        </div>
        <div className="col">
          <textarea className='kW-price' value={evData.evFuelPrice} onChange={handleEVFuelPrice} placeholder='pl 40Ft/kW' />
        </div>
        <div className="col">
          <textarea className='l-price' value={iceData.iceFuelPrice} onChange={handleICEFuelPrice} placeholder='pl 380Ft/l' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='consumption evcalc'>Fogyasztás</p>
        </div>
        <div className="col">
          <textarea className='consumption-ev' value={evData.evConsumption} onChange={handleEVConsumption} placeholder='pl 16kW/100km' />
        </div>
        <div className="col">
          <textarea className='consumption-ice' value={iceData.iceConsumption} onChange={handleICEConsumption} placeholder='pl 7l/100km' />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <p className='fuel-cost-100km evcalc'>Üzemanyag költsége/100km</p>
        </div>
        <div className="col">
          <Button className='ev-fuel-cost-100km to-center' textContent={evFuelCost100km + ' Ft/100km'} />
        </div>
        <div className="col">
          <Button className='ice-fuel-cost-100km to-center' textContent={iceFuelCost100km + ' Ft/100km'} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='year-mileage evcalc'>Éves üzemanyagköltség</p>
        </div>
        <div className="col">
          <Button className='ev-fuel-cost-yearly to-center' textContent={evFuelCostyear + ' Ft/év'} />
        </div>
        <div className="col">
        < Button className='ice-fuel-cost-yearly to-center' textContent={iceFuelCostyear + ' Ft/év'} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='difference evcalc'>Megtakarítás</p>
        </div>
        <div className="col">
          <Button className='saving to-center' textContent={handleSaving() + ' Ft/év'} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='duration evcalc'>Árparitás várható időtartalma</p>
        </div>
        <div className="col">
          <Button className='timespan to-center' textContent={handleTimespan() + ' év'} />
        </div>
      </div>
    </div>
  );
}

export default EVcalc;