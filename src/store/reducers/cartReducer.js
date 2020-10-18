import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
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