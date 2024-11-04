import React from "react";


const Tile_Ads = () => {
    return (
        <>
            <div className="col-lg-6">
                <a href="/pdp" className="main-ad">
                    <div class="card h-100">
                        <img className="img-fluid rounded" src="https://www.lifeextension.com/-/media/lifeextension/lpages/2023/best-sellers/10-31/nc_gs_lp_1031_hero_mobile.jpg" alt="" />
                        <div class="card-img-overlay align-bottom-custom">
                            <div className="text-center">
                                <div class="btn btn-lg btn-white-orange fw-bold text-nowrap rounded-1">Shop Now!</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-lg-6 my-auto">
                <div className="row ">
                    <div className="col-lg-6 mt-3 mt-lg-0">
                        <a href="/pdp" className="hp-tile">
                            <div className="card bg-light h-100" >
                                <div className="text-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/homepage/tileads/new/02320_nitrovasc-boost_tilead.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto", width: "160px" }} />
                                </div>
                                <div className="card-body p-0 px-3 py-2">
                                    <h5 className="card-title fs-6" style={{minHeight:"29px"}}>Heart-Pumping Savings!</h5>
                                    <p className="card-text text-small">It’s a sweetheart of a deal! Take 35% off this ConsumerLab.com six-time award winner.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6 mt-3 my-lg-0">
                        <a href="/pdp" className="hp-tile">
                            <div className="card bg-light h-100">
                                <div className="text-center">
                                    <img src="https://www.lifeextension.com/-/media/lifeextension/homepage/tileads/new/02348_nad_cell_regenerator_tilead.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto", width: "160px" }} />
                                </div>
                                <div className="card-body p-0 px-3 py-2">
                                    <h5 className="card-title fs-6" style={{minHeight:"29px"}}>Why are celebs taking NAD?</h5>
                                    <p className="card-text text-small">NAD supplements are popular for good reason! Ready to give this healthy aging fave a try?</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <img src="https://www.lifeextension.com/-/media/lifeextension/lpages/2024/lab-test-special/nov/nov-lab-test_srchbann.jpg" alt="" class="img-fluid rounded mt-4 border border-secondary-subtle" />

            </div>



        </>
    )
}


export default Tile_Ads;
