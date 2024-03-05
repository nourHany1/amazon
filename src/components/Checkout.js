import React from 'react'
import '../style/checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
const Checkout = () => {
  const [{basket, user}] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
        <div>
          <h5 className='checkout-hey'>Hello, {user?.email}</h5>
          <h2 className='checkout-title'>Your Shopping Basket</h2>
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
      <div className='checkout-right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout