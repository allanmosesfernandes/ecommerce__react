import './App.css';
import React from 'react'
import Home from './routes/home';
import "./categories.styles.scss"
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation';
import Authentication from './routes/auth/authentication';
import Products from './components/Shop/products.component';
import Checkout from './components/Checkout/checkout';

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Products />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App