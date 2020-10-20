import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './CheckoutForm.css';
import Button from '../Shared/Button';

const CheckoutForm = (props) => {

    const history = useHistory();

    const [input, setInput] = useState({
        name: '',
        city: '',
        deliveryMethod: 'Economy'
    })

    const handleName = (e) => {
        setInput({ name: e.target.value, city: input.city, deliveryMethod: input.deliveryMethod })
    }
    const handleCity = (e) => {
        setInput({ name: input.name, city: e.target.value, deliveryMethod: input.deliveryMethod })
    }
    const handleDeliveryMethod = (e) => {
        setInput({ name: input.name, city: input.city, deliveryMethod: e.target.value })
    }

    const handleValidation = () => {
        let formIsValid = true;
        if (!input.name) {
            formIsValid = false;
        }
        if (!input.city) {
            formIsValid = false;
        }
        return formIsValid;
    }

    function navigateOrders() {
        history.push('./orders')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            props.handleSendOrder();
            localStorage.removeItem("cartItems")
            navigateOrders()
        } else {
            alert('Please fill all fields')
        }
    }

    return (
        <form className='formWrapper' onSubmit={handleSubmit}>
            <div>
                <h5>Please provide delivery info</h5>
                <p>Name: </p>
                <input
                    name='name'
                    value={input.name}
                    placeholder='Name'
                    onChange={handleName}
                />
            </div>
            <div>
                <p>City: </p>
                <input
                    name='city'
                    value={input.city}
                    placeholder='City'
                    onChange={handleCity}
                />
            </div>
            <div>
                <p>Delivery method:</p>
                <select
                    value={input.deliveryMethod}
                    onChange={handleDeliveryMethod}
                    placeholder='Please choose'>
                    <option value="Economy">Economy</option>
                    <option value="Fastest">Fastest</option>
                </select>
            </div>
            <Button
                className='finishOrderButton'
                onClick={handleSubmit}
                textContent='Place Order' />
        </form>
    )
}

export default CheckoutForm
