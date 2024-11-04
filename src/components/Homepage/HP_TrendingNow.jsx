import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
      
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }

  function FirstSlie(props){
    return (
        <>
                <div class="card mb-2 h-100 bg-light mx-2" style={{minHeight:"210px"}}>
                    <div class="row justify-content-center">
                        <div class="col-2 my-auto">
                            <div class="row">
                                <a href="/pdp">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01904.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </a>
                            </div>
                        </div>
                        <div class="col-9 m-0 p-0">
                            <div class="card-body">
                                <a href="/pdp" className="text-decoration-none">
                                    <h5 class="dark-blue-hp m-0" style={{minHeight:"50px"}}>{props.title}</h5>
                                </a>
                                <div className="row fs-4 fw-bold text-success">
                                    <div className="col-12">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <span className="ms-2 text-small">4.9 (1,000)</span>
                                    </div>
                                </div>
                                <p class="card-text my-auto" style={{ minHeight: "48px" }}>Healthy aging, energy pathway support</p>
                                <div class="d-flex card-text text-end justify-content-between">
                                    <div class="my-auto fs-5"><span class="fw-bold text-danger">${props.price}</span> | <span
                                        class="text-decoration-line-through" style={{ fontSize: "16px" }}>${props.original}</span></div>
                                    <button class="btn btn-orange-white btn-sm fw-bold" onClick={props.addToCart}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        </>
    )
  }



function CustomSlide(props) {
    return (
            <div>
                <div class="card mb-2 h-100 bg-light mx-2" style={{minHeight:"210px"}}>
                    <div class="row justify-content-center">
                        <div class="col-2 my-auto">
                            <div class="row">
                                <a href="/pdp">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01904.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </a>
                            </div>
                        </div>
                        <div class="col-9 m-0 p-0">
                            <div class="card-body">
                                <a href="/pdp" className="text-decoration-none">
                                    <h5 class="dark-blue-hp m-0" style={{minHeight:"50px"}}>{props.title}</h5>
                                </a>
                                <div className="row fs-4 fw-bold text-success">
                                    <div className="col-12">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                        <span className="ms-2 text-small">4.9 (1,000)</span>
                                    </div>
                                </div>
                                <p class="card-text my-auto" style={{ minHeight: "48px" }}>Healthy aging, energy pathway support</p>
                                <div class="d-flex card-text text-end justify-content-between">
                                    <div class="my-auto fs-5"><span class="fw-bold text-danger">${props.price}</span> | <span
                                        class="text-decoration-line-through" style={{ fontSize: "16px" }}>${props.original}</span></div>
                                    <button class="btn btn-orange-white btn-sm fw-bold" onClick={props.addToCart}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

const ReactCarousel = (props) => {



    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    };
    return (
        <>
            <div class="row mb-2">
                <div class="col">
                    <h3 class="my-cart p-0 m-0">Trending Now</h3>
                </div>
            </div>
            <div className="row mb-5 justify-content-center">
                <div className="col-1 my-auto d-none d-lg-block text-center">
                    <div className="fs-3 card-arrow" onClick={previous}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div className="col-lg-10">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    <FirstSlie index={1} title={"ArthroMax® Advanced with NT2 Collagen™"} view={1} original={"18.00"} price={"12.00"} addToCart={props.addToCart}/>
                    <CustomSlide index={2} title={"Arthro-Immune Joint Support"} view={0} original={"15.00"} price={"9.45"} addToCart={props.addToCart}/>
                    <CustomSlide index={3} title={"Bioactive Milk Peptides"} view={0} original={"12.00"} price={"10.00"} addToCart={props.addToCart}/>
                    <CustomSlide index={4} title={"Black Cumin Seed Oil"} view={1} original={"15.00"} price={"11.50"} addToCart={props.addToCart}/>
                    <CustomSlide index={5} title={"Bone Restore Elite with Super Potent K2"} view={0} original={"26.00"} price={"15.75"} addToCart={props.addToCart}/>
                    <CustomSlide index={6} title={"Standardized Cistanche"} view={0} original={"33.50"} price={"27.25"} addToCart={props.addToCart}/>
                </Slider>
                </div>
                <div className="col-1 my-auto d-none d-lg-block text-center">
                    <div className="fs-3 card-arrow" onClick={next}>
                    <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactCarousel;