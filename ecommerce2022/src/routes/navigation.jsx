import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import CrwnLogo from '../assets/crown.svg'
const Navigation = () => {
  return (
    <Fragment>
        <div className="navigation">
            <Link className='logo-container' to="/">
                <img src={CrwnLogo} alt="Crown Logo"/>
            </Link>
            
            <div className="nav-links-container">
                <Link className='nav-link' to="shop">
                    Shop
                </Link>
                <Link className='nav-link' to="sign-in">
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation