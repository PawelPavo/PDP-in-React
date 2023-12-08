import { React, useState } from "react";
import MyModal from "../Modal/MyModal";


const AddToWishListBtnGroup = (props) => {

    const [like, setLike] = useState(false)
    const [value, setValue] = useState("My Favorites")
    const updateLike = (event) => {
        setLike(!like)
        setValue(event.target.textContent)
    }
    return (
        <>
            <div className="col-12 text-center">

                <div className="btn-group">
                    <div type="button" role="button" className="border-0">
                        {like ?
                            <i className="fa-solid fa-heart text-danger border p-2 rounded-5" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            :
                            <i className="fa-regular fa-heart text-danger border p-2 rounded-5" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        }
                    </div>
                </div>

            </div>
            <MyModal like={like} updateLike={updateLike} value={value}/>
        </>
    )
}

export default AddToWishListBtnGroup;