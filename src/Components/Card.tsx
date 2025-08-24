import { NavLink } from "react-router-dom";

type CardProps = {
  img: string;
  title: string;
  id: number;
};




export const Card = ({id, img, title }:CardProps) => {
  return (
    <div className="card">
      <NavLink to={`/${id}`}>
          <img src={img} className="cardImage" ></img>
          <p className="cardText" > {title}</p>
      </NavLink>
      <button>Whishlist</button>
    </div>

  )
};
