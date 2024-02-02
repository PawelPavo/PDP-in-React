import React from "react";
import Nutrition from "../components/WellnessBlog/components/Nutrition";
import HealthyLiving from "../components/WellnessBlog/components/HealthyLiving";
import SelfCare from "../components/WellnessBlog/components/SelfCare";

const NutritionSubCategories = [
    {
        id: 1,
        title: "Antioxidants",
    },
    {
        id: 2,
        title: "Herbs & Spices",
    },
    {
        id: 3,
        title: "Recipes",
    },
    {
        id: 4,
        title: "Superfoods",
    },
    {
        id: 5,
        title: "Supplements",
    },
    {
        id: 6,
        title: "Vitamis",
    }

]

const SelfcareSubCategories = [
    {
        id: 1,
        title: "Beauty",
    },
    {
        id: 2,
        title: "Intimacy",
    },
    {
        id: 3,
        title: "Sleep & Relaxation",
    },
    {
        id: 4,
        title: "Menapause",
    },
    {
        id: 5,
        title: "Mental Health",
    },
    {
        id: 6,
        title: "Stress & Anxiety",
    }

]

const HealthyLivingSubCategories = [
    {
        id: 1,
        title: "Aging",
    },
    {
        id: 2,
        title: "Fitness",
    },
    {
        id: 3,
        title: "Lifestyle",
    },
    {
        id: 4,
        title: "Mind & Memory",
    },
    {
        id: 5,
        title: "Pet Health",
    },
    {
        id: 6,
        title: "Weight",
    }

]

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
            </div>
            <div className="container mt-5">
                <div className="row">
                <div class="col-lg-9">
                    <div className="row fw-bold" style={{ opacity: 0.15, fontSize: "50px" }}>Nutrition</div>
                    <hr className="p-0 m-0"/>
                    <div className="d-flex flex-wrap justify-content-around">
                        {NutritionSubCategories.map(item => (
                            <>
                                <a href="#" className="blog-a btn">{item.title}</a>
                            </>
                        ))}
                    </div>
                    <div class="row mt-2">
                        <Nutrition />
                    </div>
                    <div className="row fw-bold mt-5" style={{ opacity: 0.15, fontSize: "50px" }}>Healthy Living</div>
                    <hr className="p-0 m-0"/>

                    <div className="d-flex flex-wrap justify-content-around">
                        {HealthyLivingSubCategories.map(item => (
                            <>
                                <a href="#" className="blog-a btn">{item.title}</a>
                            </>
                        ))}
                    </div>
                    <div class="row mt-2">
                        <HealthyLiving />
                    </div>
                    <div className="row fw-bold mt-5" style={{ opacity: 0.15, fontSize: "50px" }}>Self-Care</div>
                    <hr className="p-0 m-0"/>
                    <div className="d-flex flex-wrap justify-content-around">
                        {SelfcareSubCategories.map(item => (
                            <>
                                <a href="#" className="blog-a btn">{item.title}</a>
                            </>
                        ))}
                    </div>
                    <div class="row mt-2">
                        <SelfCare />
                    </div>
                    <hr className="mx-3" />
                </div>



                <div className="col-lg-3">
                    <div className="sticky-lg-top" style={{ top: "180px" }}>
                        <div className="card mb-3">
                            <div className="card-body">

                                <h2 className="fs-5 dark-blue">Like what you read?</h2>
                                <p className="text-extra-small">Please subscribe to get email updates on this blog.</p>
                                <div className="input-group mb-3 input-group-sm">
                                    <input type="text" className="form-control" placeholder="example@domain.com" aria-label="Enter your email" aria-describedby="button-addon2" />
                                </div>
                                <div className="text-end">
                                    <div className="btn btn-sm btn-orange-white learn-more fw-bold fs-6 w-50" aria-label="Take the essentials quiz now">Submit</div>
                                </div>
                            </div>
                        </div>
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
                </div>
            </div>
        </>

    )
}

export default WellnessBlog;