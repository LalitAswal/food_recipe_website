import "../style/main.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const navigate = useNavigate();

  const checkAuth = () => {
      const jwt = Cookies.get('jwt');

    if (jwt) {
        setIsLoggedIn(true);
    } else {

      setIsLoggedIn(false);
    }
  };
  function LogOut() {
    Cookies.remove('jwt')
    navigate("/");
}
  useEffect(() => {
    checkAuth();
  }, []);

return (
    <header>
        <h3>Food Recipe</h3>
        <nav>
           <a href="/home"> Home</a>
            <a href="/RecipeList">Recipe List</a>
            <a href="/FoodDetails">FoodDetails</a>
            {isLoggedIn && <a href="/" onClick={ LogOut}>sign out</a>}

        </nav>
    </header>
);
}

export default Navbar;