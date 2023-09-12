import { React, useState } from 'react';
import ProductImageCard from './components/MainProdImageCard/ProductImageCard.jsx';
import ReviewStars from './components/ReviewStars/ReviewStars.jsx';
import AddToCartDesktop from './components/AddToCart/AddToCartDesktop.jsx';
import AddToCartMobile from './components/AddToCart/AddToCartMobile.jsx';
import SupplementsByHealhGoal from './components/SupplementsByHealthGoal/SupplementsByHealthGoal.jsx';




const App = () => {

  const [daySupply] = useState(60)
  const [counter, setCounter] = useState(1);
  const [autoshipActive, setAutoshipActive] = useState(false)


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
    console.log(counter + " item(s) added")
  }

  return (
    <>
      <div className="container border mb-3">
        <h1>This is nav</h1>
      </div>
      <div className="banner text-center no-gutters">
        <p>FREE SHIPPING on orders $50+</p>
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
              </div>
              {/* /Details */}

            </div>

          <div className="row border">
            
            <SupplementsByHealhGoal />
          </div>

          </div>
          {/* /Main Col 9 */}

          {/* Add To Cart Column */}
          <div className="col-md-3">

            {/* /Desktop Only Add To Cart */}
            <div className="row d-none d-md-block">
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
