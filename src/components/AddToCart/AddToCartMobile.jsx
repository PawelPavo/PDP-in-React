import React from "react";
import styles from "./AddToCart.module.css"


const mountedStyle = {
    animation: "inAnimation 1s ease-in"
};
const unmountedStyle = {
    animation: "outAnimation 1s ease-out",
    animationFillMode: "forwards"
};


const AddToCartMobile = (props) => {
    return (
        <>
            <div className="mx-2">
                <div className={`card shadows-sm row border-bottom-0 rounded-bottom-0 py-2 border-light-subtle ${props.autoshipActive ? "bg-body-secondary border-0" : ""}`}>
                    {props.autoshipActive ?
                        <div className={`${props.autoshipActive ? styles.opacity_custom_og_2 : ""}`}>
                            <p className="dark-blue fs-6 m-0 text-decoration-line-through"><span className="fw-bold">$7.50</span></p>
                            <p className="m-0">$0.12/count | 60 Day Supply</p>
                            <p className="m-0"><span className="fw-bold" style={{ color: " #a41f35" }}>Save 13%</span> on 4+ Units | $6.50 each </p>
                        </div>
                        :
                        <div>
                            <p className="dark-blue fs-3 m-0 mb-1"><span className="fw-bold">$7.50</span></p>
                            <p className="m-0">{(props.counter >= 4) ? "$0.11/count" : "$0.12/count"} | {props.counter === 0 ? "60" : props.daySupply * props.counter} Day Supply</p>
                            <p className="m-0"><span className="fw-bold" style={{ color: " #a41f35" }}>Save 13%</span> on 4+ Units | $6.50 each </p>
                        </div>
                    }
                </div>

                <div className={`px-2 card shadow-sm row rounded rounded-top-0 border-top-0 py-2 border-light-subtle ${props.autoshipActive ? "" : "bg-body-secondary border-0"}`}>
                    <div className={`ps-2 border bg-light border-2 rounded`} >
                        <div className="form-check my-1">
                            <input
                                checked={props.autoshipActive ? true : false}
                                className="form-check-input border-dark border-2"
                                type="checkbox"
                                id="flexCheckMobileMain"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseAutoShipMain"
                                aria-expanded="false"
                                aria-controls="collapseAutoShipMain"
                                onChange={props.changeAutoship} />
                            <label className="form-check-label" htmlFor="flexCheckMobileMain">
                                Subscribe to <span class="fw-bold"> AutoShip</span> and <span className="fw-bold" style={{ color: "#a41f35" }}>Save 13%</span>
                            </label>

                        </div>
                    </div>
                    <p className={`m-0 ${props.autoshipActive ? "fs-3" : `fs-6 ${styles.opacity_custom_og_2}`} ${styles.autoship_price}`}>Autoship: $6.50</p>
                    <p className={`m-0 ${!props.autoshipActive && styles.opacity_custom_og_2}`}>$0.11/count | {props.counter === 0 ? "60" : props.daySupply * props.counter} Day Supply</p>
                    <small className="mt-2"> Always get the lowest price and <span className="fw-bold" style={{ color: "#a41f35" }}>FREE SHIPPING</span> with AutoShip. <span href="#" className={`{text-end m-0 fw-bold} ${styles.link}`}>Learn More</span> </small>
                </div>
            </div>
            <div id="AddToCartSticky" className="row m-0 fixed-bottom py-2 border bg-light">

                {props.autoshipActive ?

                    <div className="mb-2 justify-content-center" style={props.autoshipActive ? mountedStyle : unmountedStyle}>

                        <div className="row">
                            <div className="col-4 my-auto bg-light">
                                <label htmlFor="qtyInputMobile"><small className="ms-2 text-secondary">Qty:</small></label>
                                <div className="input-group input-group-sm shadow-sm rounded">
                                    <button id="btnDecreaseMobile" className="btn my-menu rounded rounded-end-0 border-secondary" type="button" onClick={props.decrease}>
                                        <i className="fa-solid fa-minus mt-2"></i>
                                    </button>
                                    <input id="qtyInputMobile" type="text" className="form-control rounded-0 text-center border border-secondary border-start-0 border-end-0" onChange={props.manualQtyInput} value={props.counter} aria-label="Increase or decrease quantity" />
                                    <button id="btnIncreaseMobile" className="btn my-menu rounded rounded-start-0 border-secondary" type="button" onClick={props.increase}>
                                        <i className="fa-solid fa-plus mt-2"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-8">
                                <label htmlFor="floatingSelectMobile"><small className="ms-2 text-secondary">Deliver every:</small></label>
                                <select className="form-select rounded border-dark" aria-label="Select Months" id="floatingSelectMobile">
                                    <option selected>1 month</option>
                                    <option value="1">2 months</option>
                                    <option value="2">3 months</option>
                                    <option value="3">4 months</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    : ""}

                {!props.autoshipActive ?
                    <>

                        <div className="col-4 my-auto bg-light">
                            <label htmlFor="qtyInputNameMobile"><small className="ms-2 text-secondary">Qty:</small></label>
                            <div className="input-group input-group-sm shadow-sm rounded">
                                <button id="btnDecreaseMobile" className="btn my-menu rounded rounded-end-0 border-secondary" type="button" onClick={props.decrease}>
                                    <i className="fa-solid fa-minus mt-2"></i>
                                </button>
                                <input id="qtyInputMobile" type="text" className="form-control rounded-0 text-center border border-secondary border-start-0 border-end-0 " onChange={props.manualQtyInput} value={props.counter} aria-label="Increase or decrease quantity" />
                                <button id="btnIncreaseMobile" className="btn my-menu rounded rounded-start-0 border-secondary" type="button" onClick={props.increase}>
                                    <i className="fa-solid fa-plus mt-2"></i>
                                </button>
                            </div>
                        </div>
                    </>
                    : <></>}
                <div className={`${!props.autoshipActive ? "col-8" : "col-12 mt-2"}`}>
                    {!props.autoshipActive && <label htmlFor="qtyInputNameMobile"><small className="ms-2 text-secondary"></small></label>}

                    <div className={`d-flex shadow btn ${styles.add_to_cart}`}>
                        <div className="col-10">
                            <div onClick={props.addToCart} >{props.autoshipActive ? "AutoShip & Save" : "Add to Cart"}</div>
                        </div>
                        <div className="col-2 ps-1 my-auto border border-top-0 border-bottom-0 border-end-0 border-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom_AS" aria-controls="offcanvasBottom_AS"><i class="fa-solid fa-gear"></i></div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom rounded-top-4 bottom-offCanvas_AS" tabindex="-1" id="offcanvasBottom_AS" aria-labelledby="offcanvasBottomLabel">
               
                <div className="offcanvas-header">
                <div className="row">
                    <div className="col-6 my-auto text-end">
                    <h4 className="m-0 p-0">Autoship</h4>
                    </div>
                    <div className="col-6">
                <div class="onoffswitch">
                    <input
                        checked={props.autoshipActive ? true : false}
                        onChange={props.changeAutoship}
                        id="myonoffswitch"
                        class="onoffswitch-checkbox"
                        name="onoffswitch"
                        type="checkbox"
                    />
                    <label for="myonoffswitch" class="onoffswitch-label">
                        <div class="onoffswitch-inner"></div>
                        <div class="onoffswitch-switch"></div>
                    </label>
                    </div>
                </div>
                </div>


                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body py-0">
                    <div className=""> Always get the lowest price and <span className="fw-bold" style={{ color: "#a41f35" }}>FREE SHIPPING</span> with AutoShip. <span href="#" className={`text-end m-0 fw-bold ${styles.link}`}>Learn More</span> </div>

                    {/* <div className="form-check">
                        <input
                            checked={props.autoshipActive ? true : false}
                            className="form-check-input border-dark border-2"
                            type="checkbox"
                            id="flexCheckMobileMain"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasBottom_AS"
                            aria-expanded="false"
                            aria-controls="offcanvasBottom_AS"
                            onChange={props.changeAutoship} />
                        <label className="form-check-label" htmlFor="flexCheckMobileMain">
                            Subscribe to <span class="fw-bold"> AutoShip</span> and <span className="fw-bold" style={{ color: "#a41f35" }}>Save 13%</span>
                        </label>

                    </div> */}

                </div>
            </div>

        </>
    )
};

export default AddToCartMobile;