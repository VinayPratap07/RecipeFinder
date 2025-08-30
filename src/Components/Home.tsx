import { useQuery } from '@tanstack/react-query'
import { Card } from './Card';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { getRandomMeal } from '../APICalls/GetApi';

async function fetchRecipe() {
    const randomMeal = await getRandomMeal();
    return randomMeal.data.meals;
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
    return <div><Loader/></div>
  }
  if (error) {
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
  );
}

export default Home;