import React from "react";

const HomePageBlogCard = (props) => {
    return (
        <>
            <div className="col-lg-4">
                <a href="#" className="navlink">
                    <div className="card navlink h-100 border-top-0">
                        <div className="over-the-image-container">
                        <img src={props.image} className="img-fluid rounded image-hover " alt="..." />
                        <div className="dark-blue bg-white shadow-sm rounded px-2 bottom-right"><i className="fa-solid fa-eye" ></i> {props.views} Views</div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-truncate">{props.title}</h5>
                            <p className="card-text text-truncate">{props.body}</p>
                        </div>
                        <div><p className="m-3">By: {props.author}</p></div>
                        <div className="card-footer text-end bg-white border-0">
                            <button className="btn btn-sm custom-ghost-teal rounded-5 px-4 text-small" tabIndex={1}>{props.category}</button>
                        </div>
                    </div>
                </a>
            </div>

        </>
    )
}

export default HomePageBlogCard;