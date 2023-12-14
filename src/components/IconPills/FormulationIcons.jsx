import React from "react";

const HealthGoals = [
    {
        id: 1,
        name: "Non GMO",
        image: "https://www.lifeextension.com/-/media/lifeextension/icons/badges/non_gmo_rgb.svg"
    },
    {
        id: 2,
        name: "Gluten FREE",
        image: "https://www.lifeextension.com/-/media/lifeextension/images/cb-svg-icons/gluten-free-logo.svg"
    },
    {
        id: 3,
        name: "Sugar FREE",
        image: "https://www.lifeextension.com/-/media/lifeextension/icons/badges/sugar_free_icon_cmyk.svg"
    },
    {
        id: 4,
        name: "Once-Daily Dosing",
        image: "https://www.lifeextension.com/-/media/lifeextension/images/cb-svg-icons/one-daily-logo.svg"
    }
]

const FormulationIcons = () => {
    return(
        <>
        <div className="row justify-content-center mb-2">
                {HealthGoals.map(HealthGoal => (
                    <>
                        <div className="col-5 mb-2 col-xl-3">
                            <div className="border btn btn-sm my-outline-teal  text-dark rounded-2 w-100 h-100">
                                <div className="row">
                                    <div className="col-2 my-auto">
                                    <img className="fs-6 ms-2" src={HealthGoal.image} alt="" style={{width:"20px"}} />
                                    </div>
                                    <div className="col-10 my-auto text-start ps-4" style={{fontSize:"11px"}}>
                                    {HealthGoal.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                </div>
        </>
    )
};

export default FormulationIcons;