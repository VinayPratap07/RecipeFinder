import React from "react";
import { createContext } from "react";

type UserContextType = {
  recipe: string | null;
  setRecipe: React.Dispatch<React.SetStateAction<string | null>>;
  mealID: (string | number)[];
  setMealID: React.Dispatch<React.SetStateAction<(string | number)[]>>;
};

const userContext = createContext<UserContextType | undefined>(undefined);

export default userContext;