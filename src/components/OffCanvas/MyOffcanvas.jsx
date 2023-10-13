import React from "react";
import {Link} from "react-router-dom";

const MyOffcanvs = (props) => {



    return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header offcanvas_background">
                    {props.login ?
                        <h6 className="offcanvas-title my-offcanvas-title rounded px-4 py-1" id="offcanvasExampleLabel" data-bs-toggle="modal" data-bs-target="#loginModal">Hello, {props.user}</h6>
                        :
                        <h6 className="offcanvas-title my-offcanvas-title rounded px-4 py-1" id="offcanvasExampleLabel" data-bs-toggle="modal" data-bs-target="#loginModal">Sign In/Join</h6>
                    }
                    <div className="close-offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark fs-4 close-offcanvas"></i>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link to="/" >Back to PDP</Link> <br/>
                    <Link to="/sign-up" >Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOffcanvs;