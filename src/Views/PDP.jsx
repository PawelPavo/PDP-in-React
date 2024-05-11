import React from "react";
import Overview from '../components/Body/Overview.jsx';
import LoginModal from "../components/Modal/LoginInModal.jsx"
import ProductImageCard from '../components/MainProdImageCard/ProductImageCard.jsx';
import ReviewStars from '../components/ReviewStars/ReviewStars.jsx'
import AddToCartDesktop from '../components/AddToCart/AddToCartDesktop.jsx';
import AddToCartMobile from '../components/AddToCart/AddToCartMobile.jsx';
import SupplementsByHealhGoal from '../components/SupplementsByHealthGoal/SupplementsByHealthGoal.jsx';
import Versions from "../components/SupplementsByHealthGoal/Versions.jsx";
import ReactCarousel from "../components/Carousel/ReactCarousel.jsx";


const PDP = (props) => {



    return (
        <>
        <div className="container">
        <div className="row mx-md-5">
          {/* Main Col 9 */}
          <div className="col-md-9">
            <div className="row">
              {/* Mobile Title, reviews, short description*/}
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
                <h1 className="dark-blue fw-bold d-none d-lg-block m-0 fs-2" >Vitamin D3</h1>
                <h2 className="dark-blue d-none d-lg-block m-0 fs-5 fw-normal">Immune, bone & whole body health</h2>
                <p className="dark-blue fw-bold my-2">125 mcg (5000 IU), 60 softgels Item # 01713</p>
                <div className="d-none d-lg-block my-2"><ReviewStars />
                </div>

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
                <hr class="text-secondary"/>
                <div className="row my-auto mx-1">
                  <div className="col-lg-4 ps-5">
                    <p className="m-0 p-0"><em>Other versions of this product are available:</em></p>
                  </div>
                  <div className="col-lg-7 border shadow-sm btn rounded-3 my-auto py-2 btn btn-outline-light-custom text-dark bg-white" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Shop other available versions <span className="ps-2"><i class="fa-solid fa-chevron-down"></i></span>

                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="row p-3">
                    <Versions />
                    </div>
                  </div>
              </div>
        
            </div>
            <hr class="text-secondary"/>
            <div className="row mt-3 ms-2">
                      <div className="row mb-1">Supplements by Health Goal:</div>
                      <SupplementsByHealhGoal />
                    </div>
              </div>
                          
              {/* /Details */}
            </div>


            <Overview></Overview>
            <div className="row ms-3 pb-2 fs-2 mt-4">Related Products</div>
            <ReactCarousel></ReactCarousel>
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
      <div className="text-center no-gutters border border-start-0 border-end-0 pt-3 mt-5">
        <p>FOOTER</p>
      </div>
        </>
    )
}

export default PDP;