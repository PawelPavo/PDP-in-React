import React from "react";
import a_z from "./a_z"
import TrendingNow from "./TrendingNow";


const AZ_componenet = (props) => {
    return (
        <>
                        <TrendingNow addToCart={props.addToCart}/>

            {a_z.map((filter) =>
                <>
                    <div id={`catalog-${filter.letter}`} className="justify-content-center" style={{ scrollMarginTop: "255px" }}>
                        <hr />
                        <h2 className="ms-3">{filter.letter}</h2>
                        <hr />
                        {filter.items.map((item) =>

                            <div className="row border p-2 rounded mb-2">
                                <div className="col-3 col-lg-1 my-auto text-center">
                                    <div className="btn btn-sm btn-orange-white text-nowrap p-0 px-2 py-1" onClick={props.addToCart}>Add <i class="fa-solid fa-cart-shopping pt-1" aria-hidden="true"></i></div>
                                    <div className="col-lg-6"></div>
                                </div>
                                <div className="col my-auto ms-2">
                                    <a href="#" className="link">{item.title}</a>
                                    {item.sale==1&&<span class="ms-4 badge text-bg-danger">Sale!</span>}
                                    {item.hot==1&&<span class="ms-4 badge text-bg-warning">Hot!</span>}
                                    {item.trending==1&&<span class="ms-4 badge text-bg-success">Trending!</span>}
                                    {item.new==1&&<span class="ms-4 badge text-bg-info">New!</span>}
                                </div>
                            </div>

                        )}
                    </div>
                    {filter.add_unit == 1 &&

                        <div className="row border px-2 py-3 rounded bg-light m-3">
                            <div class="col-lg-2 text-center my-auto">
                                <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                                    class="img-fluid rounded-start" alt="..." style={{ width: "55px" }} />
                            </div>
                            <div className="col-lg-8 my-auto text-center">
                                <a href="#" className="add_unit_name">
                                <div className="fs-4 ">{filter.add_unit_name}</div>
                                </a>
                            </div>
                            <div className="col-lg-2 text-center my-auto">
                                <button class="btn btn-orange-white w-100" onClick={props.addToCart}>Add To Cart</button>
                            </div>

                        </div>

                       
                     
                    }
                </>
                )}

            </>
    )
}

                    export default AZ_componenet;