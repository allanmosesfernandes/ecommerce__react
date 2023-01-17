import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import CrwnLogo from '../assets/crown.svg'
import { UserContext } from '../contexts/userContext'
import { signOutAuthUser } from '../utils/firebase/firebase.utils'
import CartIcon from '../components/CartIcon/cartIcon.component'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
    <Fragment>
        <div className="navigation">
            <Link className='logo-container' to="/">
                <img src={CrwnLogo} alt="Crown Logo"/>
            </Link>
            
            <div className="nav-links-container">
            <Link className='nav-link'>Home</Link>
                {
                currentUser ? (<span className='nav-link' onClick={signOutAuthUser}>SIGN OUT</span>) : 
                (<Link className='nav-link' to='/sign-in'> SIGN IN </Link>) 
                
                }

            <CartIcon />
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation