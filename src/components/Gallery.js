import React from 'react'
import products from '../../src/resources'
import Card from './Card'
const Gallery = () => {
    
    return (
        <div className='mx-auto max-w-7xl mt-10 border-t-2 grid grid-cols-4 gap-4'>
            {
                products.map(product => {
                    return <Card
                    image={product.image}
                    name = {product.name}
                    reviews = {product.numReviews}
                    price={product.price}
                    rating = {product.rating}
                    />
                })
            }
        </div>
    )
}

export default Gallery