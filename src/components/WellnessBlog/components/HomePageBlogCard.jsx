import React from "react";

const HomePageBlogCard = (props) => {
    return (
        <>
            <div className="col">
                <a href="#" className="navlink">
                    <div className="card navlink h-100"><img src={props.image} className="img-fluid" alt="..." />
                        <div className="card-body"> <span className="w-75 mt-4 position-absolute top-0 start-50 translate-middle bg-white border border-dark text-dark py-1 px-3 rounded-5 text-center">
                            <div className="dark-blue"><i className="fa-solid fa-eye" ></i> {props.views} Views</div>
                        </span>
                            <h5 className="card-title text-truncate">{props.title}</h5>
                            <p className="card-text text-truncate">{props.body}</p>
                        </div>
                        <div><p className="m-3">By: {props.author}</p></div>
                        <div className="card-footer text-end bg-white border-0">
                            <div className="btn btn-sm custom-ghost-teal rounded-5 px-4  text-small">{props.category}</div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default HomePageBlogCard;