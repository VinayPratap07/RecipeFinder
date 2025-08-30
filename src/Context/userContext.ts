import React from "react";
import { createContext } from "react";

export type UserContextType = {
  recipe: string ;
  setRecipe: React.Dispatch<React.SetStateAction<string >>;
  mealID: string [];
  setMealID: React.Dispatch<React.SetStateAction<string []>>;
};

const userContext = createContext<UserContextType>({
  recipe: "",
  setRecipe: () => {}, // empty function (real one comes from Provider)
  mealID: [],
  setMealID: () => {}, // empty function (real one comes from Provider)
});

export default userContext;