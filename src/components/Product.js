import React from "react";
import "../style/product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from '@mui/icons-material/Star';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id) => {
    // dispatch the item into the data layer
    console.log(basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon style={{color: "#ffa41c"}}/>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;