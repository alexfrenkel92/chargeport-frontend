import React, { useState } from 'react';
import './EVcalc.css';
import Button from '../components/Button';

function EVcalc () {
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
    if (!evData.evFuelPrice, evData.evConsumption, evData.evPrice) timespan = Math.round((evData.evPrice - iceData.icePrice) / (iceFuelCostyear));
    if (mileageData.mileage, evData.evPrice, !evData.evConsumption || evData.evConsumption, !evData.evFuelPrice || evData.evFuelPrice) timespan = 0;
    if (evFuelCost100km > 0) {
      timespan = Math.round((evData.evPrice - iceData.icePrice) / (iceFuelCostyear - evFuelCostyear));
    } 
    if (Math.sign(timespan) === -1) timespan = '0';
    return timespan;
  }

  return (
    <div className='evcalc-wrapper'>
      <div className='evcalc-text'>
        <p>Az alábbi számológép segíségével kiszámolhatod, hogy üzemanyagköltség és éves futásteljesítmény alapján hány év alatt kerül egy költségszintre egy elektromos és belsőégésű motorral szerelt jármű.</p>
        <p>A vételár és üzemanyagköltségen kívül más költség nem került számításba.</p>
        <p>Az időszakot lerövidítheti:</p>
        <li>otthoni napelemes rendszeről való töltés, amivel az üzemanyagköltség 0Ft/kW köré süllyedhet;</li>
        <li>a minnél nagyobb éves futásteljesítmény.</li>
      </div>
      <div className='evcalc-main'>
        <p className='titleEV'>Elektromos</p>
        <p className='titleICE'>Belsőégésű</p>
        <p className='price evcalc'>Vételár</p>
        <p className='mileage evcalc'>Éves futásteljesítmény</p>
        <p className='fuel-cost evcalc'>Üzemanyagköltség</p>
        <p className='consumption evcalc'>Fogyasztás</p>
        <p className='fuel-cost-100km evcalc'>Üzemanyag költsége/100km</p>
        <p className='year-mileage evcalc'>Éves üzemanyagköltség</p>
        <p className='difference evcalc'>Megtakarítás</p>
        <p className='duration evcalc'>Árparitás várható időtartalma</p>

        <textarea className='mileage-merged' value={mileageData.mileage} onChange={handleMileage} placeholder='pl. 25.000km' />
        <p className='mileage-merged-km'>km</p>
        <textarea className='ev-price' value={evData.evPrice} onChange={handleEVPrice} placeholder='pl. 8.000.000' />
        <p className='ev-price-Ft'>Ft</p>
        <textarea className='kW-price' value={evData.evFuelPrice} onChange={handleEVFuelPrice} placeholder='pl 40Ft' />
        <p className='kW-price-Ft'>Ft/kW</p>
        <textarea className='consumption-ev' value={evData.evConsumption} onChange={handleEVConsumption} placeholder='pl 16' />
        <p className='consumption ev-kw'>kW/100km</p>
        <textarea className='ice-price' value={iceData.icePrice} onChange={handleICEPrice} placeholder='pl. 5.000.000Ft' />
        <p className='ice-price-Ft'>Ft</p>
        <textarea className='l-price' value={iceData.iceFuelPrice} onChange={handleICEFuelPrice} placeholder='pl 380Ft' />
        <p className='l-price-Ft'>Ft/l</p>
        <textarea className='consumption-ice' value={iceData.iceConsumption} onChange={handleICEConsumption} placeholder='pl 7' />
        <p className='consumption ice-l'>l/100km</p>

        <Button className='ev-fuel-cost-100km to-center' textContent={evFuelCost100km + ' Ft/100km'} />
        <Button className='ev-fuel-cost-yearly to-center' textContent={evFuelCostyear + ' Ft/év'} />

        <Button className='ice-fuel-cost-100km to-center' textContent={iceFuelCost100km + ' Ft/100km'} />
        <Button className='ice-fuel-cost-yearly to-center' textContent={iceFuelCostyear + ' Ft/év'} />

        <Button className='saving to-center' textContent={handleSaving() + ' Ft/év'} />
        <Button className='timespan to-center' textContent={handleTimespan() + ' év'} />

      </div>
    </div>
  );
}

export default EVcalc;
