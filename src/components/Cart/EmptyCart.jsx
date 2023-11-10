import React from "react";
import image from "../../Images/Add to Cart-amico.svg"



const EmptyCart = (props) => {
    return (
        <>
            <div className="container">
            <div class="row mt-4 border border-end-0 border-start-0 border-top-0 border-2">
                    <div class="col">
                        <h2 class="my-cart p-0 m-0 fs-1">My Cart</h2>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-9">
                        <div className="card border-0" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-4">
                                    <img src={image} class="img-fluid rounded-start" alt="Keep Shopping" style={{width:"200px"}}/>
                                </div>
                                <div class="col-md-6 my-auto">
                                    <div className="card-body text-center">
                                        <h3 className="my-3"><em>Your cart is empty.</em></h3>
                                        <a href="/" className="btn my-warning rounded px-4 shadow-sm">Start Shopping</a>
                                    </div>
                                    <p> Choose from popular categories like <a href="/" className="text-decoration-none">Energy</a>, <a href="/" className="text-decoration-none">Heart</a>, <a href="/" className="text-decoration-none">Brain</a> and <a href="/" className="text-decoration-none">more</a>. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body">
                            <div class="d-flex">
                                        <img class="pe-2 mt-1"
                                            src="https://www.lifeextension.com/-/media/lifeextension/icons/supplement-quizzes/essentials/essentials.svg" alt=""
                                            style={{ height: "90px" }} />
                                        <div class="mt-3 mb-2">
                                            <p class="roboto fs-3 text-uppercase p-0 m-0"
                                                style={{ color: "#0D95A5", fontWeight: "500" }}>Essentials</p>
                                            <p class="text-uppercase rewards_style p-0 m-0 fs-3">Quiz</p>
                                        </div>
                                    </div>
                                <p className="card-text">Take a quiz to get custom supplement recommendations.</p>
                                <a href="#" class="learn-more fw-bold fs-5" aria-label="Take the essentials quiz now">Take Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div class="row">
                        <div class="col">
                            <h2 class="my-cart p-0 m-0">Trending Now</h2>
                        </div>
                    </div>
                    {/* <!-- Card 1 --> */}
                    <div className="col-lg-4">
                        <div class="card mb-2">
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
                    {/* <!-- Card 2 --> */}

                    <div className="col-lg-4">
                    <div class="card mb-2">
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
                                            class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span>
                                            </div>
                                            <button class="btn btn-orange-white btn-sm" onClick={props.addToCart}>Add To Cart</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="col-lg-4">

                    
                    <div class="card mb-2">
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
                    {/* <!-- End Cards --> */}
                </div>



            </div>
        </>
    )
}

export default EmptyCart;