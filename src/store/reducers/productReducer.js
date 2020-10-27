import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
            default:
                return state
    }
}

export default reducer;