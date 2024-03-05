import React from "react";
import "../style/header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {
  const [{basket,user}] = useStateValue()
  const handleAuth = () => {
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to='/'>
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        />
      </Link>

      <div className="header-search">
        <input className="header-search-input" type="search" />
        <SearchIcon className="header-search-icon"/>
      </div>
      <div className="header-nav">
        <Link to={ !user &&'/login'}>
        <div onClick={handleAuth} className="header-option">
          <span className="header-option-one">Hello,{user? user.email : "Guest"}</span>
          <span className="header-option-two">{user?'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <div className="header-option">
          <span className="header-option-one">Returns</span>
          <span className="header-option-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-one">Your</span>
          <span className="header-option-two">Prime</span>
        </div>
          <Link to='/checkout'>
            <div className="header-option-basket">
              <ShoppingBasketIcon className="header-option-basket-one"/>
              <span className="header-option-basket-two">{basket?.length}</span>
            </div>
          </Link>
      </div>
    </div>
  );
};

export default Header;
