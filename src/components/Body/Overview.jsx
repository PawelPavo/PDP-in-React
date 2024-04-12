import React from "react";
import FormulationIcons from "../IconPills/FormulationIcons";


const Overview = (props) => {
    return (
        <>
<div className="row mt-lg-1 mt-3">
<div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item rounded-0 py-2 border-start-0 border-end-0">
    <h2 className="accordion-header">
      <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Product Overview
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      <h2 className="mt-4 fw-light fs-3">What is Vitamin D3?</h2>
        <p>Basking in the sunshine is one of life’s greatest pleasures—and not only does it feel good, it’s good for us in moderation, because sunlight prompts our bodies to manufacture the essential nutrient, vitamin D. But it’s simply not possible for many of us to get enough vitamin D naturally. That’s why you need a potent vitamin D supplement.</p>
        <p className="fs-5 lead">Make sure you’re getting enough of the sunshine vitamin with this high-potency, easy-to-swallow vitamin D formula.</p>
        <h2 className="fw-light fs-4 mt-4">Vitamin D3 Benefits</h2>
        <ul>
            <li>A must-have supplement for bone health and immune support</li>
            <li>Supports your heart, brain and more</li>
            <li>Potent formula in an easy-to-swallow softgel</li>
        </ul>
      </div>
      <div className="col-lg-8">
    <FormulationIcons/>
    </div>
    </div>
  </div>
  <div className="accordion-item rounded-0 py-2 border-start-0 border-end-0">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Product Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item rounded-0 py-2 border-start-0 border-end-0">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Supplement Facts
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item rounded-0 py-2 border-start-0 border-end-0">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        Review / Q&A
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
</>
    )
}

export default Overview;