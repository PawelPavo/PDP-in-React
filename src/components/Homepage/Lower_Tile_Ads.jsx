import React from "react";


const Lower_Tile_Ads = () => {
    return (
        <>
                {/* card 1 */}

                <div className="col-lg-3 mt-3 my-lg-0">
                                <a href="/wellness" className="hp-tile">
                            <div className="card bg-light h-100">
                                <div className="text-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/homepage/tileads/new/nc_testimonials_page.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto", width:"250px" }} />
                                    </div>
                                    <div className="card-body p-0 px-3 py-2">
                                        <h5 className="card-title fs-6">Sometimes, It's OK to Play Favorites</h5>
                                        <p className="card-text text-small">These vitamins and supplements are at the top of our customers’ lists…and they’ll be on yours, too.</p>
                                    </div>
                                </div>
                                </a>
                                
                            </div>

                <div className="col-lg-3 mt-3 mt-lg-0">
                    
                        <div className="card p-2 shadow-sm h-100">
                            <div className="d-flex">
                                <img className="pe-2 mt-1"
                                    src="https://www.lifeextension.com/-/media/lifeextension/icons/le-programs/just-icons/wellness_guide.svg" alt=""
                                    />
                                <div className="mt-4 mb-1">
                                    <div className="wellness_style_hp text-uppercase">Wellness</div>
                                    <p className="text-uppercase wellness_style_hp_blog p-0 m-0 fs-3">Blog</p>
                                </div>
                            </div>
                            <p className="card-text p-0 m-2 ms-2">Health information at your fingertips. Blog committed to providing quality, trustworthy, and unbiased health information developed by our editorial team and Wellness Experts.</p>
                            <a href="#" className="learn-more fw-bold me-2 text-end mt-3" aria-label="Take the essentials quiz now">Learn More</a>
                        </div>
                
                </div>
                <div className="col-lg-6 mt-3 mt-lg-0">
                <div class="card bg-dark-blue">
                    <img src="https://www.lifeextension.com/-/media/lifeextension/lpages/2024/best-of-le/launch/nc_logo_bole_awards.png" className="card-img-top img-fluid px-5 pt-2" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title text-light">Select Savings on Winning Supplements</h5>
                        <a href="#" class="btn btn-orange-white w-50 mt-2 fw-bold">Shop Now!</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Lower_Tile_Ads;