import { useContext } from "react";
import userContext from "../Context/userContext";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import { getMealById } from "../APICalls/GetApi";
import type { Meal } from "../APICalls/ApiRespone";

function Favourite() {

    const { mealID} = useContext(userContext);

  const fetchFavourite = async () => {
    if (mealID.length === 0) return []; // nothing to fetch

    // fetch each meal by ID
    const requests = mealID.map(async (id: number | string) => {
      const res = await getMealById(Number(id));
      return res.data?.meals ? res.data.meals[0] : null;
    });

    const results = await Promise.all(requests);
    return results.filter((meal:any): meal is Meal => meal !== null);
    };

  const {
    isLoading,
    error,
    data: favouriteMeal,
  } = useQuery<Meal[]>({
    queryKey: ["meals", mealID],
    queryFn: fetchFavourite,
    enabled: mealID.length > 0, 
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div><Loader/></div>;
  }
  if (error) {
    return <div><Error/></div>
  }

  return (
    <div className="HomeDiv">
      {favouriteMeal?.map((meal) => (
        <Card key={meal.idMeal} 
            img={meal.strMealThumb} 
            title={meal.strMeal} 
            id={meal.idMeal} />
      ))}
    </div>
  );
}

export default Favourite;
