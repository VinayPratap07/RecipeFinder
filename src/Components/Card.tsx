import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../Context/userContext";

type CardProps = {
  img?: string;
  title?: string;
  id?: number;
};


export const Card = ({id, img, title, }:CardProps) => {

  const {mealID,setMealID} = useContext(userContext);

  const isInWishlist = mealID.includes(id);

  function addItemToWhishlist(){

    if (isInWishlist) {
      setMealID(prev => prev.filter(item => item !== id));
    } else {
      setMealID(prev => [...prev, id]);
    }
  }

  return (
    <div className="card">
      <NavLink className="navLinksStyle" to={`/${id}`}>
          <img src={img} className="cardImage" ></img>
          <p className="cardText" > {title}</p>
      </NavLink>
      <button className="cardWhishListBtn" onClick={addItemToWhishlist}>{isInWishlist? "Remove": "Add"}</button>
    </div>
  )
};
