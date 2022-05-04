import React from 'react'


const Card = (props) => {
    const {image, name, price, reviews} = props;
    return (
        <div className="max-w-xs my-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>


                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{reviews}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
                </div>
            </div>
    )
}

export default Card