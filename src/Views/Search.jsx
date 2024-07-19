import React, { useState } from "react";
import LoaderGridCard from "../components/Search/Loader/LoaderGridCard";
import LoaderListCard from "../components/Search/Loader/LoaderListCard";
import BestResult from "../components/Search/BestResult";
import BestResultsGrid from "../components/Search/Loader/BestResultsGrid";



const Search = () => {

  const [toggleView, setToggleView] = useState(false)
  const [toggleProducts, setToggleProducts] = useState(true)
  const [toggleMagazines, setToggleMagazines] = useState(false)
  const [toggleNews, setToggleNews] = useState(false)

  const activateProducts = () => {
    setToggleProducts(true)
    setToggleMagazines(false)
    setToggleNews(false)
  }

  const activateMagz = () => {
    setToggleProducts(false)
    setToggleMagazines(true)
    setToggleNews(false)
  }

  const activateNews = () => {
    setToggleProducts(false)
    setToggleMagazines(false)
    setToggleNews(true)
  }


  return (
    <>
      <div className="container">


        <div className="row">
          <div className="col-lg-3 mb-3 mb-lg-0 border">
            
            <div className="d-lg-block d-none">
            <div>Filters:</div>
              <div className="row">
                <div className="border rounded">Health Concerns</div>
              </div>
              <div className="row">
                <div className="border rounded">Types</div>
              </div>
              <div className="row">
                <div className="border rounded">Attributes</div>
              </div>
              <div className="row">
                <div className="border rounded">Brand</div>
              </div>
              <div className="row">
                <div className="border rounded">Content Type</div>
              </div>
            </div>

            <div className="d-lg-block d-lg-none my-2">
              <div className="d-flex">
              <button className="btn btn-sm border btn-light">Health Concerns</button>
              <button className="btn btn-sm border btn-light mx-1">Types</button>
              <button className="btn btn-sm border btn-light">Attributes</button>
              <button className="btn btn-sm border btn-light mx-1">Brand</button>
              <button className="btn btn-sm border btn-light">Content Type</button>
              </div>
            </div>

          </div>
          <div className="col-lg-9">
            <div className="d-flex border rounded justify-content-end">
              <div className="col my-auto ms-2">
                <p className="m-0 p-0">Results <strong>1-25</strong> of <strong>343</strong> for <strong>NAD</strong></p>
              </div>
              <i className={`btn bi bi-list-task fs-4 ${!toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(false)}></i>
              <i className={`btn bi bi-columns-gap fs-4 ${toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(true)}></i>
            </div>
            <div className="d-flex ms-1 rounded justify-content-end mb-2">
            </div>
            <div className="row">
              <div className="col text-center text-lg-start ms-lg-2 my-auto">
                <button type="button" class={`btn btn-sm add_to_list  ${!toggleProducts ? "" : "add_to_list_active"}`} onClick={activateProducts}>Products</button>
                <button type="button" class={`btn btn-sm add_to_list mx-3 ${!toggleMagazines ? "" : "add_to_list_active"}`} onClick={activateMagz}>Magazines</button>
                <button type="button" class={`btn btn-sm add_to_list  ${!toggleNews ? "" : "add_to_list_active"}`} onClick={activateNews}>News & Protocols</button>
              </div>
              <div className="col-lg-7 mt-2">
                <img src="https://www.lifeextension.com/-/media/lifeextension/lpages/2024/summer-clearance/nc_summersale_searchbann.jpg?rev=6d9b434767c34b949d0dabafd4091270&h=102&w=653&la=en&hash=E4C426999C46B3E400317D31BEF79CFA" alt="" class="img-fluid rounded" />
              </div>
            </div>
            {toggleView ? (

              <div className="ms-1 justify-content-center">

                <div className="row row-cols-1 row-cols-lg-3">
                  <BestResultsGrid></BestResultsGrid>
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
                <BestResult></BestResult>
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