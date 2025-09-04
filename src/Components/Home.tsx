import { useQueries } from '@tanstack/react-query'
import { Card } from './Card';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { getRandomMeal } from '../APICalls/GetApi';
import type { Meal } from '../APICalls/ApiRespone';



function Home() {  

  const NUM_RANDOM = 50;
  const queries = useQueries({
    queries: Array.from({ length: NUM_RANDOM }, (_, i) => ({
      queryKey: ["randomMeal", i], 
      queryFn: async (): Promise<Meal> => {
        const res = await getRandomMeal();
        return res.data.meals[0]; 
      },
      staleTime: 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    })),
  });

  return (
 <div className="HomeDiv">
      {queries.map((q, i) => {
        if (q.isLoading) {
          return <Loader key={i} />;   // show loader for just this one
        }
        if (q.error) {
          return <Error key={i} />;    // show error just for this one
        }
        if (q.data) {
          return (
            <Card
              key={q.data.idMeal}
              img={q.data.strMealThumb}
              title={q.data.strMeal}
              id={q.data.idMeal}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Home;