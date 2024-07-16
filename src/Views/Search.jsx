import React, { useState } from "react";
import LoaderGridCard from "../components/Search/Loader/LoaderGridCard";
import LoaderListCard from "../components/Search/Loader/LoaderListCard";


const Search = () => {

  const [toggleView, setToggleView] = useState(false)



  return (
    <>
      <div className="container">
        <h1 className="row"></h1>
        <h1>Search</h1>

        <div className="row">
          <div className="col-lg-3 border rounded bg-light"></div>
          <div className="col-lg-9">
            <div className="d-flex border ms-1 rounded justify-content-end">
                  <i className={`btn bi bi-list-task fs-4 ${!toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(false)}></i>
                  <i className={`btn bi bi-columns-gap fs-4 ${toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(true)}></i>         
            </div>
            <h1 className="mt-3 ps-4">Search Results</h1>
            {toggleView ? (

              <div className="ms-1 justify-content-center">
                
                <div className="row row-cols-1 row-cols-lg-3">
                    <LoaderGridCard></LoaderGridCard>
                    <LoaderGridCard></LoaderGridCard>
                    <LoaderGridCard></LoaderGridCard>
                    <LoaderGridCard></LoaderGridCard>
                    <LoaderGridCard></LoaderGridCard>
                    <LoaderGridCard></LoaderGridCard>
                    <LoaderGridCard></LoaderGridCard>
                </div>
              </div>
            ) : (
              <div className="ms-1 justify-content-center">
                <LoaderListCard></LoaderListCard>
                <LoaderListCard></LoaderListCard>
                <LoaderListCard></LoaderListCard>
                <LoaderListCard></LoaderListCard>
                <LoaderListCard></LoaderListCard>
                <LoaderListCard></LoaderListCard>
                <LoaderListCard></LoaderListCard>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center no-gutters border border-start-0 border-end-0 pt-3 mt-5">
        <p>FOOTER</p>
      </div>
    </>
  )
}

export default Search