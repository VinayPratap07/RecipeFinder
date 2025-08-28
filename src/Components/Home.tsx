import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card } from './Card';

async function fetchRecipe() {
    const randomMeal = axios.get("https://www.themealdb.com/api/json/v1/1/random.php")

    return (await randomMeal).data.meals;
  }


function Home() {  

  const { isLoading, error, data } = useQuery({
    queryKey: ['recipeSearch'],
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