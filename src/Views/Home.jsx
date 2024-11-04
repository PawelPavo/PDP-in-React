import React from "react";
import HP_Carousel from "../components/Carousel/HP_Carousel";
import Tile_Ads from "../components/Homepage/Tile_Ads";
import Lower_Tile_Ads from "../components/Homepage/Lower_Tile_Ads";
import HP_TrendingNow from "../components/Homepage/HP_TrendingNow"

const Home = (props) => {
    return (
        <>
            <div className="container wellness-blog-title">
                <div className="row">
                        <Tile_Ads></Tile_Ads>
                </div>
                <div className="mt-4">
                    {/* <HP_Carousel addToCart={props.addToCart} /> */}
                    <HP_TrendingNow addToCart={props.addToCart} />
                </div>

                <div className="row mt-4">
                    <Lower_Tile_Ads></Lower_Tile_Ads>
                </div>

                <div className="row border mt-5">OTHER STUFF</div>

            </div>
        </>
    )
}

export default Home; 