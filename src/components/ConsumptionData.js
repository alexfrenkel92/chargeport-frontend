import React from 'react';

function consumptionData ({ dailyConsumption, weeklyConsumption }) {
  return (
    <div className='consumption-data'>
      {dailyConsumption}
      {weeklyConsumption}
    </div>
  );
}

export default consumptionData;
