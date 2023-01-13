import "../style/main.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const navigate = useNavigate();

  const checkAuth = () => {
      const jwt = localStorage.getItem("jwt");
    if (jwt) {
        setIsLoggedIn(true);
    } else {

      setIsLoggedIn(false);
    }
  };
  function LogOut() {
    localStorage.removeItem('jwt');
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