import React, { useState } from "react";
import EmptyCart from "../components/Cart/EmptyCart";

const Cart = (props) => {

    const [freeShipping, setFreeShipping] = useState(30)
    const [subTotal, setSubTotal] = useState(20)
    const [freeShippingProgress, setFreeShippingProgress] = useState(subTotal * 2)
    const [reachedFreeShipping, setReachedFreeShipping] = useState(false)

    const addToFreeShipping = () => {
        setFreeShippingProgress(freeShippingProgress + 10 * 2)
        setFreeShipping(freeShipping - 10)
        setSubTotal(subTotal + 10)
        if (freeShipping === 10) {
            setFreeShipping(0)
            setReachedFreeShipping(true)
        }
    }

    const removeToFreeShipping = () => {


    }

    return (
        <>
        {props.cartItems != 0 ?
        <>
            <div class="container">
            <div class="row mt-4 border border-end-0 border-start-0 border-top-0 border-2">
                    <div class="col">
                        <h2 class="my-cart p-0 m-0 fs-1">My Cart</h2>
                    </div>
                </div>
                <div class="row mt-3">
                    {/* <!-- Start body col --> */}
                    <div class="col-lg-8">
                        <div class="card mb-3 shadow-sm border-0 rounded-0" id="card">
                            <div class="row g-0">
                                <div class="col-lg-5 my-auto px-3">
                                    <div class="d-flex justify-content-center">
                                        <img class="pe-2 mt-1"
                                            src="https://mycart.lifeextension.com/assets/images/premier_rewards.svg" alt=""
                                            style={{ height: "90px" }} />
                                        <div class="mt-3 mb-2">
                                            <p class="roboto fs-3 text-uppercase p-0 m-0"
                                                style={{ color: "#0D95A5", fontWeight: "500" }}>Premier</p>
                                            <p class="text-uppercase rewards_style p-0 m-0">Rewards</p>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="text-center fs-5 p-0 m-0" id="done">

                                            <span id="demo_2" class="fw-bold"></span>
                                            {reachedFreeShipping ? <><small style={{ fontSize: "16px" }}>Your order ships</small> <span class='text-success fw-bold'>FREE</span>+<span class='my-cart fw-bold'>PREMIER</span></> :
                                                <><span class="fw-bold"><span class="fw-bold">${freeShipping}</span>.00 </span>until <span class="free_shipping fw-bold">FREE SHIPPING</span></>
                                            }
                                        </p>
                                        <div class="progress border border-secondary mt-2" role="progressbar"
                                            aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div id="progress_bar" class="progress-bar" style={{ width: `${freeShippingProgress}%` }}></div>
                                        </div>
                                        <p class="text-end me-2 fs-5">
                                            <small>Subtotal:</small> <span class="">${subTotal}</span>
                                            <span id="demo" class=""></span>
                                            <span class="">.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-7  my-auto ps-2" id="PR-col">
                                    <div class="card-body pr-col ">
                                        {reachedFreeShipping ? 
                                            <p class="pr-par">Activate <span class='fw-bold my-cart'>PREMIER</span> status at no extra cost to recieve <span class='fw-bold free_shipping'> $50 bonus</span> applied to this order. Get exclusive perks, Free Shipping, plus earn 4% LE Dollars back for 1 year.</p> :
                                            <p class="pr-par" id="PR_par"><span class="free_shipping fw-bold">PLUS</span>
                                                qualify for <span class="free_shipping fw-bold">PREMIER</span> for even more
                                                exclusive perks & 4% LE Dollars back for one year. <br /><a href="#"
                                                    class="fw-bold learn-more">Learn more <i class="fa-solid fa-circle-info "></i></a></p>}
                                        <div class="row justify-content-center">
                                            <div class="col-7 text-center">
                                                <button tabindex="0" class="btn btn-white-orange fw-bold w-100">ACTIVATE
                                                    NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="" />
                        {/* <!-- Item 1 --> */}
                        <div class="card mb-3  rounded-0">
                            <div class="row justify-content-center">
                                <div class="col-2 p-3">
                                    <div class="row">
                                        <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                            class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div class="card-body">
                                        <h5 class="free_shipping">Vitamin D3 with Sea-Iodine™</h5>
                                        <p class="card-text">125 mcg (5000 IU), 60 capsules | #01758</p>
                                        <div class="row">
                                            <div class="border border p-2 rounded  ms-2 bg-light">

                                                <div class="row my-auto fs-5">
                                                    <div class="col-6 my-auto">
                                                        <div class="row">
                                                            <div class="col-lg-5">
                                                                <label for="itemQty">
                                                                    <div class="ms-2 text-secondary" style={{ fontSize: "14px" }}>
                                                                        Qty:</div>
                                                                </label>
                                                                <div class="input-group input-group-sm">
                                                                    <button class="btn btn-outline-secondary px-2" type="button"
                                                                        id="button-addon1" onClick={removeToFreeShipping}><i
                                                                            class="fa-solid fa-minus"></i></button>
                                                                    <input id="itemQty" type="text"
                                                                        class="form-control text-center border-secondary"
                                                                        placeholder="1"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                    <button class="btn btn-outline-secondary px-2" type="button"
                                                                        id="button-addon2" onClick={addToFreeShipping}><i
                                                                            class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-6 text-end my-auto">
                                                        <div class="text-decoration-line-through" style={{ fontSize: "16px" }}>
                                                            $15.00</div>
                                                        <div class="fw-bold text-danger">$10.00</div>
                                                        <div class="text-danger" style={{ fontSize: "15px" }}>Save: 33%</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-8">
                                                <div class="form-check">
                                                    <input class="form-check-input border-secondary" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">Subscribe to

                                                        <span class="free-shipping fw-bold"> AutoShip</span> & <span
                                                            class="fw-bold text-danger">Save 33%</span><br />
                                                        <span class="learn-more"><a href="#" class="learn-more">Learn more <i class="fa-solid fa-circle-info "></i></a></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer text-end" style={{ fontSize: "14px" }}>
                                <a href="#" class="text-decoration-none"><i class="fa-solid fa-heart text-danger"></i> Add to Wishlist</a> | <a href="#" class="text-decoration-none"><i class="fa-solid fa-circle-xmark"></i> Remove</a>
                            </div>

                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="card mb-2 rounded-0">
                            <div class="row justify-content-center">
                                <div class="col-2 p-3">
                                    <div class="row">
                                        <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                            class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div class="card-body">
                                        <h5 class="free_shipping">Super Ubiquinol CoQ10 with Enhanced Mitochondrial Support™
                                        </h5>
                                        <p class="card-text">100 mg, 60 softgels | #01426</p>
                                        <div class="row">
                                            <div class="border border p-2 rounded ms-2 bg-light">
                                                <div class="form-check">
                                                    <input class="form-check-input border-secondary mt-2" type="checkbox" value=""
                                                        id="flexCheckDefault" checked />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        <span class="free-shipping fw-bold fs-5">AutoShip</span> & <span
                                                            class="fw-bold text-danger">Save 33%</span>
                                                    </label>
                                                </div>
                                                <div class="row my-auto fs-5">
                                                    <div class="col-6 my-auto">
                                                        <div class="row">
                                                            <div class="col-lg-5">
                                                                <label for="itemQty">
                                                                    <div class="ms-2 text-secondary" style={{ fontSize: "14px" }}>
                                                                        Qty:</div>
                                                                </label>
                                                                <div class="input-group input-group-sm">
                                                                    <button class="btn btn-outline-secondary px-2" type="button"
                                                                        id="button-addon1"><i
                                                                            class="fa-solid fa-minus"></i></button>
                                                                    <input id="itemQty" type="text"
                                                                        class="form-control text-center border-secondary"
                                                                        placeholder="1"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                    <button class="btn btn-outline-secondary px-2" type="button"
                                                                        id="button-addon2" onclick="myFunction()"><i
                                                                            class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                            {/* <!--  --> */}

                                                            <div class="col-lg-6">
                                                                <label htmlforor="floatingSelect">
                                                                    <div class="ms-2 text-secondary" style={{ fontSize: "14px" }}>
                                                                        Deliver every:</div>
                                                                </label>
                                                                <select
                                                                    class="form-select rounded-1 form-select-sm border-secondary"
                                                                    aria-label="Select Months" id="floatingSelect">
                                                                    <option>1 month</option>
                                                                    <option value="1">2 months</option>
                                                                    <option value="2">3 months</option>
                                                                    <option value="3">4 months</option>
                                                                </select>
                                                            </div>

                                                            {/* <!--  --> */}
                                                        </div>

                                                    </div>
                                                    <div class="col-6 text-end my-auto">
                                                        <div class="text-decoration-line-through" style={{ fontSize: "16px" }}>
                                                            $15.00</div>
                                                        <div class="fw-bold text-danger">$10.00</div>
                                                        <div class="text-danger" style={{ fontSize: "15px" }}>Save: 33%</div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 text-danger">

                                                    <i class="fa-solid fa-triangle-exclamation"></i> This item is currently on sale. Future shipments will be charged at the lowest price available at that time.

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="card-footer text-end" style={{ fontSize: "14px" }}>
                                <a href="#" class="text-decoration-none"><i class="fa-solid fa-heart text-danger"></i> Add to Wishlist</a> | <a href="#" class="text-decoration-none "><i class="fa-solid fa-circle-xmark"></i> Remove</a>
                            </div>

                        </div>
                        {/* <!-- End Items --> */}
                    </div>

                    {/* <!-- end body col --> */}

                    <div class="col-lg-4">
                        <div class="card mb-2 rounded-0">
                            <div class="card-body p-0 px-3 pt-3">
                                <h6 class="card-title fw-bold m-0">Promo Code: <span
                                    class="text-success fs-5 fw-bold">START5</span>
                                </h6>
                                <div class="">
                                    <div class="pe-2 mb-1 text-end ">
                                        <div class="">Add <span class="fw-bold text-success">$5.00</span> to qualify! <i
                                            type="button" class="fa-solid fa-chevron-right" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                            tabindex="0"></i></div>
                                    </div>
                                    <div class="progress border border-secondary" role="progressbar" aria-label="Basic example"
                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ height: "10px" }}>
                                        <div id="progress_bar" class="progress-bar" style={{ width: "60%" }}></div>
                                    </div>
                                    <p class="me-2 m-0 p-0"><span class="fw-bold text-success">$5 off $20</span> plus Free
                                        Shipping</p>
                                </div>
                            </div>
                            <div class="ms-3"><small class="learn-more fw-bold" type="button" tabindex="0">Terms and
                                Conditions</small></div>
                        </div>
                        <div class="card rounded-0">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Order Summary</h5>
                                <div class="d-flex justify-content-between border rounded-5 px-3 bg-light"
                                    style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary fw-bold m-0">Items Total (2)</div>
                                    <div>$20.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2 fst-italic" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0">Savings:</div>
                                    <div class=""></div>
                                </div>
                                <div class="d-flex justify-content-between px-3 fst-italic" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0 ps-3">Promo: START15</div>
                                    <div class="">-$5.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 fst-italic" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0 ps-3">Promo: START50</div>
                                    <div class="">-$5.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 fst-italic" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0 ps-3"></div>
                                    <div class="learn-more fw-bold">+ <small type="button" tabindex="0">Add Another Code</small>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2 border border-2 border-start-0 border-end-0"
                                    style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle  m-0 fw-bold">Subtotal</div>
                                    <div>$10.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0">Shipping</div>
                                    <div class="">$5.00</div>
                                </div>
                                <div class="d-flex justify-content-between ps-4" style={{ fontSize: "18px" }}>
                                    <div class="text-body-secondary"><span class="learn-more fw-bold" type="button"
                                        tabindex="0">Standard 3-5 days</span>
                                    </div>
                                    <div><small class="learn-more fw-bold pe-3" type="button" tabindex="0">Change</small></div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2 border border-2 border-start-0 border-end-0 bg-light"
                                    style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle m-0 fw-bold">Order Total</div>
                                    <div>$15.00</div>
                                </div>
                                <div class="card-footer mt-4 border rounded-0 d-none d-lg-block">
                                    <div class="row justify-content-center">
                                        <div class="d-flex justify-content-between px-3" style={{ fontSize: "18px" }}>
                                            <div class="card-subtitle  m-0 fw-bold">AMOUNT DUE:</div>
                                            <div class="fw-bold">$15.00</div>
                                        </div>
                                        <div class="col text-center">
                                            <button class="btn btn-orange-white fw-bold w-100">CHECKOUT</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer mt-4 border rounded-0 d-lg-none fixed-bottom bg-light">

                                    <div class="row justify-content-center">
                                        <div class="d-flex justify-content-between px-3">
                                            <div class="card-subtitle  m-0 fw-bold my-auto">AMOUNT DUE:</div>
                                            <div>
                                                <div class="fw-bold text-end" style={{ fontSize: "18px" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">$15.00 <i class="fa-solid fa-chevron-up"></i></div>
                                                <div class="text-danger text-end" style={{ fontSize: "15px" }}> Saved: $10.00</div>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <button class="btn btn-orange-white fw-bold w-100">CHECKOUT (2)</button>
                                        </div>
                                    </div>
                                    <div class="offcanvas offcanvas-bottom rounded-top-4 bottom-offCanvas" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Order Summary</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body small">
                                <div class="d-flex justify-content-between border rounded-5 px-3 bg-light"
                                    style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary fw-bold m-0">Items Total (2)</div>
                                    <div>$20.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2 fst-italic" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0">Total Savings:</div>
                                    <div class="">$10.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 fst-italic" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0 ps-3"></div>
                                    <div class="learn-more fw-bold">+ <small type="button" tabindex="0">Add Another Code</small>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2 border border-2 border-start-0 border-end-0"
                                    style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle  m-0 fw-bold">Subtotal</div>
                                    <div>$10.00</div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2" style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle text-body-secondary m-0">Shipping</div>
                                    <div class="">$5.00</div>
                                </div>
                                <div class="d-flex justify-content-between ps-4" style={{ fontSize: "18px" }}>
                                    <div class="text-body-secondary"><span class="learn-more fw-bold" type="button"
                                        tabindex="0">Standard 3-5 days</span>
                                    </div>
                                    <div><small class="learn-more fw-bold pe-3" type="button" tabindex="0">Change</small></div>
                                </div>
                                <div class="d-flex justify-content-between px-3 mt-2 border border-2 border-start-0 border-end-0 bg-light"
                                    style={{ fontSize: "18px" }}>
                                    <div class="card-subtitle m-0 fw-bold">Order Total</div>
                                    <div>$15.00</div>
                                </div>
                     
                                <div class="col text-center mt-3">
                                <div class="d-flex justify-content-between px-3">
                                            <div class="card-subtitle  m-0 fw-bold my-auto">AMOUNT DUE:</div>
                                            <div>
                                                <div class="fw-bold text-end" style={{ fontSize: "18px" }} >$15.00</div>
                                            </div>
                                        </div>
                                            <button class="btn btn-orange-white fw-bold w-100">CHECKOUT (2)</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- OffCanvas --> */}
            <div class="offcanvas offcanvas-end m-lg-4 rounded-4" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Add Item</h5>
                    <button type="button" class="btn-close me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <div class="bg-light-blue py-3 px-3 rounded-3 shadow mb-4">
                        <div class="mb-1 text-center" style={{ fontSize: "14px" }}>Add <span
                            class="fw-bold text-success">$5.00</span> and get <span class="fw-bold">$5 off $20</span> +
                            <span class="fw-bold">FREE SHIPPING</span>
                        </div>
                        <div class="progress border border-secondary" role="progressbar" aria-label="Basic example"
                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ height: "10px" }}>
                            <div id="progress_bar" class="progress-bar" style={{ width: "60%" }}></div>
                        </div>
                    </div>
                    {/* <!-- Card 1 --> */}
                    <div class="card border-0 mb-2">
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
                                        <button class="btn btn-orange-white">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 2 --> */}
                    <hr class="m-0 p-0" />
                    <div class="card border-0 mb-2">
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
                                        <button class="btn btn-orange-white">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <hr class="m-0 p-0"/>
                    <div class="card border-0 mb-2">
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
                                        <button class="btn btn-orange-white">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Cards --> */}
                    <hr />
                </div>
            </div>
            </>
    :

    <EmptyCart addToCart={props.addToCart} />

        }
        </>
    )
}

export default Cart;