import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import CrwnLogo from '../assets/crown.svg'
import { UserContext } from '../contexts/userContext'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    const signOutHandler = () => {
        
    return 

    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to="/">
                    <img src={CrwnLogo} alt="Crown Logo"/>
                </Link>
                
                <div className="nav-links-container">
                    <Link className='nav-link'>Home</Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                        <Link className='nav-link' to='/sign-in'> SIGN IN </Link>
                    )}

                </div>
            </div>
            <Outlet />
        </Fragment>
  )
}

export default Navigation