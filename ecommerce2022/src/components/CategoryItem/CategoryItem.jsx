import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({product}) => {
const {id, imageUrl, title, route} = product;
const navigate = useNavigate();
const onNavigateHandler = () => {
  navigate(route);
}


  return (<div className='category-container' key={id} onClick={onNavigateHandler}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now </p>
        </div>
    </div>
  )
}

export default CategoryItem