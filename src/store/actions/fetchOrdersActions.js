import * as actionTypes from './actionTypes';
import backendUrl from '../../services/backendLink';

const axios = require('axios');

export const fetchOrders = () => {
    return dispatch => {
        axios.get(`${backendUrl}/api/orders`)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: actionTypes.FETCH_ORDERS,
                    payload: response.data
                })
            })
    }
}