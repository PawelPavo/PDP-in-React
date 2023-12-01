import * as React from "react";
import Cart from "../Views/Cart";

function CartRoute(props) {
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        let showTimer = setTimeout(() => setShow(false), 2000);
        return () => {
            clearTimeout(showTimer);
        };
    }, []);

    if (show) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-lg-8 text-center fs-4 mb-3">Loading Cart Simulation</div>
                <div className="col-lg-8 text-center fs-3 mb-3">Please Wait...</div>
                <div class="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!show) {
        return <Cart cartItems={props.cartItems} addToCart={props.addToCart}/>;
    }
}

export default CartRoute;
