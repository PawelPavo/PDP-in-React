import React from "react";
import Nutrition from "../components/WellnessBlog/components/Nutrition";
import HealthyLiving from "../components/WellnessBlog/components/HealthyLiving";
import SelfCare from "../components/WellnessBlog/components/SelfCare";

const WellnessBlog = (props) => {
    return (
        <>
        
            <div className="row mx-lg-5 p-3 rounded shadow-sm border">
            <div className="col-lg-3 my-auto">
            <div className="d-flex">
                <img src="https://www.lifeextension.com/-/media/lifeextension/icons/le-programs/just-icons/wellness_guide.svg" class="img-fluid" alt="..." style={{ height: "85px" }} />
                <div className="mb-2">
                    <p className="roboto fs-1 text-uppercase p-0 m-0 fw-bold" style={{ color: "#539800", fontWeight: "500;" }}>Wellness</p>
                    <p className="text-uppercase rewards_style p-0 m-0 fs-3">Blog</p>
                </div>  
                </div>
                </div>
                <div className="col-lg-9">
                    <a href="" className="navlink">
                    <div className="card bg-light-blue border-0 rounded-3">
                        <div class="row g-0">
                            <div class="col-lg-7 my-auto">
                                <div class="card-body">
                                    <h5 class="card-title">How Does the Immune System Work?</h5>
                                    <p class="card-text">Your immune system is what keeps you keepin’ on—no matter what challenges life throws your way. This sounds simple…but it’s actually quite complicated, especially during the winter season when cooler weather keeps us indoors and crowded holiday gatherings come into play! Let’s explore the intricate network of cells, tissues, and organs that make up your immune system, and take a look at how everyday decisions - such as what time you go to bed and what you eat for breakfast - can affect your immune system health.</p>
                                </div>
                            </div>
                            <div class="col-lg-5 my-auto"> <img src="https://www.lifeextension.com/-/media/lifeextension/wellness/lifestyle/how-does-immune-system-work/how-does-immune-system-work_promo.jpg" class="img-fluid rounded" alt="..." /> </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <hr className="mx-3 my-4"/>
            <div className="row px-lg-5">
            <div class="col-lg-10">
                <div class="row row-cols-1 row-cols-lg-4 g-2 mb-4">
                    <Nutrition />
                </div>
                <hr className="mx-3"/>
                <div class="row row-cols-1 row-cols-lg-4 g-2 mb-4 mt-3">
                    <HealthyLiving />
                </div>
                <hr className="mx-3"/>
                <div class="row row-cols-1 row-cols-lg-4 g-2 mb-4 mt-3">
                    <SelfCare />
                </div>
                <hr className="mx-3"/>
            </div>
            <div className="col-lg-2">
                        <div className="card bg-light">
                            <div className="card-body">
                            <div class="d-flex">
                                        <img class="pe-2 mt-1"
                                            src="https://www.lifeextension.com/-/media/lifeextension/icons/le-programs/just-icons/autoship_save.svg" alt=""
                                            style={{ height: "70px" }} />
                                        <div class="mt-3 mb-2">
                                            <p class="roboto fs-4 text-uppercase p-0 m-0"
                                                style={{ color: "#0D95A5", fontWeight: "500" }}>Autoship</p>
                                            <p class="text-uppercase rewards_style p-0 m-0 fs-5">& Save</p>
                                        </div>
                                    </div>
                                <p className="card-text">Guaranteed lowest prices & FREE shipping.</p>
                                <a href="#" class="learn-more fw-bold fs-6" aria-label="Take the essentials quiz now">Learn More</a>
                            </div>
                        </div>
                    </div>
                    </div>
        </>

    )
}

export default WellnessBlog;