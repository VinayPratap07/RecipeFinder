import { useContext } from "react";
import userContext from "../Context/userContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";

function Whishlist() {
  const { mealID } = useContext(userContext); 
  const fetchWhishlist = async () => {
    if (mealID.length === 0) return []; // nothing to fetch

    // fetch each meal by ID
    const requests = mealID.map((id: number) =>
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.data.meals[0]) 
    );

    return Promise.all(requests); 
  };

  const {
    isLoading,
    error,
    data: whishlistMeal,
  } = useQuery({
    queryKey: ["meals", mealID],
    queryFn: fetchWhishlist,
    enabled: mealID.length > 0, 
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="HomeDiv">
      {whishlistMeal?.map((meal) => (
        <Card key={meal.idMeal} img={meal.strMealThumb} title={meal.strMeal} id={meal.idMeal} />
      ))}
    </div>
  );
}

export default Whishlist;
