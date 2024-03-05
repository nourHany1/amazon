import React from 'react';
import '../style/home.css';
import Product from './Product';
import products from '../data/products.json'

const Home = () => {

  return (
    <div className='home'>
      <div className='home-container'>
          <img
            className="home-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        <div className='home-row'>
          {products && products.slice(0, 2).map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>

        <div className="home-row">
          {products && products.slice(2, 5).map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
        <div className="home-row">
          {products && products.slice(5, 6).map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
