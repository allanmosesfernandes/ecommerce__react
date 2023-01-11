import React from 'react'
import { signInWithGooglePopUp, createUserDocFromAuth } from '../utils/firebase/firebase.utils'

import SignInForm from '../components/Sign-in-form/signInForm'
import SignUpForm from '../components/Sign-up-form/signUpForm'

const Auth = () => {




  return (
    <div>

        <SignInForm />
        <SignUpForm />

    </div>
  )
}

export default Auth