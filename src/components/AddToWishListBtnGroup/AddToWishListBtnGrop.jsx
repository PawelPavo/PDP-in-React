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

            <div type="button" role="button" className="border-0">
                {like ?
                    <i className="fa-solid fa-heart text-danger border p-2 rounded-5 shadow-sm" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    :
                    <i className="fa-regular fa-heart text-danger border p-2 rounded-5 shadow-sm" onClick={updateLike} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                }
            </div>
            <i class="fa-solid fa-arrow-up-from-bracket  border p-2 rounded-5 mt-2 teal shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#socialMedia" aria-expanded="false" aria-controls="socialMedia"></i>
            <div class="collapse" id="socialMedia">
                <div className="ms-1 mt-1 teal">
                    <div><i class="fa-brands fa-facebook socialIcon "></i></div>
                    <div><i class="fa-brands fa-x-twitter socialIcon"></i></div>
                    <div><i class="fa-brands fa-pinterest socialIcon"></i></div>
                    <div><i class="fa-brands fa-facebook-messenger socialIcon"></i></div>
                    <div><i class="fa-brands fa-linkedin socialIcon"></i></div>
                    <div><i class="fa-solid fa-print socialIcon"></i></div>
                    <div><i class="fa-solid fa-download socialIcon"></i></div>
                    <div><i class="fa-regular fa-envelope socialIcon"></i></div>
                </div>
            </div>

            <MyModal like={like} updateLike={updateLike} value={value} />
        </>
    )
}


export default AddToWishListBtnGroup;