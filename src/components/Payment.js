import React, { useState } from 'react'
import '../style/payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './Reducer'
const Payment = () => {
  const history = useNavigate()
  const [{basket, user}] = useStateValue()
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        history('/')
  }
  const handleChange = e => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout (<Link to={'/checkout'}>{basket?.length} items</Link>)</h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
          {basket?.map(item => (
            <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment-price'>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded} className='btn'>
                  <span>{processing ? <p>processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment