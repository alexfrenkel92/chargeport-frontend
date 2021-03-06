import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { connect, useSelector, useDispatch } from 'react-redux';
import backendUrl from '../../services/backendLink';
import Button from '../../components/Shared/Button';
import classes from './Orders.module.css';
import * as actions from '../../store/actions/index';

const Orders = (props) => {

    // /// REDUX /// NOT USED
    // const fetchedOrders = useSelector(state => {
    //     return state.fetchOrders.orders
    // })
    // const dispatch = useDispatch();
    // const fetchOrders = useCallback(() => dispatch(actions.fetchOrders()))
    // /// REDUX ///
    
    const handleDeleteOrderHistory = () => {
        axios.delete(`${backendUrl}/api/orders`)
            .then(() => {
                window.location.reload()
            })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            props.fetchOrders()
        }, 300);
        return () => clearTimeout(timer)
    }, [])

    let pastOrders = !props.fetchedOrders ? null :
        <div className={classes.ordersContainer}>
            {props.fetchedOrders.map(order => {
                return (
                    <div className={classes.cartCard} key={order.order_id}>
                        <img src={require(`../../img/${order.product_name}.jpg`)} alt={order.product_name} style={{ width: '100%' }}></img>
                        <h1>{order.product_name}</h1>
                        <p> Qty: {order.product_count}</p>
                        <p> Unit price: {order.product_price}$</p>
                        <p> Total price: {order.product_price * order.product_count}$</p>
                    </div>
                )
            })}
        </div>


    return (
        <div className={`${classes.ordersWrapper} container`}>
            <div className={classes.topRows}>
                <p className={classes.ordersTitle}>My past orders</p>
                <Button
                    className={classes.deleteHistoryBtn}
                    textContent='Delete orders history'
                    onClick={handleDeleteOrderHistory} />
            </div>
            {pastOrders}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fetchedOrders: state.fetchOrders.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders())
    }
}

// export default Orders;

export default connect(mapStateToProps, mapDispatchToProps)(Orders);