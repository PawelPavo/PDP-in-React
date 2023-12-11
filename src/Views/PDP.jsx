import React from "react";
import Overview from '../components/Body/Overview.jsx';
import LoginModal from "../components/Modal/LoginInModal.jsx"
import ProductImageCard from '../components/MainProdImageCard/ProductImageCard.jsx';
import ReviewStars from '../components/ReviewStars/ReviewStars.jsx'
import AddToCartDesktop from '../components/AddToCart/AddToCartDesktop.jsx';
import AddToCartMobile from '../components/AddToCart/AddToCartMobile.jsx';
import SupplementsByHealhGoal from '../components/SupplementsByHealthGoal/SupplementsByHealthGoal.jsx';
import Versions from "../components/SupplementsByHealthGoal/Versions.jsx";

const PDP = (props) => {



    return (
        <>
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
                    counter={props.counter}
                    daySupply={props.daySupply}
                    increase={props.increase}
                    decrease={props.decrease}
                    manualQtyInput={props.manualQtyInput}
                    addToCart={props.addToCart}
                    autoshipActive={props.autoshipActive}
                    changeAutoship={props.changeAutoship}
                  />
                </div>
                {/* /Mobile Add To Cart */}
                <p>Many of us don't get enough vitamin D from sunshine and diet alone—but we need this nutrient for healthy bones and a strong immune system. Our high-potency supplement fills in the gaps.</p>
                <div className="row">
              <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item rounded-0 border-start-0 border-end-0" >
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-light fs-6 rounded-0 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Available versions:
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="row p-3">
                    <Versions />
                    </div>
                  </div>
                </div>
              </div>
            </div>    
            <div className="row mt-3 ms-2">
                      <div className="row mb-1">Supplements by Health Goal:</div>
                      <SupplementsByHealhGoal />
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
                counter={props.counter}
                daySupply={props.daySupply}
                increase={props.increase}
                decrease={props.decrease}
                manualQtyInput={props.manualQtyInput}
                addToCart={props.addToCart}
                autoshipActive={props.autoshipActive}
                changeAutoship={props.changeAutoship}
              />
            </div>
            {/* /Desktop Only Add To Cart */}
  
          </div>
        </div>
        
        {/* /Main Col 9 */}
        <LoginModal greeting={props.greeting} login={props.login} handleLogin={props.handleLogin} cartItems={props.cartItems} user={props.user} onSubmnit={props.onSubmnit} handleLogOut={props.handleLogOut}/>
      </div>
        </>
    )
}

export default PDP;