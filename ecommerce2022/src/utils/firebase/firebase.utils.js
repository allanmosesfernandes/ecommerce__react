// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from "firebase/auth"

import {
    getFirestore, 
    doc, 
    getDoc, 
    setDoc , 
    collection, 
    writeBatch,
    query,
    getDocs } from "firebase/firestore"

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

//=== Getting Categories & Documents ===//
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);

    const categoriesMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoriesMap;

/* 

The line acc[title] = items; is creating a new key-value pair in the acc object.

acc is an empty object that is passed as the second argument to the reduce function. The reduce function is used to iterate over an array (in this case querySnapShot.docs) and perform an operation on each element.

title and items are destructured from the docSnapShot.data(). The value of title is used as the key, and the value of items is used as the value in the key-value pair.

So, this line is creating a new key-value pair in the acc object, where the key is the value of title and the value is the value of items.

For example, if title is "Clothing" and items is an array of clothing items, the line acc[title] = items; would add a new key-value pair to the acc object:

{
    "Clothing": [item1, item2, item3]
}

The reduce function is going to iterate over all the elements in the querySnapShot.docs array and execute this logic on each element and will keep adding the key-value pair to acc object.

In the end, the acc object will have all the title as key and items as values, which can be used for further operation.


*/
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












