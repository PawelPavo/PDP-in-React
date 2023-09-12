import React from "react";
import MyCarousel from "../Carousel/MyCarousel";
import AddToWishListBtnGroup from "../AddToWishListBtnGroup/AddToWishListBtnGrop";


const ProductImageCard = (props) => {


    return (
        <>
            <div className="card border-0">
                <span className="m-2 position-absolute">
                </span>
                <div className="text-center">
                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/large/01713.png" className="mt-3" alt="Vitamin D3" />
                </div>
                <div className="card-body text-center p-0">
                    <p className="pt-2">Click to zoom</p>
                </div>
            </div>
            <div className="d-none d-lg-block mb-3">
                <MyCarousel />
            </div>
           <AddToWishListBtnGroup />
        </>
    )
};

export default ProductImageCard;