import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'

const CategoryDirectory = ({categories}) => {
  return (
    <div className='categories-container'>
        {
            categories.map(product => {
                return <CategoryItem product={product} />
            })
        }
    </div>
  )
}

export default CategoryDirectory