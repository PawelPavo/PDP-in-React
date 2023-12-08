import React from "react";
import styles from "./MyModal.module.css"
import Cards from "../Carousel/WishListCards";

const MyModal = (props) => {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              {props.like ?
                <div>Add to List</div>
                :
                <div>Removed from List</div>
              }
              <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              <div className="row py-3 bg-light">
                <div className="col-md-8">
                  <div class="card mb-2 p-3 shadow-sm">
                    <div class="row justify-content-center">
                      <div class="col-3 my-auto">
                        <div class="row">
                          <img src="https://www.lifeextension.com/-/media/lifeextension/products/small/01758.png"
                            class="img-fluid rounded-start" alt="..." style={{ width: "85px" }} />
                        </div>
                      </div>
                      <div class="col-8 m-0 p-0">
                        <div class="card-body">
                          <h5 class="free_shipping">Vitamin D3</h5>
                          <p class="card-text">125 mcg (5000 IU), 60 capsules, #01758</p>
                          <div class="d-flex card-text text-end justify-content-between">
                            {props.like ?
                              <>
                                <button className="btn btn-sm btn-outline-secondary rounded-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Choose a Wish List <i className="fa-solid fa-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu">
                                  <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">My Favorites</li>
                                  <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Dad's List</li>
                                  <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Mom's List</li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Add New Wish List</li>
                                </ul>
                              </>
                            :
                            <><div className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={props.updateLike}>Undo</div></>
                            }
                          </div>
                          <button type="button" className={`btn rounded mt-2 p-0 ${styles.view_lists_btn}`} data-bs-dismiss="modal"><small>View Wish Lists</small></button>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-4 my-auto">
                  <div className="row justify-content-center">
                    <button type="button" className={`btn rounded w-75 mt-2 ${styles.add_to_list}`} data-bs-dismiss="modal"><small>Continue Shopping</small></button>
                  </div>
                </div>
              </div>
              <Cards></Cards>
            </div>
            
          </div>
         
        </div>
        
      </div>
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-light shadow-sm">
              <h5 className="modal-title dark-blue fs-6" id="exampleModalToggleLabel2">Create New Wish List</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlInput1" className="form-label ms-2 mb-0 fw-bold"><small>Wish List Name</small></label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="My New Wish List" />
              </div>
            </div>
            <div className="modal-footer">
              {!props.like ?
                <>
                  <button className={`btn btn-sm btn-outline-secondary rounded ${styles.cancel_btn}`} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
                  <button className={`btn btn-sm rounded ${styles.add_to_list}`} onClick={props.updateLike} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Add Item & Continue Shopping</button>
                </>
                :
                <>
                  <button className={`btn btn-sm btn-outline-secondary rounded ${styles.cancel_btn}`} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
                  <button className={`btn btn-sm rounded ${styles.add_to_list}`} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Add Item & Continue Shopping</button>

                </>
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MyModal;