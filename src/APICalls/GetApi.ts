import axios from 'axios'

const api = axios.create({
    baseURL : "https://www.themealdb.com/api/json/v1/1/"
})


export const getMealById = (id:number|string)=>{
    return api.get(`lookup.php?i=${id}`);
}

export const searchMealByName = (name:string)=>{
    return api.get(`search.php?s=${name}`);
}

export const searchMealByIngredient = (name:string)=>{
    return api.get(`filter.php?i=${name}`);
}

export const getRandomMeal = ()=>{
    return api.get("random.php");
}

