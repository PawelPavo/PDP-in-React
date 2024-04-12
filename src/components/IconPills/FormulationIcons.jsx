import React from "react";

const Formulations = [
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
    return (
        <>
            <div className="row">
                {Formulations.map(HealthGoal => (
                    <>

                        <div className="col my-auto text-center">
                            <img className="object-fit-scale" src={HealthGoal.image} alt="" style={{ width: "45px" }} />
                        </div>
                        {/* <div className="col-10 my-auto text-start ps-4" style={{fontSize:"11px"}}>
                                    {HealthGoal.name}
                                    </div> */}
                    </>
                ))}
            </div>
        </>
    )
};

export default FormulationIcons;