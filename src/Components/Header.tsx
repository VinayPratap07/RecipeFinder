import { NavLink, useNavigate } from "react-router-dom"
import {useState, useContext} from 'react'
import userContext from "../Context/userContext";

function Header() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const {setRecipe} = useContext(userContext)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      if(input.trim()==='') return;
        setRecipe(input);
        navigate(`/search/${input}`);
    }

  return (
  <>
    <div className="HeaderComp">
      <h1>Recipe Finder</h1>
        <div className="inputSearchBox">
          <form onSubmit={handleSubmit}>
              <button className="searchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
              <input className="inputBar" 
                type="text" value={input} 
                onChange={e=>setInput(e.target.value)} 
                placeholder="Enter your recipie"
                   />
          </form>
         
        </div>
        
        <NavLink className={({isActive})=>isActive? "navLinksStyle active" :  "navLinksStyle"} to="/" >
            Home
        </NavLink>
        <NavLink className="navLinksStyle" to="/favourite">
            Favourite
        </NavLink>
    </div>
    </>
  )
}

export default Header