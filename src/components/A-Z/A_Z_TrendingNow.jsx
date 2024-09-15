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
            <div class="card mx-2 p-2 bg-light" style={{minHeight:"200px"}}>
                <div class="row justify-content-center">
                    <div class="col-3 my-auto">
                        <div class="row justify-content-center">
                            <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                        </div>
                    </div>
                    <div class="col-8 m-0 p-0">
                        <div class="card-body">
                            <a href="#" className="add_unit_name fs-6">
                            <div className="row post-desc" style={{height:"55px"}}>{props.title}</div>
                            </a>
                            <div class="row justify-content-between px-3">
                                <div class="my-auto text-center mb-2"><span class="fw-bold text-danger">$5.00</span> | <span
                                    class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span>
                                </div>
                                <button class="btn btn-orange-white btn-sm fw-bold" onClick={props.addToCart}>Add To Cart</button>
                                
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
                <div class="card-footer bg-white border-0 p-0">
                    {props.view==1&&<div className="border rounded-5 text-center p-1 shadow-sm bg-warning-subtle text-small">Viewed 784 times in the last 6 hours</div>}
                    {props.purchase==1&&<div className="border rounded-5 text-center p-1 shadow-sm bg-primary-subtle text-small">Last purchased Nov 24, 2023</div>}
                    {props.current==1&&<div className="border rounded-5 text-center p-1 shadow-sm bg-info-subtle text-small">Currently in 127 carts</div>}
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
                <div className="col-10">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    <CustomSlide index={1} title={"ArthroMax® Advanced with NT2 Collagen™"} view={1} current={0} purchase={0}/>
                    <CustomSlide index={2} title={"Arthro-Immune Joint Support"} view={0} current={1} purchase={0}/>
                    <CustomSlide index={3} title={"Bioactive Milk Peptides"} view={0} current={0} purchase={1}/>
                    <CustomSlide index={4} title={"Black Cumin Seed Oil"} view={1} current={0} purchase={0}/>
                    <CustomSlide index={5} title={"Bone Restore Elite with Super Potent K2"} view={0} current={1} purchase={0}/>
                    <CustomSlide index={6} title={"Standardized Cistanche"} view={0} current={1} purchase={0}/>
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