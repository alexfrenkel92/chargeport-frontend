import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ORDER_PRODUCTS:
            return {
                ...state,
                orders: action.payload
            }
            default:
                return state;
    }
}

export default reducer;