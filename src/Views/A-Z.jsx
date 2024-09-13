import React from "react";
import AZ_componenet from "../components/A-Z/AZ_component";
import zIndex from "@mui/material/styles/zIndex";

const A_Z = (props) => {

    return (
        <>
            <div className="container">
                <div className="row text-center bg-white sticky-top" style={{zIndex:1, top:"120px"}}>
                <h1 className="dark-blue fw-bold mt-2">Supplements A-Z</h1>
                    <div className="d-flex gap-1 flex-nowrap overflow-x-auto py-2 border justify-content-xl-center mb-3">
                        <a href="#catalog-0-9" class="btn btn-light border text-nowrap">0-9</a>
                        <a href="#catalog-A" class="btn btn-light border">A</a>
                        <a href="#catalog-B" class="btn btn-light border">B</a>
                        <a href="#catalog-C" class="btn btn-light border">C</a>
                        <a href="#catalog-D" class="btn btn-light border">D</a>
                        <a href="#catalog-E" class="btn btn-light border">E</a>
                        <a href="#catalog-F" class="btn btn-light border">F</a>
                        <a href="#catalog-G" class="btn btn-light border">G</a>
                        <a href="#catalog-H" class="btn btn-light border">H</a>
                        <a href="#catalog-I" class="btn btn-light border">I</a>
                        <a href="#catalog-J" class="btn btn-light border">J</a>
                        <a href="#catalog-K" class="btn btn-light border">K</a>
                        <a href="#catalog-L" class="btn btn-light border">L</a>
                        <a href="#catalog-M" class="btn btn-light border">M</a>
                        <a href="#catalog-N" class="btn btn-light border">N</a>
                        <a href="#catalog-O" class="btn btn-light border">O</a>
                        <a href="#catalog-P" class="btn btn-light border">P</a>
                        <a href="#catalog-Q" class="btn btn-light border">Q</a>
                        <a href="#catalog-R" class="btn btn-light border">R</a>
                        <a href="#catalog-S" class="btn btn-light border">S</a>
                        <a href="#catalog-T" class="btn btn-light border">T</a>
                        <a href="#catalog-U" class="btn btn-light border">U</a>
                        <a href="#catalog-V" class="btn btn-light border">V</a>
                        <a href="#catalog-W" class="btn btn-light border">W</a>
                        <a href="#catalog-X" class="btn btn-light border">X</a>
                        <a href="#catalog-Y" class="btn btn-light border">Y</a>
                        <a href="#catalog-Z" class="btn btn-light border">Z</a>
                    </div>

                </div>
                    
                    <AZ_componenet></AZ_componenet>

                    
               

                        <div className="text-center no-gutters border border-start-0 border-end-0 pt-3 mt-5">
        <p>FOOTER</p>
      </div>
            </div>
        </>
    )
};

export default A_Z