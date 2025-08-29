import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './RecipePage.css'

const RecipePage = () => {
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
        return <div><Loader/></div>;
    }
    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    console.log(recipe)


    return (
            <div className="recipePage">
                <header className='recipeHeader'>
                    <h1>{recipe.strMeal}</h1>
                    
                </header>
                
                <div className='mainContent'>
                    <div className='leftColumn'>
                        <img className='recipeImage' src={recipe.strMealThumb} alt={recipe.strMeal} ></img>
                        <div className='recipeDetails'>
                            <div><strong>Country Origin</strong><p>{recipe.strArea}</p></div>
                            <div><strong>Dish Category</strong><p>{recipe.strCategory}</p></div>
                        </div>

                        <div className='recipeIngredient'>
                            <h2>Ingredient</h2>
                                <ul>
                                    {Array.from({ length: 20 }, (_, i) => {
                                        const ingredient = recipe[`strIngredient${i + 1}`];
                                        const measure = recipe[`strMeasure${i + 1}`];
                                        if (ingredient && ingredient.trim() !== "") {
                                        return (
                                            <li key={i}>
                                            {ingredient} - {measure}
                                            </li>
                                        );
                                        }
                                        return null;
                                    })}
                                </ul>
                        </div>            
                    </div>

                    <div className='rightColumn'>
                        <h2>Instructions</h2>
                        {recipe.strInstructions.split('.').map((part, index) => (
                            <li key={index}>{part.trim()}</li>
                        ))}
                    </div>
                </div>
            </div>

    );
};

export default RecipePage;
