import { React } from 'react';
import { Route } from 'react-router-dom';
import './Styles/App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import DetailRecipes from './Components/DetailRecipe';
import CreateRecipe from './Components/CreateRecipe/CreateRecipe'
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavBar/>
      </Route>

      <Route exact path='/'>
        <LandingPage/>
      </Route>

      <Route exact path='/recipes'>
        <Home/>
      </Route>

      <Route exact path='/recipes-create'>
        <CreateRecipe/>
      </Route>

      <Route path='/recipes/:id'>
        <DetailRecipes/>
      </Route>

    </div>
  );
}

export default App;
