import { Fragment, React , useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { CategoriesContext } from '../../contexts/CategoriesContext';
import './products.scss';
import CategoriesPreview from '../../routes/categories-preview/categoriesPreview';
import Category from '../../routes/category/Category';
const Shop = () => {

 const { categoriesMap }  = useContext(CategoriesContext);
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  )
}

export default Shop