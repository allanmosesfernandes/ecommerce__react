// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKX6qIUfHsACkObjyJzapF6PLoSG5i7xw",
  authDomain: "fir-crownclothing-dec.firebaseapp.com",
  projectId: "fir-crownclothing-dec",
  storageBucket: "fir-crownclothing-dec.appspot.com",
  messagingSenderId: "281539300655",
  appId: "1:281539300655:web:666bf948f784ff12baa5da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

// == Firebase Auth == //
export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);