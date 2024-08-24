import React from "react";
import HomePageBlogCard from "../components/WellnessBlog/components/HomePageBlogCard";

const Home = () => {
    return (
        <>
            <div className="container wellness-blog-title">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-12">
                                <img className="img-fluid rounded" src="https://www.lifeextension.com/-/media/lifeextension/lpages/2024/summer-clearance/nc_summersale_lp_mobile.jpg?rev=c1455227701b412b845a13fa62f4589e&w=767&la=en&hash=9E86757A96B380B12E555FD30A41E399" alt="" />
                            </div>
                            <div className="col-lg-4 border title">1
                                <div className="card">Card 1</div>
                            </div>
                            <div className="col-lg-4 border">2
                                <div className="card">Card 1</div>
                            </div>
                            <div className="col-lg-4 border">3
                                <div className="card">Card 1</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card p-2 shadow-sm">
                                    <div className="d-flex">
                                        <img className="pe-2 mt-1"
                                            src="https://www.lifeextension.com/-/media/lifeextension/icons/le-programs/just-icons/wellness_guide.svg" alt=""
                                            style={{ height: "65px" }} />
                                        <div className="mt-4 mb-1">
                                            <div className="wellness_style_hp text-uppercase">Wellness</div>
                                            <p className="text-uppercase wellness_style_hp_blog p-0 m-0 fs-3">Blog</p>
                                        </div>
                                    </div>
                                    <p className="card-text p-0 m-2 ms-2">Health information at your fingertips.</p>
                                    <a href="#" className="learn-more fw-bold me-2 text-end" aria-label="Take the essentials quiz now">Learn More</a>
                                </div>
                                <a href="#" className="navlink">
                                <div className="card my-4 bg-light">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/wellness/fitness/top-five-yoga-poses-to-increase-flexibility/top-five-yoga-poses-to-increase-flexibility_promo.jpg" className="card-img-top img-fluid" style={{height:"131px"}} alt="..."/>
                                    <div className="card-body p-0 px-3 py-2">
                                        <h6 className="card-title dark-blue-hp">Ten Yoga Poses to Increase Flexibility</h6>
                                        <p className="card-text text-small">These 10 yoga poses will help you say “namaste” to a more comfortable, flexible body!</p>
                                    </div>
                                </div>
                                </a>

                            </div>
                            <div className="col-lg-6">
                                <>
                                    <div className="col">
                                        <div className="card shadow-sm bg-light-blue position-relative">
                                            <div className="over-the-image-container mt-4">
                                                <a href="/pdp">
                                                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill border  border-dark  bg-white dark-blue text-small">
                                                        Our Recommendation
                                                    </span>
                                                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/02348.png" className="img-fluid rounded image-hover pt-4" alt="..." style={{ width: "75px", marginLeft: "0%" }} />
                                                    {/* <div className="bg-white shadow-sm rounded px-2 bottom-right border">
                                                        <div className="row text-success">
                                                            <div>

                                                                <span className="fw-bold">4.9</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-star-fill mx-2 pb-1" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                                                <span className="text-small">(120)</span>
                                                            </div>
                                                        </div>

                                                    </div> */}
                                                </a>
                                            </div>
                                            <div className="p-2 mt-1">
                                                <a href="/pdp" className="text-decoration-none"><h6 className="dark-blue-hp">NAD+ Cell Regenerator™ and Resveratrol Elite™</h6></a>
                                                <p className="card-text text-dark">Healthy aging, energy pathway support, advanced formula</p>
                                            </div>
                                            <div className="row fs-4 fw-bold text-success">
                                                <div className="col-12 text-center">
                                                    
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

                                            <div className="d-flex card-text text-end justify-content-center mt-2">
                                                <div className="fs-5"><span className="text-decoration-line-through fs-6 dark-blue">$10.00</span> | <span className="fs-5 fw-bold text-danger" style={{ fontFize: "16px" }}>$5.00</span> | <span className="fs-6 text-danger">Save 50%</span>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-light-blue border-0 mt-2"><div className="d-flex card-text justify-content-center mb-2">
                                                <button className="btn btn-orange-white w-100">Add To Cart</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            </div>
                            <div className="col border">6</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home; 