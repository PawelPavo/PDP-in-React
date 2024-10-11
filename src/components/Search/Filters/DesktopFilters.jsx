import React, { useState } from "react";


const DesktopFilters = (props) => {

  const HC = ["Anti-Aging & Longevity", "Attention & Focus", "Brain Health","Blood Pressure", "Bone Health"]
  const HC_more = ["Cholesterol Management", "Digestive Health", "Energy Management", "Eye Health", "Fitness & Active", "Gastric Discomfort", "General Health", "Glucose Management", "Hair & Nails", "Heart Health", "Hormone Balance", "Immune Health" , "Inflammation Management", "Joint Health", "Kidney, Bladder & Urinary Health", "Liver Health", "Memory & Cognition", "Men's Health", "Mood Support", "Nerve Health", "Oral Care", "Seasonal Immune & Nasal", "Sexual Health", "Skin Care", "Sleep", "Stress Management", "Thyroid Adrenal", "Weight Management", "Women's Health"]

    const Type = ["Vitamins", "Specialty Blends", "Multivitamins","Targeted Nutrients", "Kits"]
    const Type_more = ["Protein", "Books / Media", "Food/Drink", "Minerals","Fatty Acids"]

    const Attributes = ["Gluten Free", "Non-GMO", "Vegetarian","Best in Class", "Once Daily"]
    const Attributes_more = ["Best Seller", "On Sale", "New"]

    const Brand = ["Life Extension", "Life Extension Blood Labs", "Source Naturals", "Solaray", "Jarrow Formulas"]
    const Brand_more = ["Garden Of Life", "Paradise Herbs", "Nature's Plus", "Gaya Herbs", "Now", "Nature's Way", "BlueBonnet", "HACHTTE BOOK", "Enzymedica", "Redd Remedies"]

    const [HC_flag, setHCFlag] = useState(false);
    const [Type_flag, setTypeFlag] = useState(false);
    const [Attributes_flag, setAttributesFlag] = useState(false);
    const [Brand_flag, setBrandFlag] = useState(false);
    

    const HC_toggle = () => {
      setHCFlag(!HC_flag)
    }

    const Type_toggle = () => {
      setTypeFlag(!Type_flag)
    }

    const Attributes_toggle = () => {
      setAttributesFlag(!Attributes_flag)
    }

    const Brand_toggle = () => {
      setBrandFlag(!Brand_flag)
    }



    return (
        <>

            <div className="">
              <div className="row mt-3">
                <div className="fs-5 dark-blue">Health Concerns</div>
                <div class="ms-3 my-1">
                    {HC.map((option) => 
                        <>
                        <div className="form-check">
                            <div className="hc-filter" value={option} onClick={props.getRadioValue}>{option}</div>
                        </div>
                        </>
                    )}
                    {HC_more.map((option) => 
                        <>
                        {HC_flag &&
                        <div className="form-check">
                            <div className="hc-filter" value={option} onClick={props.getRadioValue}>{option}</div>
                        </div>
                        }
                        {HC_flag &&
                        <>
                        {option=="Immune Health" ? 
                        <>
                          <div className={`form-check ms-4 ${!props.immuneSupportFlag ? "d-none" : "d-block"}`}>
                            <div className="hc-filter" value={option} onClick={props.getRadioValue}>Immune Seasonal Support</div>
                          </div>
                          <div className={`form-check ms-4 ${!props.immuneSupportFlag ? "d-none" : "d-block"}`}>
                            <div className="hc-filter" value={option} onClick={props.getRadioValue}>Nasal Support</div>
                          </div>
                         </> 
                          :
                          <></>
                        }


                        {option=="Heart Health" ? 
                        <>
                          <div className={`form-check ms-4 ${!props.heartHealthFlag ? "d-none" : "d-block"}`}>
                            <div className="hc-filter" value={option} onClick={props.getRadioValue}>Blood Pressure / Vascular Health</div>
                          </div>
                          <div className={`form-check ms-4 ${!props.heartHealthFlag ? "d-none" : "d-block"}`}>
                            <div className="hc-filter" value={option} onClick={props.getRadioValue}>Cholesterol Management</div>
                          </div>
                         </> 
                          :
                          <></>
                        }
                        </>}
                        </>
                    )}
                  
                </div>
                <div className="ms-3 teal-more" onClick={HC_toggle}>{HC_flag ? "Show Less" : "Show More"}</div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="fs-5 dark-blue">Types</div>
                <div class="ms-3 my-1">
                    {Type.map((option) => 
                        <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label hc-filter" for={option}>
                            {option}
                            </label>
                        </div>
                        </>
                    )}
                    {Type_more.map((option) => 
                        <>
                        {Type_flag &&
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label hc-filter" for={option}>
                            {option}
                            </label>
                        </div>
                          }
                        </>
                    )}
                  
                </div>
                <div className="ms-3 teal-more" onClick={Type_toggle}>{Type_flag ? "Show Less" : "Show More"}</div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="fs-5 dark-blue">Attributes</div>
                <div class="ms-3 my-1">
                    {Attributes.map((option) => 
                        <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label hc-filter" for={option}>
                            {option}
                            </label>
                        </div>
                        </>
                    )}
                    {Attributes_more.map((option) => 
                        <>
                        {Attributes_flag &&
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label hc-filter" for={option}>
                            {option}
                            </label>
                        </div>
                          }
                        </>
                    )}
                  
                </div>
                <div className="ms-3 teal-more" onClick={Attributes_toggle}>{Attributes_flag ? "Show Less" : "Show More"}</div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="fs-5 dark-blue">Brands</div>
                <div class="ms-3 my-1">
                    {Brand.map((option) => 
                        <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label hc-filter" for={option}>
                            {option}
                            </label>
                        </div>
                        </>
                    )}
                    {Brand_more.map((option) => 
                        <>
                        {Brand_flag &&
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label hc-filter" for={option}>
                            {option}
                            </label>
                        </div>
                          }
                        </>
                    )}
                  
                </div>
                <div className="ms-3 teal-more" onClick={Brand_toggle}>{Brand_flag ? "Show Less" : "Show More"}</div>
              </div>
              </div>
        </>
    )
}

export default DesktopFilters;