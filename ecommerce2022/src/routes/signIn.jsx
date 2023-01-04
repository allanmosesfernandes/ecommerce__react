import React from 'react'
import { signInWithGooglePopUp } from '../utils/firebase/firebase.utils'




const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopUp();
        console.log(response);
    }



  return (
    <div>
        <button onClick={logGoogleUser}>
       Sign in with Google Pop up
        </button>
    </div>
  )
}

export default SignIn