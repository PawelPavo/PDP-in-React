import React from "react";
import { useEffect, useState } from "react";
import ReviewStars from "../../ReviewStars/ReviewStars";


const LoaderListCard = () => {

    const [show, setShow] = React.useState(true);

    useEffect(() => {
        let showTimer = setTimeout(() => setShow(false), 2500);
        return () => {
            clearTimeout(showTimer);
        };
    }, []);

    if (show) {
        return (
            <>

                <div class="card mb-3 mt-3">
                    <div class="row g-0">
                        <div class="col-md-4 placeholder-glow">
                            <span className="placeholder col-7 rounded" style={{width:"100%", height:"100%"}}></span>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 className="card-title placeholder-wave">
                                    <span className="placeholder col-6 rounded"></span>
                                </h5>
                                <p class="card-text placeholder-wave">
                                    <span className="placeholder col-7 rounded"></span>
                                    <span className="placeholder col-4 rounded"></span>
                                    <span className="placeholder col-4 rounded"></span>
                                    <span className="placeholder col-6 rounded"></span>
                                    <span className="placeholder col-8 rounded"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }


    if (!show) {
        return (
            <>
                
                <div className="col mt-3">
                    <div className="card mb-3  rounded d-none d-lg-block">
                        <div className="row justify-content-center">
                            <div className="col-lg-2 p-3">
                                <div className="row justify-content-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "100px" }} />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-8 p-2 mt-1 ">
                                            <a href="" className="text-decoration-none"><h6 className="dark-blue">NAD+ Cell Regenerator™ and Resveratrol Elite™</h6></a>
                                            <p className="card-text text-dark">Healthy aging, energy pathway support, advanced formula</p>
                                            <p className="card-text dark-blue fw-bold">60 vegetarian capsules</p>
                                            <ReviewStars></ReviewStars>
                                        </div>
                                        <div className="col-lg-4">
                                            <select className="form-select form-select-sm mb-2">
                                                    <option>1 unit @ $18.00 | $0.60/count</option>
                                                    <option>4 units @ $16.50 | $0.55/count</option>
                                            </select>
                                            <p className="fs-3 dark-blue fw-bold m-0 p-0">$18.00</p>
                                            <p className="text-body-secondary">$0.60/count | 30 Day Supply</p>
                                            <button className="btn btn-orange-white w-100">Add To Cart</button>
                                        </div>
                                    </div>
                                    <hr  className="d-none d-lg-block "/>
                                    <div className="d-flex mt-2 d-none d-lg-block">
                                    <a href="#" className="link me-2">Energy Management Supplements</a> | <a href="#" className="link ms-2">Anti-Aging & Longevity Supplements</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* mobile */}

                    <div className="card mb-2 d-lg-none p-2 shadow-sm">
                    <h5 className="free_shipping mx-1">Vitamin D3 with Sea-Iodine™</h5>
                    <p class="card-text">125 mcg (5000 IU), 60 capsules, #01758</p>
                        <div className="row justify-content-center">
                            
                            <div class="col-2 my-auto me-1">
                                <div class="row">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </div>

                            </div>
                            
                            <div class="col-9 m-0 p-0">
                                
                                <div class="card-body p-0 m-0">
                                  
                                        <div className="text-success ms-1 py-1">
                                            <span className="fw-bold ">4.9</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-star-fill mx-2 pb-1" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                            <span className="text-small">(120)</span>
                                        </div>
                                   

                             
                                    <div className="col-lg-4">
                                            <select className="form-select form-select-sm mb-2">
                                                    <option>1 unit @ $18.00 | $0.60/count</option>
                                                    <option>4 units @ $16.50 | $0.55/count</option>
                                            </select>
                                    </div>
                                    <div class="d-flex card-text text-end justify-content-between">
                                        <div class="my-auto fs-5"><span class="fw-bold">
                                            $18.00</span> | <span
                                            class="text-decoration-line-through text-danger" style={{ fontSize: "16px" }}>$22.00</span>
                                        </div>
                                        <button class="btn btn-orange-white">Add To Cart</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}


export default LoaderListCard;