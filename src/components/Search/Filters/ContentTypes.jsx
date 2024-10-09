import React from "react";


const ContentTypes = () => {

    const CT = ["News", "Blog Product", "Protocol", "Blog Science", "Health Basic", "Science & Research Topic", "Product Update", "Landing Page", "About"]
    return (
        <>
              <div className="row mt-3">
                <div className="fs-5 dark-blue">Content Types</div>
                <div class="ms-3 my-1">
                    {CT.map((option) => 
                        <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={option} />
                            <label className="form-check-label" for={option}>
                            {option}
                            </label>
                        </div>
                        </>
                    )}                  
                </div>
              </div>        
        </>
    )
}

export default ContentTypes;