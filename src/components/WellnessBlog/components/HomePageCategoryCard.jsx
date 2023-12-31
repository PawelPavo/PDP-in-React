import React from "react";

const HomePageCategoryCard = (props) => {
    return (
        <>
        <div className="col my-auto">
        <div className="card h-100 border-0">
          <div className="card-body text-center">
            <div className="btn custom-dark fs-5 rounded-5 px-4 px-5 shadow">{props.categoryTitle} <i className="fa-solid fa-arrow-right"></i></div>
            <div className="flex-wralex mt-3">
            {props.NutritionSubCategories.map(item => (
                <>
                    <div className="btn btn-sm btn-outline-secondary rounded-5 m-1 px-3 py-2">{item.title}</div>
                </>
            ))}
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HomePageCategoryCard;