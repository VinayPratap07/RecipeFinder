import { useState } from 'react'
import type {ReactNode} from 'react'
import userContext from "./userContext";
import type { UserContextType } from "./userContext";

type Props = {
  children: ReactNode;
};

const UserContextProvider = ({children}: Props) =>{
    const [recipe, setRecipe] = useState<string>("");
    const [mealID, setMealID] = useState<string[]>([]);

    const value: UserContextType = {
      recipe,
      setRecipe,
      mealID,
      setMealID,
    };

    return (
        <userContext.Provider value={value}>
        {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;