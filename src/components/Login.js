import React, { useState } from "react";
import "../style/login.css";
import { Link, useNavigate} from "react-router-dom";
import { auth } from "./firebase";
const Login = () => {
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = e => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log(authUser);
      if (history){
        history('/')
      }
    })
    .catch(error => {
      alert(error.message);
    });
  }
  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser);
        if (history){
          history('/')
        }
      })
      .catch(error => {
        alert(error);
      });
    setEmail('');
    setpassword('');
  }
  return (
    <div className="login">
      <Link to="/">
        <div className="login-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </div>
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>e-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="login-signButton" type="submit" onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login-registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
