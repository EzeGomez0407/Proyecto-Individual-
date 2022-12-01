import { React } from 'react';
import { Route } from 'react-router-dom';
import './Styles/App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavBar/>
      </Route>

      <Route exact path='/'>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
