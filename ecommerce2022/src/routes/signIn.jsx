import React from 'react'
import { signInWithGooglePopUp, createUserDocFromAuth } from '../utils/firebase/firebase.utils'




const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef  = await createUserDocFromAuth(user);
    }



  return (
    <div>
        <button onClick={logGoogleUser}>Sign in with Google Pop up </button>
    </div>
  )
}

export default SignIn