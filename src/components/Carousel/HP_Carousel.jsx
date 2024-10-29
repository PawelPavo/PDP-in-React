import React from "react";

function HP_Carousel(props) {
    return (

        <>
            <div className="my-auto me-2">
                <div className="fs-3 card-arrow">
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
            </div>
            {/* <!-- Card 1 --> */}
            <div className="col">
                <div class="card mb-2 h-100 bg-light-blue position-relative">
                    <div className="over-the-image-container">
                        <a href="/pdp">
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill border  border-dark  bg-white dark-blue text-small">
                                Our Recommendation
                            </span>

                        </a>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-2 my-auto">
                            <div class="row">
                                <a href="/pdp">
                                <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01904.png"
                                    class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </a>
                            </div>
                        </div>
                        <div class="col-9 m-0 p-0">
                            <div class="card-body">
                                <a href="/pdp" className="text-decoration-none">
                                <h5 class="dark-blue-hp">NAD+ Cell Regenerator</h5>
                                </a>
                                <div className="row fs-4 fw-bold text-success">
                                                <div className="col-12">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <span className="ms-2 text-small">4.9 (1,000)</span>
                                                </div>
                                            </div>
                                <p class="card-text my-auto" style={{ minHeight: "48px" }}>Healthy aging, energy pathway support</p>
                                <div class="d-flex card-text text-end justify-content-between">
                                    <div class="my-auto fs-5"><span class="fw-bold text-danger">$12.00</span> | <span
                                        class="text-decoration-line-through" style={{ fontSize: "16px" }}>$18.00</span></div>
                                    <button class="btn btn-orange-white btn-sm fw-bold" onClick={props.addToCart}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Card 2 --> */}

            <div className="col px-lg-4 d-lg-block d-none">
                <div class="card mb-2 h-100">
                    <div class="row justify-content-center">
                        <div class="col-2 my-auto">
                            <div class="row">
                                <a href="/pdp">
                                <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                    class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </a>
                            </div>
                        </div>
                        <div class="col-9 m-0 p-0">
                            <div class="card-body">
                                <a href="/pdp" className="text-decoration-none">
                                <h5 class="dark-blue-hp">Two-Per-Day Multivitamin</h5>
                                </a>
                                <div className="row fs-4 fw-bold text-success">
                                                <div className="col-12">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <span className="ms-2 text-small">4.9 (1,000)</span>
                                                </div>
                                            </div>
                                <p class="card-text my-auto" style={{ minHeight: "48px" }}>Packed with over 25 vitamins, minerals & extracts, two-month supply</p>
                                <div class="d-flex card-text text-end justify-content-between">
                                    <div class="my-auto fs-5">
                                        <span class="fw-bold">$15.00</span>
                                        {/* | <span class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.45</span> */}
                                    </div>
                                    <button class="btn btn-orange-white btn-sm fw-bold" onClick={props.addToCart}>Add To Cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="col d-lg-block d-none">
                <div class="card mb-2 h-100">
                    <div class="row justify-content-center">
                        <div class="col-2 my-auto">
                            <div class="row">
                                <a href="/pdp">
                                <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                    class="img-fluid rounded-start" alt="..." style={{ width: "75px" }} />
                                </a>
                            </div>
                        </div>
                        <div class="col-9 m-0 p-0">
                            <div class="card-body">
                                <div className="row"></div>
                                <a href="/pdp" className="text-decoration-none">
                                <h5 class="dark-blue-hp">Calm Mag</h5>
                                </a>
                                <div className="row fs-4 fw-bold text-success">
                                                <div className="col-12">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                    </svg>
                                                    <span className="ms-2 text-small">4.9 (1,000)</span>
                                                </div>
                                            </div>
                                <p class="card-text my-auto" style={{ minHeight: "48px" }}>Daily Stress management formula</p>
                                <div class="d-flex card-text text-end justify-content-between">
                                    <div class="my-auto fs-5"><span class="fw-bold text-danger">$6.60</span> | <span
                                        class="text-decoration-line-through" style={{ fontSize: "16px" }}>$9.72</span></div>
                                    <button class="btn btn-orange-white btn-sm fw-bold" onClick={props.addToCart}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- End Cards --> */}
            <div className="my-auto ms-2">
                <div className="fs-3 card-arrow">
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </>
    )
}

export default HP_Carousel;