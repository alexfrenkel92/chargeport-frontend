import React from 'react';

function ConsumptionData ({ daily_consumption, weekly_consumption }) {
  return (
    <div className='consumption-data'>
      {daily_consumption}
      {weekly_consumption}
    </div>
  );
}



export default ConsumptionData;
