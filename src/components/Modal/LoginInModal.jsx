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
                                        <div className="col-md-5">
                                            <h1 className="modal-title fs-5 login-title" id="loginModalLabel">{props.greeting}!</h1>
                                            <h4 className="fw-light dark-blue">Sign in to get started...</h4>
                                        </div>

                                        <div className="col-md-7">
                                            <div className="card shadow-sm">

                                            <div className="card-body">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label forHtml="floatingInput">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                                <label forHtml="floatingPassword">Password</label>
                                            </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                {props.cartItems==0 ?
                                    <div className="row">
                                        <div className="fs-3 my-auto mb-3">
                                            Thanks for shopping!
                                        </div>
                                    </div>
                                    :
                                    <div className="row">
                                    <div className="col-md-4 fs-3 my-auto mb-3">
                                        Before you go...
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5 className="mb-3">You have {props.cartItems} item(s) in your cart.</h5>
                                        <a href="#" class="btn my-warning rounded-5 btn-sm px-4 shadow">Checkout Now!</a>
                                    </div>
                                </div>
                                }
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