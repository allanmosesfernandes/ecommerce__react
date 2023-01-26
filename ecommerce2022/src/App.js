import './App.css';
import React from 'react'
import Home from './routes/home';
import "./categories.styles.scss"
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation';
import Authentication from './routes/auth/authentication';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/checkout';
import CategoriesPreview from './routes/categories-preview/categoriesPreview';
const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App