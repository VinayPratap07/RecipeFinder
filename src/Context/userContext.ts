import React from "react";
import { createContext } from "react";

type UserContextType = {
  recipe: string | null;
  setRecipe: React.Dispatch<React.SetStateAction<string | null>>;
};

const userContext = createContext<UserContextType | undefined>(undefined);

export default userContext;