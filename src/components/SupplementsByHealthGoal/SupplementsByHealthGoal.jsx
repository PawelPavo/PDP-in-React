import React from "react";

const HealthGoals = [
            {
                id: 1,
                name: "Bone Health",
                image: "https://www.lifeextension.com/-/media/lifeextension/icons/supplement-quizzes/bone-and-joint/bone.svg"
            },
            {
                id: 2,
                name: "Prostate",
                image: "https://www.lifeextension.com/-/media/lifeextension/icons/health-basics/prostate_health.svg"
            },
            {
                id: 3,
                name: "Immune Support",
                image: "https://www.lifeextension.com/-/media/lifeextension/icons/health-basics/nasal_support.svg"
            },
            {
                id: 4,
                name: "Inflammation Health Support",
                image: "https://www.lifeextension.com/-/media/lifeextension/icons/supplement-quizzes/inflammation/inflammation.svg"
            },
            {
                id: 5,
                name: "Ant-Aging & Longevity",
                image: "https://www.lifeextension.com/-/media/lifeextension/icons/supplement-quizzes/longevity/longevity.svg"
            }
    
]

const SupplementsByHealhGoal = () => {
    return (
        <>
                {HealthGoals.map(HealthGoal => (
                    <>
                        <div className="col-6 mb-2 col-lg-4">
                            <button className="border shadow-sm btn btn-sm btn-light rounded-5 w-100 h-100">
                                <div className="row">
                                    <div className="col-2 my-auto">
                                    <img className="fs-6" src={HealthGoal.image} alt="" style={{width:"35px"}} />
                                    </div>
                                    <div className="col-10 my-auto text-start ps-4" style={{fontSize:"12px"}}>
                                    {HealthGoal.name}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </>
                ))}
        </>
    )
};

export default SupplementsByHealhGoal;