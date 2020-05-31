import React from 'react';

function consumptionData({ daily_consumption, weekly_consumption }) {
    const view = { daily_consumption: daily_consumption, weekly_consumption: weekly_consumption };

    return (
        <div className='consumption-data'>
            {view.daily_consumption}
            {view.weekly_consumption}
        </div>
    )
}

export default consumptionData;
