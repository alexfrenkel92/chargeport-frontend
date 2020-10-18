import React from 'react';
import './Products.css';

import formatCurrency from '../Shared/utility';
import Button from '../Shared/Button';

const Products = (props) => {

    return (
        <div>
        <div className='productsContainer'>
            {props.products.map(product =>
                <div className="card" key={product.id}>
                    <img src={product.img} alt={product.name} style={{ width: '100%' }}></img>
                    <h1>{product.name}</h1>
                    <p className="price">{formatCurrency(product.price)}</p>
                    <Button
                        className="addToCartButton"
                        textContent='Add to cart'
                        onClick={(e) => props.handleAddToCart(props.cartItems, product)}
                        />
                </div>
            )}
        </div>
            </div>
    )
}

export default Products