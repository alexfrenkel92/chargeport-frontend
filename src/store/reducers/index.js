import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import fetchOrdersReducer from './fetchOrdersReducer';


export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer,
    fetchOrders: fetchOrdersReducer
})
