import React from "react";
import { useState } from "react";

const Filters = (props) => {

    const [relevancyFilter, setRelevancyFilter] = useState(true)
    const [dateFilter, setDateFilter] = useState(true)

    const sortRelevancy = () => {
        setRelevancyFilter(!relevancyFilter)
    }

    const sortDate = () => {
        setDateFilter(!dateFilter)
    }

    if(props.filters == "product") {
        return (
            <>
                <span className="input-group-text"><i class="bi bi-funnel"></i></span>
                <div className="row flex-nowrap overflow-scroll mx-2">
                  <button className="btn btn-sm border btn-light w-50">Health Concerns</button>
                  <button className="btn btn-sm border btn-light w-25 mx-1">Types</button>
                  <button className="btn btn-sm border btn-light w-25">Attributes</button>
                  <button className="btn btn-sm border btn-light w-25 mx-1">Brand</button>
                  <button className="btn btn-sm border btn-light w-50">Content Type</button>
                </div>
            </>
        )
    }

    if(props.filters == "magazines") {
        return (
            <>
                <span className="input-group-text"><i class="bi bi-funnel"></i></span>
                <div className="d-flex mx-2">
                  <button className="btn btn-sm border btn-light" onClick={sortRelevancy}>Relevancy {relevancyFilter ? <i class="bi bi-sort-down-alt"></i> : <i class="bi bi-sort-up"></i>}</button>
                  <button className="btn btn-sm border btn-light mx-1" onClick={sortDate}>Date {!dateFilter ? <i class="bi bi-sort-numeric-up-alt"></i>: <i class="bi bi-sort-numeric-down"></i>}</button>
                </div>
            </>
        )
    }

    if(props.filters == "news") {
        return (
            <>
                <span className="input-group-text"><i class="bi bi-funnel"></i></span>
                <div className="d-flex mx-2">
                  <button className="btn btn-sm border btn-light">Content Type</button>
                </div>
            </>
        )
    }
}

export default Filters;