
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
function App() {
  const promise = loadStripe('pk_live_51Oq1dSBVQ8tmOLHAqyoVVFlrbvPWVl1T7nJBTFXxDbYIkcuUprS7DmFuVfm6ImkbL9NmJICJqHiVBneS87Cpotbd00SBjdwfQa')

  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('the user is',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[dispatch])
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payment' element={<Elements stripe={promise}><Payment/></Elements>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
