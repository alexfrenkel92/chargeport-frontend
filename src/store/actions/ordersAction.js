import * as actionTypes from './actionTypes';

const axios = require('axios');

export const postOrders = (cartItems) => {
    return dispatch => {
        axios.post(`https://chargeport-a2d28.firebaseio.com/orders.json`, {
            cartItems
        })
            .then(response => {
                dispatch({
                    type: actionTypes.ORDER_PRODUCTS,
                    payload: response.data
                })
                localStorage.clear()
                window.location.reload()
            })
            .catch(error => {
                console.log('Error in ordersAction.js: ' + error)
            })
    }
}