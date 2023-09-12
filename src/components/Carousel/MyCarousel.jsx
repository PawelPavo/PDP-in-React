import React from "react";
import syles from "./MyCarousel.module.css"

const MyCarousel = props => {
    return (
        <>
            <div className="row justify-content-center">
                <div className={`col-3 border text-center border-3 border-dark ${ syles.onHover}`}>
                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/large/01713.png?rev=0abe180bd775483daa71f06bf414fbfa&la=en&h=60&hash=0133FA2963845B8CF8E7B7D8CEF3A15C" className="object-fit-contain pt-1" alt="..." style={{width:"30px", height:"50px"}}/>
                </div>
                <div className={`col-3 border text-center border-3 mx-2 ${ syles.onHover}`}>
                    <img src="https://www.lifeextension.com/-/media/lifeextension/products/supplementfacts/01713a.png?rev=5e63e41af55d4d1ebfb78f7c37bdf353&la=en&h=60&hash=396426A804753D2EEE4CAB55C8FEB26B" className="object-fit-contain pt-1" alt="..." style={{width:"30px", height:"50px"}}/>
                </div>
                <div className={`col-3 border text-center border-3 ${ syles.onHover}`}>
                    <img src="https://img.youtube.com/vi_webp/MOChwuz4YaQ/mqdefault.webp" className="object-fit-cover" alt="..." style={{width:"30px", height:"55px"}}/>
                </div>
            </div>

        </>
    )
};

export default MyCarousel;