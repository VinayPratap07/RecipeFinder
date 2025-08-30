import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";
import { useParams } from "react-router-dom";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import { searchMealByIngredient, searchMealByName } from "../APICalls/GetApi";

function Searched() {
    const {strMeal} = useParams();

    async function fetchRecipe() {


      const [nameRes, ingredientRes] = await Promise.all([
        searchMealByName(strMeal),
        searchMealByIngredient(strMeal)
      ]);

      const nameMeals = nameRes.data.meals || [];
      const ingredientMeals = ingredientRes.data.meals || [];

      // merge results and remove duplicates
      const allMeals = [...nameMeals, ...ingredientMeals];
      const uniqueMeals = allMeals.filter(
        (meal, index, self) =>
          index === self.findIndex((m) => m.idMeal === meal.idMeal)
      );

      return uniqueMeals;
  }

  const {isLoading, error, data } = useQuery({
    queryKey: ['recipeSearch', strMeal],
    queryFn: fetchRecipe,
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })


  if(isLoading){
    return <div><Loader/></div>
  }
  if(error){
    return <div><Error/></div>
  }

  return (
    <div className="HomeDiv">
      {data?.length > 0 ? (
        data.map((meal) => (
          <Card key={meal.idMeal} img={meal.strMealThumb} title={meal.strMeal} id={meal.idMeal}/>
        ))     
      ) : (
        <div>No meals found</div>
      )}
    </div>
  )
}

export default Searched