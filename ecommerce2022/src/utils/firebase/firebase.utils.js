// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc , collection, writeBatch} from "firebase/firestore"
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

//=== Initialize Firebase ===//
export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

//=== Firebase Auth ===//
export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

//=== Firebase Database ===//

export const db = getFirestore();
//=== FIrestore Databse Adding Collection & Documents ===//
export const addCollectionAndDocument = async (collectionName, objectsToAdd) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionName);
    

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done'); 
}
export const createUserDocFromAuth = async (users, additionalInformation={}) => {
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
        createdAt,
        ...additionalInformation
    });
    }catch(error) {
        alert("error creating user", error.message);
    }

    }
    return userDocRef
}

//======== Create User from Sign up form =========//
export const createAuthUserEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}


//======== Sign In Already existing user =========//
export const signInAuthUserEmailPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

//======= Sign Out User =========//

export const signOutAuthUser = async () => await signOut(auth);


//====  On Auth State Changed Listener ===//
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);












