import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
let nrOfProductsInCart = cartItems.reduce((ac, current) =>
  ac + current.count, 0)
const initialState = { cart: { items: cartItems } };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(thunk))
) 