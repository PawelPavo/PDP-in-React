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
            <div className="card bg-light rounded-0 shadow-sm">
                <div className="card-body p-0 pt-3">
                    <p className={`card-title dark-blue text-end fs-5 m-0 ${props.autoshipActive ? styles.opacity_custom_og : ""}`}><span>Price:</span> <span className="fw-bold">$7.50</span></p>
                    {props.autoshipActive ?
                        <p className={`text-end m-0 ${props.autoshipActive ? styles.opacity_custom : ""}`}>$0.12/count | 60 Day Supply</p>
                        :
                        <p className={`text-end m-0 ${props.autoshipActive ? styles.opacity_custom : ""}`}>{(props.counter >= 4) ? "$0.11/count" : "$0.12/count"} | {props.counter === 0 ? "60" : props.daySupply * props.counter} Day Supply</p>
                    }
                    <p className={`text-end m-0  ${props.autoshipActive ? styles.opacity_custom : ""}`}> <span className="fw-bold" style={{ color: " #a41f35" }}>Save 13%</span> on 4+ Units | $6.50 each</p>
                    {!props.autoshipActive ?
                        <div className="row " style={!props.autoshipActive ? mountedStyle : unmountedStyle}>
                            <div className="col-5 my-auto">
                            <label htmlFor="qtyInputAddToCart"><small className="ms-2 text-secondary">Qty:</small></label>
                                <div className="input-group shadow-sm rounded input-group-sm">
                                    <button id="btnDecrease" className="btn my-menu rounded rounded-end-0 border-secondary px-2" type="button" onClick={props.decrease}>
                                    <i className="fa-solid fa-minus mt-1"></i>
                                    </button>
                                    <input id="qtyInputAddToCart" type="text" className="form-control rounded-0 text-center border border-dark border-start-0 border-end-0" onChange={props.manualQtyInput} value={props.counter} aria-label="Increase or decrease quantity" />
                                    <button id="btnIncrease" className="btn my-menu rounded-start-0 rounded px-2" type="button" onClick={props.increase}>
                                    <i className="fa-solid fa-plus mt-1"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-7">
                            <label htmlFor="qtyInput"><small className="ms-2 text-secondary"></small></label>

                                <div onClick={props.addToCart} className={`btn w-100 rounded shadow ${styles.add_to_cart}`} tabIndex="0">Add To Cart</div>
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
                                <label htmlFor="qtyInput"><small className="ms-2 text-secondary">Qty:</small></label>
                                    <div className="input-group input-group-sm shadow-sm rounded">
                                        <button id="btnDecrease" className="btn my-menu rounded rounded-end-0" type="button" onClick={props.decrease}>
                                        <i className="fa-solid fa-minus mt-1"></i>
                                        </button>
                                        <input id="qtyInput" type="text" className="form-control rounded-0 text-center border border-dark border-start-0 border-end-0" onChange={props.manualQtyInput} value={props.counter} aria-label="Increase or decrease quantity" />
                                        <button id="btnIncrease" className="btn my-menu rounded rounded-start-0" type="button" onClick={props.increase}>
                                        <i className="fa-solid fa-plus mt-1"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <label htmlForor="floatingSelect"><small className="ms-2 text-secondary">Deliver every:</small></label>
                                    <select className="form-select rounded form-select-sm border-dark shadow-sm " aria-label="Select Months" id="floatingSelect">
                                        <option selected>1 month</option>
                                        <option value="1">2 months</option>
                                        <option value="2">3 months</option>
                                        <option value="3">4 months</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 ">
                                <div onClick={props.addToCart} className={`btn w-100 mt-2 rounded shadow ${styles.add_to_cart}`}>Subscribe to Autoship</div>
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
