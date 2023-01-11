import React from 'react'
import { signInWithGooglePopUp, createUserDocFromAuth } from '../utils/firebase/firebase.utils'

import SignInForm from '../components/Sign-in-form/signInForm'
import SignUpForm from '../components/Sign-up-form/signUpForm'

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef  = await createUserDocFromAuth(user);
    }



  return (
    <div>
        <button onClick={logGoogleUser}>Sign in with Google Pop up </button>
        <SignInForm />
        <SignUpForm />

    </div>
  )
}

export default SignIn