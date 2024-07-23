import React from "react";
import { useState } from "react";
import FilterOffCanvas from "./FilterOffCanvas";

const Filters = (props) => {

    // const Health_Concerns = [{name:"Anti-Aging & Longevity", id:1}]
    
    const Health_Concerns = ["Bone Health","Immune Support","Inflammation Health Support","General Health & Wellness","Woman's Health", "Thyroid / Adrenal", "Nerve Health & Comfort Support", "Heart Health", "Muscle Health", "Active Lifestyle & Fitness", "Pet Health", "Hormone Balance", "Energy Management", "Men's Health"]

    const Types = ["Vitamins","Specialty Blends", "Multivitamins", "Targeted Nutrients", "Kits", "Protein","Pet Care", "Herbs / Botanicals", "Books / Media", "Minerals", "Fatty Acids", "Food / Drink", "Miscellaneous"]

    const [relevancyFilter, setRelevancyFilter] = useState(true)
    const [dateFilter, setDateFilter] = useState(true)
    const [filterOptions, setFilterOptions]=useState([])
    const [filterNameOption, setFilterNameOption] = useState("")

    const sortRelevancy = () => {
        setRelevancyFilter(!relevancyFilter)
    }

    const sortDate = () => {
        setDateFilter(!dateFilter)
    }

    const selectOption = (option) => {
        if(option===1){
            setFilterOptions(Health_Concerns)
            setFilterNameOption("Health Concerns")
        }
        if(option===2){
            setFilterOptions(Types)
            setFilterNameOption("Types")
        }
    }

    if(props.filters === "product") {
        return (
            <>
                <span className="input-group-text"><i class="bi bi-sliders2 fs-5"></i></span>
                <div className="row flex-nowrap overflow-scroll mx-2">
                  <button className="btn btn-sm border btn-light w-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" onClick={()=>selectOption(1)}>Health Concerns</button>
                  <button className="btn btn-sm border btn-light w-25 mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" onClick={()=>selectOption(2)}>Types</button>
                  <button className="btn btn-sm border btn-light w-25">Attributes</button>
                  <button className="btn btn-sm border btn-light w-25 mx-1">Brand</button>
                  <button className="btn btn-sm border btn-light w-50">Content Type</button>
                </div>
                {/* offCanvas */}
                <FilterOffCanvas filterNameOption={filterNameOption}  filterOptions={filterOptions}/>
            </>
        )
    }

    if(props.filters === "magazines") {
        return (
            <>
                <span className="input-group-text"><i class="bi bi-sliders2 fs-5"></i></span>
                <div className="d-flex mx-2">
                  <button className="btn btn-sm border btn-light" onClick={sortRelevancy}>Relevancy {relevancyFilter ? <i class="bi bi-sort-down-alt fs-6 ms-2"></i> : <i class="bi bi-sort-up fs-6 ms-2"></i>}</button>
                  <button className="btn btn-sm border btn-light mx-1" onClick={sortDate}>Date {!dateFilter ? <i class="bi bi-sort-numeric-up-alt fs-6 ms-2"></i>: <i class="bi bi-sort-numeric-down fs-6 ms-2"></i>}</button>
                </div>
            </>
        )
    }

    if(props.filters === "news") {
        return (
            <>
                <span className="input-group-text"><i class="bi bi-sliders2 fs-5"></i></span>
                <div className="d-flex mx-2">
                  <button className="btn btn-sm border btn-light">Content Type</button>
                </div>
            </>
        )
    }
}

export default Filters;