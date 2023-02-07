import React from 'react'
import CategoryDirectory from '../components/CategoryDirectory/CategoryDirectory';
import { Outlet } from 'react-router-dom';
const Home = () => {

  return (
    <div>
        <CategoryDirectory/>
        <Outlet />
    </div>
  )
}

export default Home