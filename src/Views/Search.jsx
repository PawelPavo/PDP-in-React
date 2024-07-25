import React, { useState } from "react";
import LoaderGridCard from "../components/Search/Loader/LoaderGridCard";
import LoaderListCard from "../components/Search/Loader/LoaderListCard";
import BestResult from "../components/Search/BestResult";
import BestResultsGrid from "../components/Search/Loader/BestResultsGrid";
import Filters from "../components/Search/Filters/Filters";


const Search = () => {

  const [toggleView, setToggleView] = useState(false)
  const [toggleProducts, setToggleProducts] = useState(true)
  const [toggleMagazines, setToggleMagazines] = useState(false)
  const [toggleNews, setToggleNews] = useState(false)
  const [filters, setFilters] = useState("product")
  const [numberOfPages, setNumberOfPages] = useState("1-25")
  const [numberOfResults, setNumberOfResults] = useState("343")

  const activateProducts = () => {
    setToggleProducts(true)
    setToggleMagazines(false)
    setToggleNews(false)
    setFilters("product")
    setNumberOfPages("1-25")
    setNumberOfResults("343")
  }

  const activateMagz = () => {
    setToggleProducts(false)
    setToggleMagazines(true)
    setToggleNews(false)
    setFilters("magazines")
    setNumberOfPages("1-10")
    setNumberOfResults("115")
  }

  const activateNews = () => {
    setToggleProducts(false)
    setToggleMagazines(false)
    setToggleNews(true)
    setFilters("news")
    setNumberOfPages("1-10")
    setNumberOfResults("97")
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-3 mb-lg-0 border d-lg-block d-none">
            
            <div className="">
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
          </div>
          <div className="col-lg-9">
            <div className="row mb-3">
              <div className="col mt-5">
                <div className="d-flex justify-content-between">
                <button type="button" class={`btn search-result-option  ${!toggleProducts ? "" : "search-result-option_active"}`} onClick={activateProducts}>Products</button>
                <button type="button" class={`btn search-result-option  ${!toggleMagazines ? "" : "search-result-option_active"}`} onClick={activateMagz}>Magazines</button>
                <button type="button" class={`btn search-result-option  ${!toggleNews ? "" : "search-result-option_active"}`} onClick={activateNews}>News & Protocols</button>
                </div>
              </div>
              <div className="d-lg-block d-lg-none my-2">
              <div className="d-flex">
                <Filters filters={filters} />
              </div>
          </div>

              <div className="col-lg-7 mt-2">
                <img src="https://www.lifeextension.com/-/media/lifeextension/lpages/2024/summer-clearance/nc_summersale_searchbann.jpg?rev=6d9b434767c34b949d0dabafd4091270&h=102&w=653&la=en&hash=E4C426999C46B3E400317D31BEF79CFA" alt="" class="img-fluid rounded" />
              </div>
            </div>

            <div className="d-flex border rounded justify-content-end ms-1">
              <div className="col my-auto ms-2">
                <p className="m-0 p-0">Results <strong>{numberOfPages}</strong> of <strong>{numberOfResults}</strong> for <strong>NAD</strong></p>
              </div>
              <i className={`btn bi bi-list-task fs-4 ${!toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(false)}></i>
              <i className={`btn bi bi-columns-gap fs-4 ${toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(true)}></i>
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