import React from "react";

const TrendingNow =(props) => {
    return (
        <>
                    <div className="row">
                    <div class="row mb-2">
                        <div class="col">
                            <h3 class="my-cart p-0 m-0">Trending Now</h3>
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
                        <div class="card-footer bg-white border-0">
                            <div className="border rounded-5 text-center p-1 shadow-sm bg-warning-subtle">Viewed 784 times in the last 6 hours</div>
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
                        <div class="card-footer bg-white border-0">
                            <div className="border rounded-5 text-center p-1 shadow-sm bg-primary-subtle">Last purchased Nov 24, 2023</div>
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
                        <div class="card-footer bg-white border-0">
                            <div className="border rounded-5 text-center p-1 shadow-sm bg-secondary-subtle">Currently in 127 carts</div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- End Cards --> */}
                </div>
        </>
    )
}

export default TrendingNow;