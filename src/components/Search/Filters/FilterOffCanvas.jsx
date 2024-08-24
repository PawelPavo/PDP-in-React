import React, {useState} from "react";

const FilterOffCanvas = (props) => {

    const [filterCounterDisplay, setFilterCounterDisplay] = useState([]);

    const addFilterToMain = (e) => {
        console.log(e.target.checked)
        if (!e.target.checked){
            setFilterCounterDisplay(filterCounterDisplay.filter((filterCounterDisplay=>e.target.value!==filterCounterDisplay)))
        } else {
            setFilterCounterDisplay([...filterCounterDisplay, e.target.value])
        }
    }

    const filterSubmit = (e) => {
        props.amountOfFilters(filterCounterDisplay.length)
        // {filterCounterDisplay.map((test)=>
        //     console.log(test)
        // )}
    }

        if (!props.allFilters) {
            return (
                <>

                        <div className="offcanvas offcanvas-bottom rounded rounded-bottom-0" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ height: "100%" }}>
                            <div className="offcanvas-header border px-3 py-2 rounded rounded-bottom-0">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">{props.filterNameOption}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={filterSubmit}></button>
                            </div>
                            
                            <div className="offcanvas-body">
                            
                                {props.filterOptions.map((option)=>
                                <div class="form-check ms-3" key={option.id}>
                                        <input className="form-check-input fs-4 border-dark" type="checkbox"  value={option.name} id={option.id} onChange={addFilterToMain}/>
                                        <label className="form-check-label fw-bold py-1" for={option.id}>
                                            {option.name}
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className="d-flex px-3 py-2 border">
                                <button className="btn my-warning-reverse w-75 me-2" data-bs-dismiss="offcanvas">Cancel</button>
                                <button className="btn btn-orange-white w-100" data-bs-dismiss="offcanvas" onClick={filterSubmit}>Submit</button>
                            </div>
                            
                        </div>
                
                </>
            )
        }

        if (props.allFilters) {
            return (
                <>

                        <div className="offcanvas offcanvas-bottom rounded rounded-bottom-0" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ height: "100%" }}>
                            <div className="offcanvas-header border px-3 py-2 rounded rounded-bottom-0">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">{props.filterNameOption}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={filterSubmit}></button>
                            </div>
                            <div className="offcanvas-body">
                            
                                {filterCounterDisplay.map((option)=>
                                
                                        <button key={option} className="btn btn-sm rounded-pill btn-outline-secondary m-1" value={option} onClick={addFilterToMain}>

                                        {option} <i class="bi bi-x-circle"></i>
                                      
                                        </button> 
                              
                                )}
                            </div>
                            <div className="d-flex px-3 py-2 border">
                                <button className="btn my-warning-reverse w-75 me-2" data-bs-dismiss="offcanvas">Cancel</button>
                                <button className="btn btn-orange-white w-100" data-bs-dismiss="offcanvas" onClick={filterSubmit}>Submit</button>
                            </div>
                        </div>
                
                </>
            )
        }
}



export default FilterOffCanvas;