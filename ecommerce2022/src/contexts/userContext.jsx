import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutAuthUser } from "../utils/firebase/firebase.utils";


//== The actual user context/contextual value ==//

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    // use Effect to track Authentication State CHanges
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
        })
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}