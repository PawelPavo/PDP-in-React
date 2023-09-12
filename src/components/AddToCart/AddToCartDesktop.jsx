import React from "react";
import styles from "./AddToCart.module.css"

const mountedStyle = {
    animation: "inAnimation 1s ease-in",
    animationFillMode: "forwards"

  };
  const unmountedStyle = {
    animation: "outAnimation 1s ease-out",
    animationFillMode: "forwards"

  };

const AddToCartDesktop = (props) => {
    return (
        <>
            <div className="card bg-light rounded-sm shadow-sm">
                <div className="card-body p-0 pt-3">
                    <p className={`card-title dark-blue text-end fs-5 m-0 ${props.autoshipActive ? styles.opacity_custom_og : ""}`}><span>Price:</span> <span className="fw-bold">$7.50</span></p>
                    {props.autoshipActive ?
                        <p className={`text-end m-0 ${props.autoshipActive ? styles.opacity_custom : ""}`}>$0.12/count | 60 Day Supply</p>
                        :
                        <p className={`text-end m-0 ${props.autoshipActive ? styles.opacity_custom : ""}`}>{(props.counter >= 4) ? "$0.11/count" : "$0.12/count"} | {props.counter === 0 ? "60" : props.daySupply * props.counter} Day Supply</p>
                    }
                    <p className={`text-end m-0  ${props.autoshipActive ? styles.opacity_custom : ""}`}> <span className="fw-bold" style={{ color: " #a41f35" }}>Save 13%</span> on 4+ Units | $6.50 each</p>
                    {!props.autoshipActive ?
                        <div className="row mt-3" style={!props.autoshipActive ? mountedStyle : unmountedStyle}>
                            <div className="col-5 my-auto">
                                <div className="input-group">
                                    <button id="btnDecrease" className="btn btn-outline-secondary rounded rounded-end-0 border-secondary px-2" type="button" onClick={props.decrease}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path>
                                        </svg>
                                    </button>
                                    <input id="qtyInput" type="text" className="form-control rounded-0 text-center border border-secondary border-start-0 border-end-0" onChange={props.manualQtyInput} value={props.counter} aria-label="Increase or decrease quantity" />
                                    <button id="btnIncrease" className="btn btn-outline-secondary rounded-start-0 rounded border-secondary px-2" type="button" onClick={props.increase}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-7">
                                <div onClick={props.addToCart} className={`btn w-100 rounded ${styles.add_to_cart}`} tabIndex="0">Add To Cart</div>
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
                <hr className="m-0 my-2" />
                <div className="form-check my-2">
                    <input
                        checked={props.autoshipActive ? true : false}
                        className="form-check-input border-dark"
                        type="checkbox"
                        id="flexCheckDesktop"
                        data-bs-toggle="collapse"
                        data-bs-target="#AddToCartAutoship"
                        aria-expanded="false"
                        aria-controls="AddToCartAutoship"
                        onChange={props.changeAutoship} />
                    <label className="form-check-label" htmlFor="flexCheckDesktop" style={{fontSize:"14.5px" }}>
                        Subscribe to AutoShip and <span className="fw-bold" style={{ color: "#a41f35", fontSize:"16px" }}>Save 13%</span>
                    </label>
                </div>
                <div className="card-body p-0">
                    <div className="row">
                        <p className={`m-0 text-end fs-5 ${styles.autoship_price} ${props.autoshipActive ? "" : styles.opacity_custom}`}>Autoship: $6.50</p>
                        <p className={`m-0 text-end ${props.autoshipActive ? "" : styles.opacity_custom}`}>$0.11/count | {props.counter === 0 ? "60" : props.daySupply * props.counter} Day Supply</p>
                    </div>
                    {props.autoshipActive ?
                        <div id="AddToCartAutoship" style={props.autoshipActive ? mountedStyle : unmountedStyle}>
                            <div className="row mt-2">
                                <div className="col-5 my-auto">
                                    <div className="input-group input-group-sm">
                                        <button id="btnDecreaseMobile" className="btn btn-outline-secondary rounded rounded-end-0 border-secondary" type="button" onClick={props.decrease}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path>
                                            </svg>
                                        </button>
                                        <input id="qtyInputMobile" type="text" className="form-control rounded-0 text-center border border-secondary border-start-0 border-end-0" onChange={props.manualQtyInput} value={props.counter} aria-label="Increase or decrease quantity" />
                                        <button id="btnIncreaseMobile" className="btn btn-outline-secondary rounded rounded-start-0 border-secondary" type="button" onClick={props.increase}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <select className="form-select rounded form-select-sm border-dark" aria-label="Select Months">
                                        <option selected>1 month</option>
                                        <option value="1">2 months</option>
                                        <option value="2">3 months</option>
                                        <option value="3">4 months</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 ">
                                <div onClick={props.addToCart} className={`btn w-100 mt-2 rounded ${styles.add_to_cart}`}>Subscribe to Autoship</div>
                            </div>
                        </div> : ""}
                </div>
                <hr className="m-0 my-2" />
                <small className="my-1 pb-2">Always get the lowest price and <span className="fw-bold" style={{ color: "#a41f35" }}>FREE SHIPPING</span> with AutoShip. <span href="#" className={`{text-end m-0 fw-bold} ${styles.link}`}>Learn More</span></small>

            </div>
        </>
    )
};

export default AddToCartDesktop;
