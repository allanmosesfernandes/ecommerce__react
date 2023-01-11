import React from 'react'
import { signInWithGooglePopUp, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
import './auth.styles.scss';
import SignInForm from '../../components/Sign-in-form/signInForm'
import SignUpForm from '../../components/Sign-up-form/signUpForm'

const Auth = () => {




  return (
        <div className='authentication-container'>
      
        <SignInForm />
        <SignUpForm />

    </div>
  )
}

export default Auth