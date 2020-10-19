import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.POST_ORDER:
            return {
                ...state,
                orders: action.payload
            }
        case actionTypes.FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
            default:
                return state;
    }
}

export default reducer;