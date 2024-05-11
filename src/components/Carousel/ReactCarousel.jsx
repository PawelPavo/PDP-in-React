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



function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
            <div {...otherProps}>
                <div className="card h-100 shadow-sm ms-2">
                    <div className="d-flex justify-content-between mt-2">
                        <div type="button" role="button" className="border-0 ms-2">
                            <i className="fa-regular fa-heart text-danger border p-2 rounded-5 shadow-sm"></i>
                        </div>
                        <img className="me-2" src="https://www.lifeextension.com/-/media/lifeextension/about/product-development/best-icons.png" alt="" style={{ width: "75px" }} />
                    </div>
                    <div className="over-the-image-container">
                        <a href="">
                        <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png" className="img-fluid rounded image-hover" alt="..." style={{ width: "65px", marginLeft:"35%" }} />
                        <div className="bg-white shadow-sm rounded px-2 bottom-right border">
                            <div className="row text-success">
                                <div>
                                    <span className="fw-bold ">4.9</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-star-fill mx-2 pb-1" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                    <span className="text-small">(120)</span>
                                </div>
                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="p-2 mt-1">
                        <a href="" className="text-decoration-none"><h6 className="dark-blue">NAD+ Cell Regenerator™ and Resveratrol Elite™</h6></a>
                        <p className="card-text text-dark">Healthy aging, energy pathway support, advanced formula</p>
                        <p className="card-text dark-blue fw-bold">60 vegetarian capsules</p>
                    </div>
                    <div className="d-flex card-text text-end justify-content-center mt-2">
                        <div className="fs-5"><span className="text-decoration-line-through fs-6 dark-blue">$10.00</span> | <span className="fs-5 fw-bold text-danger" style={{ fontFize: "16px" }}>$5.00</span> | <span className="fs-6 text-danger">Save 50%</span>
                        </div>
                    </div>
                    <div className="card-footer bg-white border-0 mt-2"><div className="d-flex card-text justify-content-center mb-2">
                        <button className="btn btn-orange-white w-100">Add To Cart</button>
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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
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
                    slidesToShow: 1.10,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.10,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <>
        
            <div className="row px-3">
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
                <div className="col-1 my-auto d-none d-lg-block  text-center">
                    <div className="fs-3 card-arrow" onClick={next}>
                    <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactCarousel;