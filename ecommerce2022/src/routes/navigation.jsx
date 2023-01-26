import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavigationContainer, 
            NavLinksContainer,
            LogoContainer,
            NavigationLinks
    } from'./navigation.styles.jsx';
import CrwnLogo from '../assets/crown.svg';
import { UserContext } from '../contexts/userContext';
import { signOutAuthUser } from '../utils/firebase/firebase.utils';
import CartIcon from '../components/CartIcon/cartIcon.component';
import CartDropdown from '../components/CartContainer/CartDropdown';
import { CartContext } from '../contexts/cartContext';

const Navigation = () => {
    
    //Get Details about Current User from Firebase//
    const { currentUser } = useContext(UserContext);

    // Cart Toggler //
    const {isCartOpen} = useContext(CartContext);

    const cartToggler = () => {
        console.log('object');
    }

    return (
    <Fragment>
        <NavigationContainer>

            <LogoContainer to="/">
                <img src={CrwnLogo} alt="Crown Logo"/>
            </LogoContainer>
            
        <NavLinksContainer>

            <NavigationLinks>Home</NavigationLinks> 
            <NavigationLinks to="shop">Shop</NavigationLinks>
        {
            currentUser ? (<NavigationLinks as="span" className='nav-link' onClick={signOutAuthUser}>
                SIGN OUT
            </NavigationLinks>) : 
            (<NavigationLinks to='/sign-in'> SIGN IN </NavigationLinks>) 
        }
            { currentUser ? (<CartIcon onClick={cartToggler}/>) : null }

        </NavLinksContainer>
            { isCartOpen && <CartDropdown /> }   
        </NavigationContainer>

    <Outlet />
    </Fragment>
  )
}

export default Navigation