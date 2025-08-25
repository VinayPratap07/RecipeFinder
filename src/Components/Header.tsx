import { NavLink } from "react-router-dom"
import {useState, useContext} from 'react'
import userContext from "../Context/userContext";

function Header() {

    const [input, setInput] = useState('');

    const {setRecipe} = useContext(userContext)

    function handleSubmit(){
      if(input.trim()==='') return;
        setRecipe(input);
    }

  return (

    <div className="HeaderComp">
      <h1>Recipe Finder</h1>
        <div className="inputSearchBox">
          <NavLink className="navLinksStyle searchBtn" to="/">
              <button onClick= {handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>
          </NavLink>
          <input className="inputBar" 
            type="text" value={input} 
            onChange={e=>setInput(e.target.value)} 
            placeholder="Enter your recipie"
            onKeyDown={e=>{
              if(e.key==="Enter"){
                handleSubmit();
              }
            }} />
        </div>
        
        <NavLink className={({isActive})=>isActive? "navLinksStyle active" :  "navLinksStyle"} to="/" >
            Home
        </NavLink>
        <NavLink className="navLinksStyle" to="/wishlist">
            Wishlist
        </NavLink>
    </div>
  )
}

export default Header