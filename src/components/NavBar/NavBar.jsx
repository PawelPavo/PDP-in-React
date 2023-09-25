import React from "react";
import MyOffcanvs from "../OffCanvas/MyOffcanvas";
import LoginModal from "../Modal/LoginInModal";

const NavBar = (props) => {
    return (
        <>
            <div className="container">
                <div className="row mb-2 mt-3">
                    <div className="col-2">
                        <a href="#">
                            <img src="https://www.lifeextension.com/-/media/project/lifeextension/images/logo/le-logo-svg.svg" className="img-fluid d-none d-lg-block" alt="LE Logo" style={{ width: "20vh", height: "auto" }} />
                            <img src="https://www.lifeextension.com/-/media/project/lifeextension/images/logo/le-logo-svg-no-tag.svg" className="p-1 d-lg-none" alt="LE Logo" style={{ width: "15vh", height: "auto" }} />
                        </a>
                    </div>
                    <div className="col-10 dark-blue fs-5 my-auto d-lg-none">
                        <div className="d-flex justify-content-end me-2">
                            <img src="https://www.lifeextension.com/-/media/lifeextension/seals/ftr-consumerlab-seal-2021.png" alt="#1 Rated Catalog/Internet Merchant" style={{ width: "30px" }} />
                            <div className="btn btn-sm  rounded-5 shadow-sm dark-blue  mx-1 my-menu" data-bs-toggle="modal" data-bs-target="#loginModal">
                                {!props.login ?
                                    <>
                                        <i className="fa-regular fa-user mobile"></i> <span className="menu">Sign In</span>
                                    </>
                                    :
                                    <>
                                        <span style={{fontSize:"11px"}} className="">Alexandra <i className="fa-solid fa-chevron-right"></i></span>
                                    </>
                                }
                            </div>
                            <div className="btn btn-sm  rounded-5 shadow-sm dark-blue my-menu">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="btn btn-sm rounded-5 shadow-sm dark-blue mx-2 my-menu">
                                <i className="fa-solid fa-tag"></i>
                            </div>
                            <div className="btn btn-sm rounded-5 shadow dark-blue my-warning position-relative">
                                <small><i className="fa-solid fa-cart-shopping"></i></small>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                    {props.cartItems}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 my-auto mt-2">
                        <div className="row">
                            <div className="col-lg-8 my-auto">
                                <div className="row">
                                    <div className="input-group">
                                        <div className="col-2 my-auto dark-blue text-center fs-6 my-search rounded-5 me-md-5 me-3 shadow-sm p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                            <i className="fa-solid fa-bars"></i> <span className="menu">Menu
                                            </span>
                                        </div>
                                        <input type="text" className="form-control rounded-start-5 border-dark" placeholder="Search LE Supplements" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary rounded-end-5 my-search" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                                <div className="row justify-content-end mt-2">
                                    <div className="col-sm-10">
                                        <div className="d-flex justify-content-around exposed-menu">
                                            <span>Best Sellers</span>
                                            <span>Sales</span>
                                            <span>Quizzes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 dark-blue text-end fs-5 my-auto d-none d-lg-block">
                                <div className="d-flex justify-content-around">
                                    <div className="btn btn-sm rounded-5 shadow-sm px-2 my-menu" data-bs-toggle="modal" data-bs-target="#loginModal">
                                        {!props.login ?
                                            <>
                                                <i className="fa-regular fa-user"></i> <span className="menu">Sign In</span>
                                            </>
                                            :
                                            <>
                                                <i className="fa-regular fa-user"></i> <span className="menu">Hello, Alexandra <i className="fa-solid fa-chevron-right"></i></span>
                                            </>}
                                    </div>
                                    <div className="btn btn-sm rounded-5 shadow-sm my-menu">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="btn btn-sm rounded-5 shadow-sm my-menu">
                                        <i className="fa-solid fa-tag"></i>
                                    </div>
                                    <div className="btn btn-sm rounded-5 shadow my-warning position-relative ">
                                        <small><i className="fa-solid fa-cart-shopping"></i></small>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                            {props.cartItems}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2 text-center">
                                    <div style={{ fontSize: "12px" }}>#1 Rated Catalog/Internet Merchant <img src="https://www.lifeextension.com/-/media/lifeextension/seals/ftr-consumerlab-seal-2021.png" alt="#1 Rated Catalog/Internet Merchant" style={{ width: "25px" }} /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <MyOffcanvs login={props.login} handleLogin={props.handleLogin} greeting={props.greeting}/>
            <LoginModal greeting={props.greeting} login={props.login} handleLogin={props.handleLogin} cartItems={props.cartItems}/>
        </>
    )
};

export default NavBar; 