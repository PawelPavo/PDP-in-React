import { React, useState } from "react";
import MyModal from "../Modal/MyModal";


const AddToWishListBtnGroup = (props) => {

    const [like, setLike] = useState(false)
    const [value, setValue] = useState("My Favorites")
    const updateLike = (event) => {
        setLike(!like)
        setValue(event.target.textContent)
    }

    const setList = (event) => {
        setValue(event.target.textContent)
    }

    return (
        <>
            <div className="col-12 text-center">

                {like ?
                    <>
                        <div className="btn-group">
                            <button type="button" className="border border-secondary rounded-start bg-light">
                                <i className="fa-solid fa-heart text-danger" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            </button>
                            <button className="btn btn-outline-secondary btn-sm rounded-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose a Wish List <i class="fa-solid fa-chevron-down"></i>

                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item" onClick={setList} data-bs-toggle="modal" data-bs-target="#exampleModal">My Favorites</li>
                                <li className="dropdown-item" onClick={setList} data-bs-toggle="modal" data-bs-target="#exampleModal">Dad's List</li>
                                <li className="dropdown-item" onClick={setList} data-bs-toggle="modal" data-bs-target="#exampleModal">Mom's List</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Add New Wish List</li>
                            </ul>
                        </div>
                        
                    </>
                    :
                    <>
                        <div className="btn-group">
                            <button type="button" className="border border-secondary rounded-start bg-light">
                                <i className="fa-regular fa-heart text-danger" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                </i>
                            </button>
                            <button className="btn btn-outline-secondary btn-sm rounded-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose a Wish List <i class="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal" value="My Favorites">My Favorites</li>
                                <li className="dropdown-item" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal">Dad's List</li>
                                <li className="dropdown-item" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal">Mom's List</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Add New Wish List</li>
                            </ul>
                        </div>
                        
                    </>
                }
            </div>
            <MyModal like={like} updateLike={updateLike} value={value}/>
        </>
    )
}

export default AddToWishListBtnGroup;