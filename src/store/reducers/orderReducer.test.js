import reducer from './orderReducer';
import * as actionTypes from '../actions/actionTypes';

describe('order reducer', () => {
    it('return initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    it('post orders', () => {
        const postOrdersAction = {
            type: actionTypes.POST_ORDER,
            payload: { mockOrder: 'mockItem' }
        }
        expect(reducer({}, postOrdersAction)).toEqual({
            orders: { mockOrder: 'mockItem' }
        })
    })
    it('fetch orders', () => {
        const postOrdersAction = {
            type: actionTypes.FETCH_ORDERS,
            payload: { mockOrder: 'mockItem' }
        }
        expect(reducer({}, postOrdersAction)).toEqual({
            orders: { mockOrder: 'mockItem' }
        })
    })
})