import React from 'react';
import './Details.css';
import Button from './Button';

function Details() {
    return (
        <article className='details'>
            <div className='details-title'>
                <h2>Köszöntjük az oldalunkon!</h2>
            </div>
            <p>Az elektromobilitás a jövő egyik vezető iparága, amely meghatározó szerepet fog játszani az előttünk álló évtizedek környezetbarát közlekedésének fejlődésében, a következő generációk mindennapjainak formálásában.</p>
            <p>Az ChargePort Zrt. elsődleges küldetése a felhasználók számára komfortos szolgáltatást biztosító töltőhálózat kialakítása, olyan országos infrastruktúra felépítése, mely hosszútávon képes hatékonyan működni, fejlődni. A töltőhálózat fejlesztésének legfontosabb hatása, hogy elősegíti az elektromos gépjárművek használói körének bővülését, mivel egyre több potenciális érdeklődő számára válik elérhetővé a közlekedés ezen új, környezettudatos formája.</p>
            <Button className='learnMoreButton' textContent='Bővebben' />
        </article>
    )
}

export default Details;
