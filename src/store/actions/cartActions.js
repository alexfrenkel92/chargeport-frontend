import * as actionTypes from './actionTypes';

export const addToCart = (items, product) => (dispatch) => {
    // const cartItems = items.slice();
    const cartItems = [ ...items ];
    let productAlradyInCart = false;
    cartItems.forEach(item => {
        if (item.id === product.id) {
            productAlradyInCart = true;
            item.count++;
        }
    });
    if (!productAlradyInCart) {
        cartItems.push({ ...product, count: 1 })
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: { cartItems }
    });
}

export const removeFromCart = (items, product) => (dispatch) => {
        const cartItems = items.slice().filter(item => item.id !== product.id)
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return dispatch ({
            type: actionTypes.REMOVE_FROM_CART,
            payload: { cartItems }
        })
}