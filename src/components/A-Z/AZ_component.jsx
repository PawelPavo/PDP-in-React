import React from "react";
import a_z from "./a_z"


const AZ_componenet = (props) => {
    return(
        <>       
                {a_z.map((filter)=>
                <div id={`catalog-${filter.letter}`} className="justify-content-center" style={{scrollMarginTop:"255px"}}>
                    <hr />
                    <h2 className="ms-3">{filter.letter}</h2>
                    <hr />
                    {filter.items.map((item)=>
                        <div className="row border p-2 rounded mb-2">
                            <div className="col-3 col-lg-1 my-auto text-center">
                                <div className="btn btn-sm btn-orange-white text-nowrap p-0 px-2 py-1" onClick={props.addToCart}>Add <i class="fa-solid fa-cart-shopping pt-1" aria-hidden="true"></i></div>
                                <div className="col-lg-6"></div>
                            </div>
                            <div className="col my-auto ms-2">
                                <a href="#" className="link">{item.title}</a>
                            </div>
                        </div>
                    )}
                </div> 
                
                )}

        </>
    )
}

export default AZ_componenet;