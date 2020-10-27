import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import classes from './Marketplace.module.css';
import Products from '../../components/Marketplace/Products';
import { fetchProducts } from "../../store/actions/productActions";
import { addToCart } from "../../store/actions/cartActions";
import Button from '../../components/Shared/Button';

const Marketplace = (props) => {

    const history = useHistory();


    let fetchedProducts = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : props.fetchedProducts
    
    
    useEffect(() => {
        props.fetchProducts()
    }, [])

    let productComponent = null;
    if (fetchedProducts) {
        productComponent = (
            <Products
                products={fetchedProducts}
                handleAddToCart={props.addToCart}
                cartItems={props.cartItems}
            />
        )
    }

    const navigatoToOrders = () => {
        history.push('/cart')
    }

    let nrOfProductsInCart = props.cartItems.reduce((ac, current) =>
        ac + current.count, 0)

    return (
        <div className={`${classes.marketplace} container`}>
            {productComponent}
            <div className={classes.marketWrapper}>
                <div>
                    Number of products in cart: {nrOfProductsInCart}
                </div>
                <Button
                    className={classes.buttonToOrders}
                    textContent='Continue to Checkout'
                    onClick={navigatoToOrders}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fetchedProducts: state.products.items,
        cartItems: state.cart.items,
    }
}

export default connect(mapStateToProps, { fetchProducts, addToCart })(Marketplace);


// class Market extends Component {

//     // state = {
//     //     cartItems: [],
//     // }

//     componentDidMount() {
//         this.props.fetchProducts();
//     }

//     componentWillMount() {
//         if (localStorage.getItem('cartItems')) {
//             this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
//         }
//     }

//     // handleAddToCart = (event, product) => {
//     //     this.setState(state => {
//     //         const itemsInCart = state.cartItems;
//     //         let productAlradyInCart = false;
//     //         itemsInCart.forEach(item => {
//     //             if (item.id === product.id) {
//     //                 productAlradyInCart = true;
//     //                 item.count++;
//     //             }
//     //         });
//     //         if (!productAlradyInCart) {
//     //             itemsInCart.push({ ...product, count: 1 })                
//     //         }
//     //         localStorage.setItem('cartItems', JSON.stringify(itemsInCart));
//     //         return itemsInCart;
//     //     })
//     // }

//     // handleRemoveFromCart = (event, product) => {
//     //     this.setState(state => {
//     //         const cartItems = this.state.cartItems.filter(item => item.id !== product.id)
//     //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     //         return {cartItems}
//     //     })
//     // }

//     render() {
//         let productComponent = null;
//         if (this.props.fetchedProducts) {
//             productComponent = (
//                 <Products
//                     products={this.props.fetchedProducts}
//                     handleAddToCart={this.props.addToCart}
//                     cartItems={this.props.cartItems}
//                 />
//             )
//         }

//         return (
//             <div>
//                 {productComponent}
//                 <div>
//                     Number of products in cart: {this.props.cartItems.length}
//                 </div>
//                 <Button 
//                     className='market-button'
//                     textContent='Continue to Checkout'
//                     // onClick={this.navigatoToOrders}
//                     />
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         fetchedProducts: state.products.items,
//         cartItems: state.cart.items
//     }
// }

// // const mapDispatchToProps = dispatch => {
// //     return {
// //         // onFetchProducts: () => dispatch({type: actionTypes.FETCH_PRODUCTS}),
// //         onAddToCart: (product) => dispatch({type: actionTypes.ADD_PRODUCT, productName: product}),
// //         onRemoveFromCart: (product) => dispatch({type: actionTypes.REMOVE_PRODUCT, productName: product})
// //     }
// // }

// export default connect(mapStateToProps, {fetchProducts, addToCart})(Market);