import React from 'react';
import './App.css';
import Header from './components/header/Header';
import CrewHome from './components/content/crew/CrewHome'
import UserPage from './components/content/user/UserPage'
import CrewPage from './components/content/crew/CrewPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/user" component={UserPage} />
          <Route path="/crews" component={CrewHome} />
          <Route path="/" component={CrewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
