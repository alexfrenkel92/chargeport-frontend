import * as actionTypes from './actionTypes';
import backendUrl from '../../services/backendLink';

const axios = require('axios');

export const postOrders = (cartItems) => {
    return dispatch => {
        axios.post(`${backendUrl}/api/orders`, {
            cartItems
        })
            .then(response => {
                console.log(cartItems)
                dispatch({
                    type: actionTypes.POST_ORDER,
                    payload: response
                })
            })
            .catch(error => {
                console.log('Error in ordersAction.js: ' + error)
            })
    }
}
