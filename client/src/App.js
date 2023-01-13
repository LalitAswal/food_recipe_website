import { Route, Routes}  from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Recipes from "./component/RecipeList";
import FoodDetails from "./component/FoodDetails";
import Login from './component/Login';



const App = () =>{
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route exact  path="/"      element ={ <Login/>}/>
        <Route exact  path="/home"      element ={ <Home/>}/>
        <Route   path="/RecipeList"   element = { <Recipes/> } />
        <Route   path="/FoodDetails"   element = { <FoodDetails/> } />
        {/* <Route   path="/"   element = { <LogOut/> } /> */}
      </Routes>
    </div>
  );
  }

export default App;
