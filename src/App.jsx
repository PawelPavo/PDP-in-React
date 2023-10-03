import { React, useState, useEffect } from 'react';
import ProductImageCard from './components/MainProdImageCard/ProductImageCard.jsx';
import ReviewStars from './components/ReviewStars/ReviewStars.jsx';
import AddToCartDesktop from './components/AddToCart/AddToCartDesktop.jsx';
import AddToCartMobile from './components/AddToCart/AddToCartMobile.jsx';
import SupplementsByHealhGoal from './components/SupplementsByHealthGoal/SupplementsByHealthGoal.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Overview from './components/Body/Overview.jsx';




const App = () => {

  const [daySupply] = useState(60)
  const [counter, setCounter] = useState(1);
  const [autoshipActive, setAutoshipActive] = useState(false)
  const [login, setLogin] = useState(false)
  const [cartItems, setCartItems] = useState(0)
  const [greeting, setGreeting] = useState("Hello")
  const [user, setUser] = useState("")

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
  }

  return (
    <>
      <div className="sticky-top bg-white pt-2">
      <NavBar login={login} handleLogin={handleLogin} cartItems={cartItems} greeting={greeting} user={user} onSubmnit={onSubmnit} handleLogOut={handleLogOut} />
      <div className="banner text-center no-gutters">
        <p>FREE SHIPPING on orders $50+</p>
      </div>
      </div>
      <div className="container">
        <div className="row mx-md-5">
          {/* Main Col 9 */}
          <div className="col-md-9">
            <div className="row">
              {/* Mobile Title, reviews, short description*/}
              <p className="dark-blue m-0 fw-bold d-lg-none" style={{ color: "#539800" }}>BEST SELLER</p>
              <h1 className="dark-blue fw-bold d-lg-none m-0 fs-2">Vitamin D3</h1>
              <h2 className="dark-blue d-lg-none fs-5 m-0 fw-normal">Immune, bone & whole body health</h2>
              <div className="d-lg-none mt-1"><ReviewStars /></div>
              {/* /Mobile Title, reviews, short description*/}

              {/* Image */}
              <div className="col-md-3">
                <ProductImageCard />
              </div>

              {/* Detials */}
              <div className="col-md-9">
                <p className="fw-bold d-none d-lg-block m-0" style={{ color: "#539800" }}>BEST SELLER</p>
                <h1 className="dark-blue fw-bold d-none d-lg-block m-0 fs-2" >Vitamin D3</h1>
                <h2 className="dark-blue d-none d-lg-block m-0 fs-5 fw-normal">Immune, bone & whole body health</h2>
                <p className="dark-blue fw-bold my-2">125 mcg (5000 IU), 60 softgels Item # 01713</p>
                <div className="d-none d-lg-block my-2"><ReviewStars /></div>

                {/* Mobile Add To Cart */}
                <div className="row d-md-none">
                  <AddToCartMobile
                    counter={counter}
                    daySupply={daySupply}
                    increase={increase}
                    decrease={decrease}
                    manualQtyInput={manualQtyInput}
                    addToCart={addToCart}
                    autoshipActive={autoshipActive}
                    changeAutoship={changeAutoship}
                  />
                </div>
                {/* /Mobile Add To Cart */}
                <p>Many of us don't get enough vitamin D from sunshine and diet alone—but we need this nutrient for healthy bones and a strong immune system. Our high-potency supplement fills in the gaps.</p>
                <div className="row">
              <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item shadow-sm" >
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-light fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Available versions:
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="row p-3">
                    <SupplementsByHealhGoal />

                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
              {/* /Details */}
            </div>
            <Overview></Overview>
          </div>
          {/* /Main Col 9 */}

          {/* Add To Cart Column */}
          <div className="col-md-3">

            {/* /Desktop Only Add To Cart */}
            <div className="row d-none d-md-block make-me-sticky">
              <AddToCartDesktop
                counter={counter}
                daySupply={daySupply}
                increase={increase}
                decrease={decrease}
                manualQtyInput={manualQtyInput}
                addToCart={addToCart}
                autoshipActive={autoshipActive}
                changeAutoship={changeAutoship}
              />
            </div>
            {/* /Desktop Only Add To Cart */}
  
          </div>
        </div>
        
        {/* /Main Col 9 */}

      </div>
    </>
  );
};

export default App;


