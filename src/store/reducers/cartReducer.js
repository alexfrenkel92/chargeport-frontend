import * as actionTypes from '../actions/actionTypes';

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

let initialState = {
    items: cartItems
}; 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                items: action.payload.cartItems
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                items: action.payload.cartItems
            }
        default:
            return state
    }
}

export default reducer;