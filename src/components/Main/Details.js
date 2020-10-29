import React from 'react';
import './Details.css';

function Details () {
  return (
    <article className='details'>
      <div className='details-content'>
        <p>In the future more and more electriv vehicles will be cruising in our cities and on our roads. 
          The future of transport is electric and electric transport needs great charging infrastructure.</p>
        <p>At Chargeport we help you to make that infrastructure possible by providing you with everything 
          you need to offer a seamless charging experience at your home or to your customers. When everything works together, EV charging is better for everyone.</p>
        <p>Most networks offer a mix of slow, fast and rapid charging options, categorized in 3 levels:</p>
        <div className='bullet-points'>
          <li>3.6kW AC - Level 1</li>
          <li>22kW AC - Level 2</li>
          <li>50kW DC - Level 3</li>
        </div>
      </div>
    </article>
  );
}

export default Details;
