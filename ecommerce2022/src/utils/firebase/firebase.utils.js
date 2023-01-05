// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
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

// == Firebase Database ==//

export const db = getFirestore();

export const createUserDocFromAuth = async (users) => {
    const userDocRef = doc(db, "users", users.uid);
    const userSnapShot = await getDoc(userDocRef);
    //if usersnap shot doesn't exists 
    if(!userSnapShot.exists()){
    // create user
        const createdAt = new Date();
        const {displayName, email} = users;

    try {
        await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
    });
    }catch(error) {
        alert("error creating user", error.message);
    }

    }
    return userDocRef
}