import { useState } from 'react'
import userContext from './userContext'

const UserContextProvider = ({children}) =>{
    const [recipe, setRecipe] = useState("");
    const [mealID, setMealID] = useState([])

    return (
        <userContext.Provider value = {{recipe, setRecipe, mealID, setMealID }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;