import React from 'react';
import classes from './Marketplace.module.css';
import Market from '../components/Marketplace/Marketplace'

const Marketplace = () => {
    return (
        <div className={`${classes.marketplace} container`}>
            <Market />
        </div>
    )
}

export default Marketplace
