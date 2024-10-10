import React from "react";
import { useState } from "react";
import FilterOffCanvas from "./FilterOffCanvas";


const Filters = (props) => {



    // const Health_Concerns = ["Bone Health", "Immune Support", "Inflammation Health Support", "General Health & Wellness", "Woman's Health", "Thyroid / Adrenal", "Nerve Health & Comfort Support", "Heart Health", "Muscle Health", "Active Lifestyle & Fitness", "Pet Health", "Hormone Balance", "Energy Management", "Men's Health"]
    // const Types = ["Vitamins", "Specialty Blends", "Multivitamins", "Targeted Nutrients", "Kits", "Protein", "Pet Care", "Herbs / Botanicals", "Books / Media", "Minerals", "Fatty Acids", "Food / Drink", "Miscellaneous"]

    const [relevancyFilter, setRelevancyFilter] = useState(true)
    const [dateFilter, setDateFilter] = useState(true)
    const [filterOptions, setFilterOptions] = useState([])
    const [filterNameOption, setFilterNameOption] = useState("")
    const [allFilters, setAllFilterts] = useState(true)
    const [filterCount, setFilterCount] = useState(0)


    const amountOfFilters = (FCcount) => {
        setFilterCount(FCcount)
    }

    const sortRelevancy = () => {
        setRelevancyFilter(!relevancyFilter)
    }

    const sortDate = () => {
        setDateFilter(!dateFilter)
    }

    const selectOption = (option) => {
        if (option === 1) {
            const data = localStorage.getItem("Health Concerns")
            console.log(JSON.parse(data))
            setFilterOptions(JSON.parse(data))
            setFilterNameOption("Health Concerns")
            setAllFilterts(false)
        }
        if (option === 2) {
            const data = localStorage.getItem("Types")
            console.log(JSON.parse(data))
            setFilterOptions(JSON.parse(data))
            setFilterNameOption("Types")
            setAllFilterts(false)
        }

        if (option === 3) {
            setFilterNameOption("All Filters")
            setAllFilterts(true)
        }
    }

 


    if (props.filters === "product") {
        return (
            <>
             
                <button type="button" className="input-group-text position-relative" onClick={() => selectOption(3)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
                    <i class="bi bi-sliders2 fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light border text-dark">
                        {filterCount}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <div className="d-flex flex-nowrap overflow-scroll mx-2 w-100 p-1">
                    <button className="btn btn-sm border btn-light text-nowrap rounded-pill px-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" onClick={() => selectOption(1)}>Health Concerns</button>
                    <button className="btn btn-sm border btn-light text-nowrap rounded-pill mx-1 px-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" onClick={() => selectOption(2)}>Types</button>
                    <button className="btn btn-sm border btn-light text-nowrap rounded-pill px-3">Attributes</button>
                    <button className="btn btn-sm border btn-light text-nowrap rounded-pill mx-1 px-3">Brand</button>
                </div>
               
                {/* offCanvas */}
                <FilterOffCanvas filterNameOption={filterNameOption} filterOptions={filterOptions} allFilters={allFilters} filterCount={filterCount} amountOfFilters={amountOfFilters}/>
            </>
        )
    }

    if (props.filters === "magazines") {
        return (
            <>
                <button type="button" className=" input-group-text position-relative">
                    <i className="bi bi-sliders2 fs-5"></i>
                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light border text-dark">
                        0
                        <span className="visually-hidden">unread messages</span>
                    </span> */}
                </button>
                <div className="d-flex mx-2 p-1">
                    <button className="btn btn-sm border btn-light rounded-pill px-4" onClick={sortRelevancy}>Relevancy {relevancyFilter ? <i class="bi bi-sort-down-alt fs-6 ms-2"></i> : <i class="bi bi-sort-up fs-6 ms-2"></i>}</button>
                    <button className="btn btn-sm border btn-light rounded-pill mx-1 px-4" onClick={sortDate}>Date {!dateFilter ? <i class="bi bi-sort-numeric-up-alt fs-6 ms-2"></i> : <i class="bi bi-sort-numeric-down fs-6 ms-2"></i>}</button>
                </div>
            </>
        )
    }

    if (props.filters === "news") {
        return (
            <>
                <button type="button" className="input-group-text position-relative">
                    <i className="bi bi-sliders2 fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light border text-dark">
                        {filterCount}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <div className="d-flex flex-nowrap overflow-scroll mx-2 w-100 p-1">
                    <button className="btn btn-sm border btn-light rounded-pill px-4 text-nowrap">Content Type</button>
                    <button className="btn btn-sm border btn-light rounded-pill px-4 mx-1 text-nowrap" onClick={sortRelevancy}>Relevancy {relevancyFilter ? <i class="bi bi-sort-down-alt fs-6 ms-2"></i> : <i class="bi bi-sort-up fs-6 ms-2"></i>}</button>
                    <button className="btn btn-sm border btn-light rounded-pill px-4 text-nowrap" onClick={sortDate}>Date {!dateFilter ? <i class="bi bi-sort-numeric-up-alt fs-6 ms-2"></i> : <i class="bi bi-sort-numeric-down fs-6 ms-2"></i>}</button>

                </div>
            </>
        )
    }
}

export default Filters;