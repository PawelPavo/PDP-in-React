import React from "react";
import styles from "./MyModal.module.css"

const MyModal = (props) => {


  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-light">
              {props.like ?
                <h1 className="modal-title fs-6 dark-blue" id="exampleModalLabel">Items added {props.value ? <> to: <span className="link"  data-bs-toggle="modal" data-bs-target="#exampleModal">{props.value}</span></> : <>to: <span className="link"  data-bs-toggle="modal" data-bs-target="#exampleModal">My Favorites</span></>}</h1>
                :
                <h1 className="modal-title fs-6 dark-blue" id="exampleModalLabel">Item Removed</h1>
              }
              <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2 className="text-start dark-blue">Vitamin D3</h2>
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className={`btn btn-sm rounded w-100 mt-2 ${styles.view_lists_btn}`} data-bs-dismiss="modal"><small>View Wish Lists</small></button>
                </div>
                <div className="col-md-6">
                  <button type="button" className={`btn btn-sm rounded w-100 mt-2 ${styles.add_to_list}`} data-bs-dismiss="modal"><small>Continue Shopping</small></button>
                </div>
              </div>
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