import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth} from "../utils/firebase/firebase.utils";


//== The actual user context/contextual value ==//

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (state, action) => {
    console.log('dispatched')
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error (`Unhandled type ${type}`)
    }
}


export const UserProvider = ({ children }) => {

    // const [currentUser, setCurrentUser] = useState(null);
    const [ state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { currentUser } = state;
    console.log(currentUser);

    const setCurrentUser = (user) => {
          dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    } 
    const value = { currentUser, setCurrentUser };
    // use Effect to track Authentication State CHanges
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            
            if(user) {
                createUserDocFromAuth(user)
            }
            setCurrentUser(user);
           
        });

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}