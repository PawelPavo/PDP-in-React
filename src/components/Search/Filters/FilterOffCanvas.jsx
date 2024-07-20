import React from "react";



const FilterOffCanvas = (props) => {

    const Health_Concerns = ["Anti-Aging & Longevity","Bone Health","Immune Support","Inflammation Health Support","General Health & Wellness","Woman's Health", "Thyroid / Adrenal", "Nerve Health & Comfort Support", "Heart Health", "Muscle Health", "Active Lifestyle & Fitness", "Pet Health", "Hormone Balance", "Energy Management", "Men's Health"]
    const Types = ["Vitamins","Specialty Blends", "Multivitamins", "Targeted Nutrients", "Kits", "Protein","Pet Care", "Herns / Botanicals", "Book / Media", "Minerals", "Fatty Acids", "Food / Drink", "Miscellaneous"]


    return (
        <>
                <div class="offcanvas offcanvas-bottom rounded rounded-bottom-0" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ height: "75%" }}>
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasBottomLabel">{props.filterNameOption}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        {props.filterOptions.map((option)=>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {option}
                                </label>
                            </div>
                        )}
                    </div>
                </div>
        
        </>
    )
}

export default FilterOffCanvas;