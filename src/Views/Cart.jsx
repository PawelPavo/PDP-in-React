import React from "react";
import image from "../Images/Add to Cart-amico.svg"

const Cart = (props) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card border-0" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-4">
                                    <img src={image} class="img-fluid rounded-start" alt="Keep Shopping" />
                                </div>
                                <div class="col-md-6 my-auto">
                                    <div className="card-body text-center">
                                        {props.cartItems === 0 ?
                                            <>
                                                <h5 className="my-3">Your cart is empty.</h5>
                                                <a href="/" className="btn my-warning rounded btn-sm px-4 shadow-sm">Shop Now</a>
                                            </>
                                            :
                                            <>
                                                <h5 className="mb-3">You have <span className="orange"> {props.cartItems} </span> item(s) in your cart.</h5>
                                                <a href="#" className="btn my-warning rounded btn-sm px-4 shadow-sm">Checkout Now</a><br />
                                                <div className="my-2">OR</div>
                                                <a href="/" className="btn my-menu rounded btn-sm">Continue Shopping</a>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 text-center mt-3 my-md-auto">

            </div>

        </>
    )
}

export default Cart;