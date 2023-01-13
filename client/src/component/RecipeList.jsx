import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = () => {
  const [recipeId, setRecipeId] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(!jwt){
      navigate('/');
    }
  }, [navigate]);
  const searchId = (event) => {
    setRecipeId(event.target.value);
  }
  
  const submitId = async (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'authorization': `${jwt}`
    }
    const response = await fetch(`http://localhost:4000/api/v1/RecipeList?recipe_id=${recipeId}`,{headers});
    const data = await response.json();
    setSearchResults(data.data);
  }

  return (
    <div>
      <form onSubmit={submitId}>
        <input type="text" value={recipeId} onChange={searchId} />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((ele, index) => (
          <div key={index}>
            <p>{ele.step}</p>
            <p>{ele.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
