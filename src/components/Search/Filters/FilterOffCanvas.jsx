import React from "react";



const FilterOffCanvas = (props) => {

    return (
        <>
                <div className="offcanvas offcanvas-bottom rounded rounded-bottom-0" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ height: "90%" }}>
                    <div className="offcanvas-header border px-3 py-2 rounded rounded-bottom-0">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">{props.filterNameOption}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    
                        {props.filterOptions.map((option)=>
                           <div class="form-check ms-3 " key={option}>
                                <input className="form-check-input fs-4 border-dark" type="checkbox" value={option} id={option} />
                                <label className="form-check-label fw-bold py-1" for={option}>
                                    {option}
                                </label>
                            </div>
                            
                        )}
               
                    </div>
                    <div className="d-flex px-3 py-2 border">

                        <button className="btn my-warning-reverse w-75 me-2" data-bs-dismiss="offcanvas">Cancel</button>
                        <button className="btn btn-orange-white w-100" data-bs-dismiss="offcanvas">Submit</button>

                    </div>
                </div>
        
        </>
    )
}

export default FilterOffCanvas;