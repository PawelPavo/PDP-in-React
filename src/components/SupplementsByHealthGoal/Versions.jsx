import React from "react";

const versions = [
    {
        unit: "25 mcg (1000IU)",
        items: [
            {
                id: 1,
                count: "90 softgels",
                price: "5.25"
            },
            {
                id: 2,
                count: "250 softgels",
                price: "9.75"
            }]
    },
    {
        unit: "50 mcg (2000IU)",
        items: [
            {
                count: "29.57 liquid",
                price: "21.00"
            },
            {
                count: "29.57 liquid",
                price: "21.00"
            }]
    }
]

const Versions = () => {
    return (
        <>
        <hr className="mb-0"/>
                {versions.map(version => (
                    <>
                    
                        <div className="row fw-bold mt-3">
                            {version.unit}
                        </div>
                        {version.items.map(item => (
                            <>
                                <div className="col-md-6">
                                <div className="btn btn-sm btn-outline-secondary w-100 mx-1 my-1 my-menu">
                                    <span> {item.count}</span>
                                    <span> $ {item.price}</span>
                                </div>
                                </div>

                            </>
                        ))}

                    </>
                ))}
        </>
    )
};

export default Versions;