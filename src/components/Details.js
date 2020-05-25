import React from 'react';
import './Details.css';
import Button from './Button';

function Details() {
    return (
        <article className='details'>
            <div className='details-title'>
                <h2>Köszöntjük az oldalunkon!</h2>
            </div>
            <div className='details-content'>
                <p>Az ChargePort Zrt. elsődleges küldetése a felhasználók számára komfortos szolgáltatást biztosító töltőhálózat kialakítása, olyan országos infrastruktúra felépítése, mely hosszútávon képes hatékonyan működni, fejlődni.</p>
                <p>A töltőhálózat fejlesztésének legfontosabb hatása, hogy elősegíti az elektromos gépjárművek használói körének bővülését, mivel egyre több potenciális érdeklődő számára válik elérhetővé a közlekedés ezen új, környezettudatos formája.</p>
                <p>Cégünk az alábbi 3 típusú utcai töltő telepítésével foglalkozik:</p>
                <div className='bullet-points'>
                    <li>3.6kW AC</li>
                    <li>22kW AC</li>
                    <li>50kW DC</li>
                </div>
                {/* <Button className='learnMoreButton' textContent='Bővebben' /> */}
            </div>
        </article>
    )
}

export default Details;
