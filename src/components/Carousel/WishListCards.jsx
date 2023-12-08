import React from "react";

const WishListCards = (props) => {
    return(
        <>
                        <hr></hr>
                <div className="row">
                    <div class="row mb-2">
                        <div class="col">
                            <h2 class="my-cart p-0 m-0 fs-5">Inspired by your Wishlists</h2>
                        </div>
                    </div>
                    {/* <!-- Card 1 --> */}
                    <div className="col-md-4">
                        <div class="card mb-2 p-2">
                            <div class="row justify-content-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "60px" }} />
                                <div class="card-body">
                                    <h6 class="free_shipping">Vitamin D3 with Sea-Iodine™</h6>
                                    <div class="card-text  justify-content-between">
                                        <div class="my-auto fs-5"><span class="fw-bold text-danger">$5.00</span> | <span
                                            class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span>
                                        </div>
                                        <div className="row px-4">
                                        <button class="btn btn-orange-white btn-sm mb-2" onClick={props.addToCart}>Add To Cart</button>
                                        <button class="btn add_to_list btn-sm" onClick={props.addToCart}>Add Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Card 2 --> */}

                    <div className="col-md-4">
                        <div class="card mb-2 p-2">
                            <div class="row justify-content-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "60px" }} />
                                <div class="card-body">
                                    <h6 class="free_shipping">Vitamin D3 with Sea-Iodine™</h6>
                                    <div class="card-text  justify-content-between">
                                        <div class="my-auto fs-5"><span class="fw-bold text-danger">$5.00</span> | <span
                                            class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span>
                                        </div>
                                        <div className="row px-4">
                                        <button class="btn btn-orange-white btn-sm mb-2" onClick={props.addToCart}>Add To Cart</button>
                                        <button class="btn add_to_list btn-sm" onClick={props.addToCart}>Add Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="col-md-4">
                        <div class="card mb-2 p-2">
                            <div class="row justify-content-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                        class="img-fluid rounded-start" alt="..." style={{ width: "60px" }} />
                                <div class="card-body">
                                    <h6 class="free_shipping">Vitamin D3 with Sea-Iodine™</h6>
                                    <div class="card-text  justify-content-between">
                                        <div class="my-auto fs-5"><span class="fw-bold text-danger">$5.00</span> | <span
                                            class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span>
                                        </div>
                                        <div className="row px-4">
                                        <button class="btn btn-orange-white btn-sm mb-2" onClick={props.addToCart}>Add To Cart</button>
                                        <button class="btn add_to_list btn-sm" onClick={props.addToCart}>Add Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- End Cards --> */}
                </div>
        </>
    )
}

export default WishListCards;