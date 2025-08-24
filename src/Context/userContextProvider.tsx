import { useState } from 'react'
import userContext from './userContext'

const UserContextProvider = ({children}) =>{
    const [recipe, setRecipe] = useState("");

    return (
        <userContext.Provider value = {{recipe, setRecipe, }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;