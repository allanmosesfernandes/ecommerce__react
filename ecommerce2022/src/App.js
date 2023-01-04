import './App.css';
import React from 'react'
import Home from './routes/home';
import "./categories.styles.scss"
import { Routes, Route } from 'react-router-dom';
import Test from './routes/test';
import Navigation from './routes/navigation';
import SignIn from './routes/signIn';


const Shop = () => {
  return (
    <h1>THis is shop</h1>
  )
}
const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />

      </Route>
    </Routes>
  )
}

export default App