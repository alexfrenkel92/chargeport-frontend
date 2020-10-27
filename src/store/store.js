import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import * as actionTypes from './actions/actionTypes';
import reduxReset from 'redux-reset';
import cartReducer from './reducers/cartReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk), reduxReset(cartReducer)))


   
  // let nrOfProductsInCart = cartItems.reduce((ac, current) =>
  //   ac + current.count, 0)
  
  // const cartItems = localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : [];
  
  // let initialState = {
  //     cart: {
  //       items: cartItems
  //     }
  // };
