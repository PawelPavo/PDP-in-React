import React from "react";

const LoginModal = (props) => {
    return (
        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div className="modal-header">
                            <img src="https://www.lifeextension.com/-/media/project/lifeextension/images/logo/le-logo-svg-no-tag.svg" className="p-1" alt="LE Logo" style={{ width: "15vh", height: "auto" }} />

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {!props.login ?
                                <>
                                    <div className="row">
                                        <div className="col-md-5 my-auto">
                                            <h1 className="modal-title fs-5 login-title" id="loginModalLabel">{props.greeting}!</h1>
                                        </div>
                                        <div className="col-md-7">
                                        <h4 className="fw-light dark-blue ms-3">Sign in to get started...</h4>
                                            <div className="card shadow-sm rounded-5 bg-light">
                                                <div className="card-body">
                                                    <div className="form-floating mb-3">
                                                        <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                                                        <label forHtml="floatingInput">Email address</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                                                        <label forHtml="floatingPassword">Password</label>
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
                                            <ul className="list-group list-group-flush p-0 border shadow-sm rounded-5 dark-blue p-3">
                                                <li className="list-group-item list-group-item-action border-0 rounded-5">My Life Extension</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded-5">LE Dollars</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded-5">Autoship & Save</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded-5">Order History & Reorder</li>
                                                <li className="list-group-item list-group-item-action border-0 rounded-5">Shipping Addresses</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 text-center mt-3 my-md-auto">
                                            {props.cartItems === 0 ?
                                                <>
                                                    <h5 className="mb-3">Your cart is empty.</h5>
                                                    <a href="#" className="btn my-warning rounded-5 btn-sm px-4 shadow-sm">Shop Now</a>
                                                </>
                                                :
                                                <>
                                                    <h5 className="mb-3">You have <span className="orange"> {props.cartItems} </span> item(s) in your cart.</h5>
                                                    <a href="#" className="btn my-warning rounded-5 btn-sm px-4 shadow-sm">View Cart</a><br/>
                                                    <div className="my-2">OR</div>
                                                    <a href="#" className="btn my-menu rounded-5 btn-sm">Continue Shopping</a>
                                                </>
                                            }
                                        </div>
                                    </div>


                                </>
                            }
                        </div>
                        <div className="modal-footer">
                            {!props.login ?
                                <button type="button" className="btn my-warning-login rounded-5 shadow px-5" data-bs-dismiss="modal" onClick={props.handleLogin}>Sign In</button>
                                :
                                <button type="button" className="btn my-warning-login rounded-5 shadow px-5" data-bs-dismiss="modal" onClick={props.handleLogin}>Sign Out</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LoginModal;