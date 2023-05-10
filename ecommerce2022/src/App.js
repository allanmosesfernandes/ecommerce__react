import './App.css';
import { React, useEffect } from 'react';
import Home from './routes/home';
import "./categories.styles.scss"
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation';
import Authentication from './routes/auth/authentication';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/checkout';
import CategoriesPreview from './routes/categories-preview/categoriesPreview';
import { setCurrentUser } from './store/user/user.action';
import { onAuthStateChangedListener, createUserDocFromAuth} from "./utils/firebase/firebase.utils";
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
    // use Effect to track Authentication State CHanges
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            
            if(user) {
                createUserDocFromAuth(user)
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, [])
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