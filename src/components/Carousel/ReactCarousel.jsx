import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Diversity1 } from "@mui/icons-material";


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



function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
        <div {...otherProps}>
                        <div class="card mb-2 me-2 shadow-sm">
                            <div class="row justify-content-center">
                            <div class="col-2 my-auto">
                                <div class="row">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </div>
                            </div>
                            <div class="col-9 m-0 p-0">
                                <div class="card-body">
                                    <h5 class="free_shipping">Vitamin D3 with Sea-Iodine™</h5>
                                    <p class="card-text">125 mcg (5000 IU), 60 capsules, #01758</p>
                                    <div class="d-flex card-text text-end justify-content-between">
                                        <div class="my-auto fs-5"><span class="fw-bold text-danger">$5.00</span> | <span
                                            class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span></div>
                                        <button class="btn btn-orange-white btn-sm" onClick={props.addToCart}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
       
    );
}

const ReactCarousel = () => {



    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <>
        <div className="row  p-0 m-0 fs-2 mt-5">Related Products</div>
            <div className="slider-container row mb-5 justify-content-center py-2">
                <div className="col-1 my-auto d-none d-xl-block text-center">
                <div className="fs-3 car-arrow" onClick={previous}>
                <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div className="col-lg-10">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <CustomSlide index={1} />
                    <CustomSlide index={2} />
                    <CustomSlide index={3} />
                    <CustomSlide index={4} />
                    <CustomSlide index={5} />
                    <CustomSlide index={6} />
                </Slider>
                </div>
                <div className="col-1 my-auto d-none d-xl-block  text-center">
                    <div className="fs-3 car-arrow" onClick={next}>
                    <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactCarousel;