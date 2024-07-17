import React, {useEffect} from "react";
import ReviewStars from "../ReviewStars/ReviewStars";

const BestResult = () => {


    const [show, setShow] = React.useState(true);

    useEffect(() => {
        let showTimer = setTimeout(() => setShow(false), 3000);
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
        return(
        <>
        
                <div className="col mt-3 mb-5">
                    <div className="card mb-3  rounded shadow bg-light-blue ">
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
                </div>
        </>
        )
    }
}

export default BestResult;