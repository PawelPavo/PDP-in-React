import React from "react";
import { useEffect, useState } from "react";


const LoaderGridCard = () => {

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


                <div className="col mt-4">
                    <div className="card" aria-hidden="true">
                        <span className="placeholder-glow">
                            <span className="placeholder col-7 rounded " style={{ width: "100%", height: "200px" }}></span>
                        </span>
                        <div className="card-body">
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


            </>
        );
    }


    if (!show) {
        return (
            <>
                
                <div className="col mt-4">
                    <div className="card">
                        
                        <div className="d-flex justify-content-between mt-2">
                            <div type="button" role="button" className="border-0 ms-2">
                                <i className="fa-regular fa-heart text-danger border p-2 rounded-5 shadow-sm"></i>
                            </div>
                            <img className="me-2" src="https://www.lifeextension.com/-/media/lifeextension/about/product-development/best-icons.png" alt="" style={{ width: "75px" }} />
                        </div>
                        <div className="over-the-image-container">
                            <a href="">
                                <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png" className="img-fluid rounded image-hover" alt="..." style={{ width: "65px", marginLeft: "0%" }} />
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

            </>
        );
    }
}


export default LoaderGridCard;