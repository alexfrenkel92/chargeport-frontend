import * as actionTypes from './actionTypes';
import backendUrl from '../../services/backendLink';

const axios = require('axios');

export const fetchProducts = () => {
    return dispatch => {
        axios.get(`${backendUrl}/api/products`)
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_PRODUCTS,
                    payload: response.data
                })
                localStorage.setItem('products', JSON.stringify(response.data))
                console.log(response.data)
            })
    }
}