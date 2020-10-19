import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Orders.module.css';

const Orders = (props) => {

    useEffect(() => {
        props.fetchOrders()
    }, [])

    console.log(props.fetchedOrders)

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
            <p className={classes.ordersTitle}>My past orders</p>
                {pastOrders}
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetchedOrders: state.orders.orders
})

export default connect(mapStateToProps)(Orders);
