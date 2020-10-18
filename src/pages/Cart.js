import React from 'react'
import Button from '../components/Shared/Button';
import classes from './Cart.module.css';
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";

const Cart = (props) => {

    const { cartItems } = props;

    let totalPrice = cartItems.reduce((ac, current) =>
        ac + current.price * current.count, 0);
    let nrOfProductsInCart = cartItems.reduce((ac, current) =>
        ac + current.count, 0)
    return (
        <div className={`${classes.cartWrapper} container`}>
            {cartItems.length === 0
                ? "Your cart is empty"
                : <div className={classes.cartTitle}>
                    Number of products in cart: {nrOfProductsInCart}
                </div>}
            {cartItems.length > 0 && (
                <div className={classes.cartContainer}>
                    {cartItems.map(product =>
                        <div className={classes.cartCard} key={product.id}>
                            <img src={product.img} alt={product.name} style={{ width: '100%' }}></img>
                            <h1>{product.name}</h1>
                            <p> Qty: {product.count}</p>
                            <p> Price: {product.price * product.count}$</p>
                            <Button
                                className={classes.cartProductRemoveButton}
                                textContent='Remove from Cart'
                                // onClick={(event) => props.handleRemoveFromCart(event, product)}
                                onClick={() => props.removeFromCart(props.cartItems, product)}
                            />
                        </div>
                    )}
                </div>
            )}
            <div className={classes.cartPriceCheckoutButton}>
                <p>Total: {totalPrice}$</p>
                <Button
                    className={classes.checkoutButton}
                    textContent='Checkout'
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps, { removeFromCart })(Cart);