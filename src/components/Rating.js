import React from 'react'


const Rating = (props) => {
    const {value} = props
    return (
        <div>
            <ion-icon name={
                value >= 1
                ? "star"
                : value >=0.5
                ? "star-half"
                : "star-outline"
            }></ion-icon>
            <ion-icon name={
                value >= 2
                ? "star"
                : value >=1.5
                ? "star-half"
                : "star-outline"
            }></ion-icon>
            <ion-icon name={
                value >= 3
                ? "star"
                : value >=2.5
                ? "star-half"
                : "star-outline"
            }></ion-icon>
            <ion-icon name={
                value >= 4
                ? "star"
                : value >=3.5
                ? "star-half"
                : "star-outline"
            }></ion-icon>
            <ion-icon name={
                value >= 5
                ? "star"
                : value >=4.5
                ? "star-half"
                : "star-outline"
            }></ion-icon>
            

        </div>
    )
}

export default Rating