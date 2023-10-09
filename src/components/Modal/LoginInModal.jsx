import React  from "react";
import image from "../../Images/Add to Cart-amico.svg"

const LoginModal = (props) => {



    return (
        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="https://www.lifeextension.com/-/media/project/lifeextension/images/logo/le-logo-svg-no-tag.svg" className="p-1" alt="LE Logo" style={{ width: "15vh", height: "auto" }} />

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {!props.login ?
                                <>
                                    <div className="row">
                                        <div className="col-md-5 my-auto text-center">
                                            <h1 className="modal-title fs-5 login-title" id="loginModalLabel">{props.greeting}!</h1>
                                        </div>
                                        <div className="col-md-7">
                                            <h5 className="fw-light dark-blue ms-3 mb-4 mt-2">Sign In or Sign Up to get started...</h5>
                                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active rounded-top-5 sign-in-tab-text shadow-sm" id="sign-in-tab" data-bs-toggle="tab" data-bs-target="#sign-in-tab-pane" type="button" role="tab" aria-controls="sign-in-tab-pane" aria-selected="true">Sign In</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link rounded-top-5 sign-in-tab-text shadow-sm" id="register-tab" data-bs-toggle="tab" data-bs-target="#register-tab-pane" type="button" role="tab" aria-controls="register-tab-pane" aria-selected="false">Sign Up</button>
                                                </li>
                                            </ul>
                                            <div className="card shadow-sm rounded-bottom-5 rounded-top-0 border-top-0">
                                                <div className="tab-content" id="myTabContent">
                                                    <div className="tab-pane fade show active" id="sign-in-tab-pane" role="tabpanel" aria-labelledby="sign-in-tab" tabIndex="0">
                                                        <div className="card-body">
                                                            <div className="form-floating mb-3">
                                                                <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" onChange={props.onSubmnit} value={props.user}/>
                                                                <label htmlFor="floatingInput">Email address</label>
                                                            </div>
                                                            <div className="form-floating">
                                                                <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                                                                <label htmlFor="floatingPassword">Password</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade show" id="register-tab-pane" role="tabpanel" aria-labelledby="register-tab" tabIndex="0">
                                                        <div className="card-body">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control rounded-4" id="floatingInputName" placeholder="Nomen Nescio" onChange={props.onSubmnit} value={props.user}/>
                                                                <label htmlFor="floatingInputName">Name</label>
                                                            </div>
                                                            <div className="form-floating mb-3">
                                                                <input type="email" className="form-control rounded-4" id="floatingInputEmail" placeholder="name@example.com" />
                                                                <label htmlFor="floatingInputEmail">Email address</label>
                                                            </div>
                                                            <div className="form-floating">
                                                                <input type="password" className="form-control rounded-4" id="floatingPasswordSignUp" placeholder="Password" />
                                                                <label htmlFor="floatingPasswordSignUp">Password</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>

                                    <div className="row">
                                        <div className="fs-3 fw-light dark-blue">
                                            Account Options:
                                        </div>
                                        <div className="col-md-5">
                                            <ul className="list-group list-group-flush p-0 border shadow-sm rounded dark-blue p-3">
                                                <li className="list-group-item list-group-item-action border-0 rounded">My Life Extension</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded">LE Dollars</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded">Autoship & Save</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded">Order History & Reorder</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded">Shipping Addresses</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 text-center mt-3 my-md-auto">
                                            {props.cartItems === 0 ?
                                                <>
                                                    <img src={image} alt="Shopping for Life Extension prodducts" />

                                                    <h5 className="my-3">Your cart is empty.</h5>
                                                    <a href="#" className="btn my-warning rounded btn-sm px-4 shadow-sm">Shop Now</a>
                                                </>
                                                :
                                                <>
                                                    <h5 className="mb-3">You have <span className="orange"> {props.cartItems} </span> item(s) in your cart.</h5>
                                                    <a href="#" className="btn my-warning rounded btn-sm px-4 shadow-sm">View Cart</a><br />
                                                    <div className="my-2">OR</div>
                                                    <a href="#" className="btn my-menu rounded btn-sm">Continue Shopping</a>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="modal-footer">
                            {!props.login ?
                                <button type="button" className="btn my-warning-login rounded shadow px-5" data-bs-dismiss="modal" onClick={props.handleLogin}>Sign In</button>
                                :
                                <button type="button" className="btn my-warning-login rounded shadow px-5" data-bs-dismiss="modal" onClick={props.handleLogOut}>Sign Out</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LoginModal;