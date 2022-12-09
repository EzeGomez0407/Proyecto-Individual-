import { React } from 'react';
import { Route } from 'react-router-dom';
import './Styles/App.css';
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import DetailRecipes from './Components/DetailRecipe/DetailRecipe';
import CreateRecipe from './Components/CreateRecipe/CreateRecipe'
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  
  let fnResetPages = '';

  const handlerInputSearch = ()=>{
    fnResetPages();
  }
  const eventInput = (setPaging)=>{
    fnResetPages = ()=> {setPaging( p => p = 0)}
  }

  return (
    <div className="App">
      <Route path='/'>
        <NavBar handlerInput={handlerInputSearch}/>
      </Route>

      <Route exact path='/'>
        <LandingPage/>
      </Route>

      <Route exact path='/recipes'>
        <Home inputEvent={eventInput}/>
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
