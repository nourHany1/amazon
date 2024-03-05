import React from 'react'
import '../style/checkoutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({id,image, title, price, rating}) => {
  const [{ basket }, dispatch] = useStateValue()
  const remove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }
  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct-image'>
      <img src={image} alt=''/>
      </div>
      <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'> {title} </p>
        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
          {Array(rating)
          .fill()
          .map((_,i) => (
          <StarIcon style={{color: "#ffa41c"}}/>
          ))
          }
        </div>
        <button onClick={remove}>Remove from Basket</button>

      </div>
    </div>
  )
}

export default CheckoutProduct