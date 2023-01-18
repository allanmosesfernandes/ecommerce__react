import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import CrwnLogo from '../assets/crown.svg'
import { UserContext } from '../contexts/userContext'
import { signOutAuthUser } from '../utils/firebase/firebase.utils'
import CartIcon from '../components/CartIcon/cartIcon.component'
import CartDropdown from '../components/CartContainer/CartDropdown'
import { CartContext } from '../contexts/cartContext'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const cartToggler = () => {
        console.log('object');
    }
    return (
    <Fragment>
        <div className="navigation">
            <Link className='logo-container' to="/">
                <img src={CrwnLogo} alt="Crown Logo"/>
            </Link>
            
            <div className="nav-links-container">
            <Link className='nav-link'>Home</Link>
            <Link className='nav-link' to="shop">Shop</Link>
                {
                currentUser ? (<span className='nav-link' onClick={signOutAuthUser}>SIGN OUT</span>) : 
                (<Link className='nav-link' to='/sign-in'> SIGN IN </Link>) 
                
                }
                { currentUser ? (<CartIcon onClick={cartToggler}/>) : null }
            </div>
              
            {
                isCartOpen && <CartDropdown />
            }
        

      
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation