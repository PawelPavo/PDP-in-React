import React, { useState, useEffect } from "react";
import LoaderGridCard from "../components/Search/Loader/LoaderGridCard";
import LoaderListCard from "../components/Search/Loader/LoaderListCard";
import BestResult from "../components/Search/BestResult";
import BestResultsGrid from "../components/Search/Loader/BestResultsGrid";
import Filters from "../components/Search/Filters/Filters";
import Types from ".././helpers/types"
import Health_Concerns from ".././helpers/health_concerns"
import DesktopFilters from "../components/Search/Filters/DesktopFilters";
import ContentTypes from "../components/Search/Filters/ContentTypes";



const Search = () => {
  useEffect(() => {
    localStorage.setItem("Types", JSON.stringify(Types))
    localStorage.setItem("Health Concerns", JSON.stringify(Health_Concerns))
  }, []);

  const [toggleView, setToggleView] = useState(false)
  const [toggleProducts, setToggleProducts] = useState(true)
  const [toggleMagazines, setToggleMagazines] = useState(false)
  const [toggleNews, setToggleNews] = useState(false)
  const [filters, setFilters] = useState("product")
  const [numberOfPages, setNumberOfPages] = useState("1-25")
  const [numberOfResults, setNumberOfResults] = useState("343")
  const [relevancyFilter, setRelevancyFilter] = useState(true)
  const [dateFilter, setDateFilter] = useState(true)
  const [radioValue, setRadioValue] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [immuneSupportFlag, setImmuneSupportFlag] = useState(false)
  const [heartHealthFlag, setHeartHealthFlag] = useState(false)


  const sortRelevancy = () => {
      setRelevancyFilter(!relevancyFilter)
  }

  const sortDate = () => {
      setDateFilter(!dateFilter)
  }

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
  const getRadioValue = (e) => {
    setRadioValue(e.target.innerText)
    setShowFilters(true)
    if(e.target.innerText == "Immune Health" || e.target.innerText == "Immune Seasonal Support" || e.target.innerText == "Nasal Support"){
      setImmuneSupportFlag(true)
    } else {
      setImmuneSupportFlag(false)
    }

    if(e.target.innerText == "Heart Health" || e.target.innerText == "Blood Pressure / Vascular Health" || e.target.innerText == "Cholesterol Management"){
      setHeartHealthFlag(true)
    } else {
      setHeartHealthFlag(false)
    }

  }

  const hideFilters = () => {
    setShowFilters(false)
  }


  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-3 mb-lg-0 d-lg-block d-none bg-white">
          <div className="border rounded py-2 px-3 bg-light-subtle">
            {!toggleProducts && <div>
            <div className="fs-5 dark-blue mt-2">Sort by:</div>
            <div className="d-flex justify-content-around mt-2">
                    <button className="btn border btn-light px-4" onClick={sortRelevancy}>Relevancy {relevancyFilter ? <i class="bi bi-sort-down-alt fs-6 ms-2"></i> : <i class="bi bi-sort-up fs-6 ms-2"></i>}</button>
                    <button className="btn border btn-light px-4" onClick={sortDate}>Date {!dateFilter ? <i class="bi bi-sort-numeric-up-alt fs-6 ms-2"></i> : <i class="bi bi-sort-numeric-down fs-6 ms-2"></i>}</button>
            </div>
            </div>}
                {toggleProducts&&<DesktopFilters getRadioValue={getRadioValue} immuneSupportFlag={immuneSupportFlag} heartHealthFlag={heartHealthFlag}/>}
                {toggleNews&& <ContentTypes/>}
          </div>
          </div>
          <div className="col-lg-9">
            <div className="row mb-3">
              <div className="col my-auto">
                <div className="d-flex justify-content-between">
                <button type="button" class={`btn search-result-option  ${!toggleProducts ? "" : "search-result-option_active"}`} onClick={activateProducts}>Products</button>
                <button type="button" class={`btn search-result-option  ${!toggleMagazines ? "" : "search-result-option_active"}`} onClick={activateMagz}>Magazines</button>
                <button type="button" class={`btn search-result-option  ${!toggleNews ? "" : "search-result-option_active"}`} onClick={activateNews}>News & Protocols</button>
                </div>
              </div>
            <div className="d-lg-block d-lg-none mt-2 mb-2 py-2">

              <div className="d-flex">
                <Filters filters={filters} />
              </div>
              
            </div>

              <div className="col-lg-7 my-auto">
                <img src="https://www.lifeextension.com/-/media/lifeextension/lpages/2024/summer-clearance/nc_summersale_searchbann.jpg?rev=6d9b434767c34b949d0dabafd4091270&h=102&w=653&la=en&hash=E4C426999C46B3E400317D31BEF79CFA" alt="" class="img-fluid rounded" />
              </div>
            </div>

            <div className="d-flex border rounded justify-content-end ms-1">
              <div className="col my-auto ms-2">
                <p className="m-0 p-0">Results <strong>{numberOfPages}</strong> of <strong>{numberOfResults}</strong> for <strong>Vitamin D3</strong></p>
              </div>
              <i className={`btn bi bi-list-task fs-4 ${!toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(false)}></i>
              <i className={`btn bi bi-columns-gap fs-4 ${toggleView && "text-primary bg-light"}`} onClick={() => setToggleView(true)}></i>
            </div>
            {showFilters && 
            <div className="ms-2 d-flex my-3">
                <p className="m-0 p-0 fw-bold my-auto">Filters:</p>
                <button className="btn btn-sm btn-outline-secondary rounded-pill mx-2 px-3 py-0" onClick={hideFilters}>{radioValue} <i class="bi bi-x-circle ms-2"></i></button>
            </div>
            }
            
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