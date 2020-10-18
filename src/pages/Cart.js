import React, { useState } from 'react'
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";
import { postOrders } from '../store/actions/ordersAction';
import Button from '../components/Shared/Button';
import classes from './Cart.module.css';
import Modal from '../components/Modal/Modal';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const Cart = (props) => {

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleSendOrder = () => {
        setShowModal(false)
        props.postOrders(cartItems)
    }
    const { cartItems } = props;

    let totalPrice = cartItems.reduce((ac, current) =>
        ac + current.price * current.count, 0);
    let nrOfProductsInCart = cartItems.reduce((ac, current) =>
        ac + current.count, 0)

    let cartContent = cartItems.length === 0 ? null :
        <div className={classes.cartPriceCheckoutButton}>
            <p>Total: {totalPrice}$</p>
            <Button
                className={classes.checkoutButton}
                textContent='Checkout'
                onClick={handleOpenModal}
            />
        </div>

    return (
        <div>
            <div className={`${classes.cartWrapper} container`}>
                {cartItems.length === 0
                    ? <p className={classes.cartTitle}>Your cart is empty</p>
                    : <p className={classes.cartTitle}>
                        Number of products in cart: {nrOfProductsInCart}
                    </p>}
                {cartItems.length > 0 && (
                    <div className={classes.cartContainer}>
                        {cartItems.map(product =>
                            <div className={classes.cartCard} key={product.id}>
                                <img src={require(`../img/${product.name}.jpg`)} alt={product.name} style={{ width: '100%' }}></img>
                                <h1>{product.name}</h1>
                                <p> Qty: {product.count}</p>
                                <p> Price: {product.price * product.count}$</p>
                                <Button
                                    className={classes.cartProductRemoveButton}
                                    textContent='Remove from Cart'
                                    onClick={() => props.removeFromCart(props.cartItems, product)}
                                />
                            </div>
                        )}
                    </div>
                )}
                {cartContent}
            </div>
            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                className={'modalWrapper'} >
                <CheckoutForm handleCloseModal={handleCloseModal} handleSendOrder={handleSendOrder}/>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps, { removeFromCart, postOrders })(Cart);