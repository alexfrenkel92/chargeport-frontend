import reducer from './productReducer';
import * as actionTypes from '../actions/actionTypes';

describe('product reducer', () => {
    it('return initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    it('products should fetch', () => {
        const fetchedProductsAction = {
            type: actionTypes.FETCH_PRODUCTS,
            payload: {id: 1, name: "TYPE2-SCHUKO-1F-16A", price: 250}
        }
        expect(reducer({}, fetchedProductsAction)).toEqual({
            items: {id: 1, name: "TYPE2-SCHUKO-1F-16A", price: 250}
        })
    })
})
