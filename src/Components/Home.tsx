import {useContext} from 'react'
import userContext from "../Context/userContext"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card } from './Card';

function Home() {
  const { recipe } = useContext(userContext);

  async function fetchRecipe() {
    // Search by name
    const nameApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`;
    const ingredientApi = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipe}`;

    const [nameRes, ingredientRes] = await Promise.all([
      axios.get(nameApi),
      axios.get(ingredientApi)
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

  const { isLoading, error, data } = useQuery({
    queryKey: ['recipeSearch', recipe],
    queryFn: fetchRecipe,
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error</div>
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
  );
}

export default Home;