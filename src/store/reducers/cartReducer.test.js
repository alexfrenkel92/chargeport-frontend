import reducer from './cartReducer';
import * as actionTypes from '../actions/actionTypes';

describe('cart reducer', () => {
    it('return initial state', () => {
        expect(reducer({ items: [] }, {})).toEqual({ items: [] })
    })
    // it('items added to cart', () => {
    //     const cartAction = {
    //         type: actionTypes.ADD_TO_CART,
    //         payload: { cartitems: 'mockItem'}
    //     }
    //     expect(reducer({}, cartAction)).toEqual({
    //         items: { cartitems: 'mockItem'}
    //     })
    // })
})


//  items: { cartitems: {
//     order_id: 350, 
//     product_id: 2, 
//     product_name: "TYPE2-1F-32A",
//     product_price: 200, 
//     product_count: 3
// }}
