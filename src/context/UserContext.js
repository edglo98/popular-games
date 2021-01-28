import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase'

export const UserContext = createContext(null)

export function useAuth() {
    return useContext(UserContext)
}

export function AuthUserContext({children}) {

    const [ user, setUser ] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }


    useEffect(()=>{
        const unsubscriber = auth.onAuthStateChanged(user => {
            setUser(user)
        })
        return unsubscriber
    },[])

    const value = {
        user,
        signup
    }

    return(
        <UserContext.Provider value={ value }>
            {children}
        </UserContext.Provider>
    )
}