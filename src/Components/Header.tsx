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
      <NavLink to="/"><h1>Recipe Finder</h1></NavLink>
        
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter your recipie" />
        
        <NavLink to="/">
            <button onClick= {handleSubmit}>Search</button>
        </NavLink>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/whishlist">
            Wishlist
        </NavLink>
    </div>
  )
}

export default Header