import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Meal = () => {
    const {idMeal} = useParams();


async function fetchMealById() {
  const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const res = await axios.get(api);
  return res.data.meals[0];
}

const {isLoading, error, data:recipe} = useQuery({
    queryKey: ['recipe', idMeal],
    queryFn: fetchMealById,
    staleTime: 10000
})

    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    console.log(recipe)


    return (
        <>
            <div>
                <h1>{recipe.strMeal}</h1>
                
                <img src={recipe.strMealThumb} ></img>
                <h3>{recipe.strArea}</h3>
                <h3>{recipe.strCategory}</h3>
                <h1>Ingredient</h1>
                <ol>
                {Array.from({ length: 20 }, (_, i) => {
                    const ingredient = recipe[`strIngredient${i + 1}`];
                    if (ingredient) {
                    return <li key={i}>{ingredient}</li>;
                    }
                    return null;
                })}
                </ol>
                <h1>Instructions</h1>
                <p>{recipe.strInstructions}</p>
                <h1>Measure</h1>
                <ol>
                {Array.from({ length: 20 }, (_, i) => {
                    const ingredient = recipe[`strMeasure${i + 1}`];
                    if (ingredient) {
                    return <li key={i}>{ingredient}</li>;
                    }
                    return null;
                })}
                </ol>
                <iframe 
                    width="560" 
                    height="315" 
                    src={recipe.strYoutube} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>


                
            </div>

        </>
    );
};

export default Meal;
