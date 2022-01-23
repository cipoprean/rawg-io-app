import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';
import './App.css';
import Home from './pages/Home';
import { GlobalStyleComponent } from 'styled-components';
import GlobalStyles from './components/GlobalStyle';
import { Route} from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {

  
  return (
    <div className="App">
      <GlobalStyles/>
      <NavBar/>
      <Route path={["/game/:id", "/"]}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
