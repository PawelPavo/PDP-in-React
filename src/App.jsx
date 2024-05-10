import { React, useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar.jsx';
import PDP from './Views/PDP.jsx';
import LoginModal from "./components/Modal/LoginInModal.jsx"
import SignUp from './Views/SignUp.jsx';
import CartRoute from './components/Loader.js';
import WellnessBlog from './Views/WellnessBlog.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const App = () => {
  const [daySupply] = useState(60)
  const [counter, setCounter] = useState(1);
  const [autoshipActive, setAutoshipActive] = useState(false)
  const [login, setLogin] = useState(false)
  const [cartItems, setCartItems] = useState(0)
  const [greeting, setGreeting] = useState("Hello")
  const [user, setUser] = useState("")

  const Msg = ({}) => (
    <div className='mt-2'>
      <div className='row'>
        <div className="card mb-2 border-0">
        <div class="alert border alert-success m-0 p-1 text-center">
          Successs! Item added to cart!
        </div>
          <div className="row justify-content-center mt-2">
            <div className="col-2 my-auto">
              <div className="row">
                <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                  class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
              </div>
            </div>
            <div className="col-9 my-auto mx-1">
                <p className="free_shipping m-0 p-0">Vitamin D3</p>
                <p class="text-extra-small m-0 p-0">125 mcg (5000 IU), 60 capsules, #01758</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <Link to="/cart">
          <button className='btn btn-orange-white w-75'>View Cart</button>
        </Link>
      </div>
    </div>

  );

  var today = new Date()
  var curHr = today.getHours()

  useEffect(() => {
    if (curHr < 12) {
      setGreeting('Good Morning')
    } else if (curHr < 18) {
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Evening')
    }
  }, [curHr])

  const onSubmnit = (e) => {
    e.preventDefault()
    setUser(e.target.value)
  }

  const handleLogin = () => {
    setLogin(!login)
    if (user.search("@") === -1 && user !== String("")) {
      setUser(user)
    } else if (user === String("")) {
      setUser("Customer")
    } else {
      setUser(user.substring(0, user.indexOf("@")))
    }
  }

  const handleLogOut = () => {
    setLogin(!login)
    setUser("")
  }

  const changeAutoship = () => {
    setAutoshipActive(!autoshipActive)
  }

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const manualQtyInput = (e) => {
    setCounter(Number(e.target.value))
  }

  const addToCart = () => {
    setCartItems(counter)
    console.log(counter + " item(s) added")
    const notify = () => toast(<Msg />, {
    });
    notify();
  }

  return (
    <BrowserRouter>
            <LoginModal greeting={greeting} login={login} handleLogin={handleLogin} cartItems={cartItems} user={user} onSubmnit={onSubmnit} handleLogOut={handleLogOut}/>
            <ToastContainer autoClose={8000}/>
      <div className="sticky-top bg-white pt-2 pb-2 site-header">
      <NavBar login={login} handleLogin={handleLogin} cartItems={cartItems} greeting={greeting} user={user} onSubmnit={onSubmnit} handleLogOut={handleLogOut} />

      </div>
      <div className="banner text-center no-gutters">
        <p>FREE SHIPPING on orders $50+</p>
      </div>
      <Routes>
        <Route path="/" element={
        <PDP
            greeting={greeting} 
            ogin={login} 
            handleLogin={handleLogin} 
            cartItems={cartItems} 
            user={user} onSubmnit={onSubmnit} 
            handleLogOut={handleLogOut}
            counter={counter}
            daySupply={daySupply}
            increase={increase}
            decrease={decrease}
            manualQtyInput={manualQtyInput}
            addToCart={addToCart}
            autoshipActive={autoshipActive}
            changeAutoship={changeAutoship}/>
        }/>
          <Route path="/cart" element={<CartRoute cartItems={cartItems} addToCart={addToCart}/>}/>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/wellness" element={<WellnessBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


