import * as actionTypes from './actionTypes'
import schoku from '../../img/TYPE2-SCHUKO-1F-16A.jpg'
import type2132 from '../../img/TYPE2-1F-32A.jpg'
import type2332 from '../../img/TYPE2-3F-32A.jpg'
import wallbox from '../../img/TYPE2-3F-32A-WALLBOX.jpg';

const products = [
    {
        id: 1,
        name: 'TYPE2-SCHUKO-1F-16A',
        price: 250,
        img: schoku
    },
    {
        id: 2,
        name: 'TYPE2-1F-32A',
        price: 200,
        img: type2132
    },
    {
        id: 3,
        name: 'TYPE2-3F-32A',
        price: 250,
        img: type2332
    },
    {
        id: 4,
        name: 'TYPE2-3F-32A-WALLBOX',
        price: 400,
        img: wallbox
    }
]

export const fetchProducts = ()  => {
    return { 
        type: actionTypes.FETCH_PRODUCTS, 
        payload: products
    }
} 