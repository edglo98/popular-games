import { createContext, useState } from "react";

export const UserContext = createContext(null)


export function AuthUserContext({children}) {

    const [ user, setUser ] = useState({logedin: false})

    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}