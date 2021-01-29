import React from 'react';
import './App.css';
import Header from './components/header/Header';
import CrewHome from './components/content/crew/CrewHome'
import UserPage from './components/content/user/UserPage'
import Calendar from './components/common/Calendar'
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
          <Route path="/" component={Calendar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
