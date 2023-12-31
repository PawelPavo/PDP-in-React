import React from "react";
import Nutrition from "../components/WellnessBlog/components/Nutrition";
import HealthyLiving from "../components/WellnessBlog/components/HealthyLiving";
import SelfCare from "../components/WellnessBlog/components/SelfCare";

const WellnessBlog = (props) => {
    return (
        <>
        
            <div className="row mx-5 p-3 rounded-5 shadow">
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
                    <div className="card mb-3 bg-light-blue border-0">
                        <div class="row g-0">
                            <div class="col-lg-7 my-auto">
                                <div class="card-body">
                                <div className="dark-blue fs-3 mb-3">What's New</div>
                                    <h5 class="card-title">How Does the Immune System Work?</h5>
                                    <p class="card-text">Your immune system is what keeps you keepin’ on—no matter what challenges life throws your way. This sounds simple…but it’s actually quite complicated, especially during the winter season when cooler weather keeps us indoors and crowded holiday gatherings come into play! Let’s explore the intricate network of cells, tissues, and organs that make up your immune system, and take a look at how everyday decisions - such as what time you go to bed and what you eat for breakfast - can affect your immune system health.</p>
                                </div>
                            </div>
                            <div class="col-md-5 my-auto"> <img src="https://www.lifeextension.com/-/media/lifeextension/wellness/lifestyle/how-does-immune-system-work/how-does-immune-system-work_promo.jpg" class="img-fluid rounded" alt="..." /> </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="row row-cols-1 row-cols-lg-4 g-4 mb-5 mx-2 mt-3">
                    <Nutrition />
                </div>
                <div class="row row-cols-1 row-cols-lg-4 g-4 mb-5 mx-2 mt-3">
                    <HealthyLiving />
                </div>
                <div class="row row-cols-1 row-cols-lg-4 g-4 mb-5 mx-2 mt-3">
                    <SelfCare />
                </div>
            </div>
        </>

    )
}

export default WellnessBlog;