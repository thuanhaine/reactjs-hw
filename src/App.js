import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";

import Header from './component/header/Header.jsx';
import Home from './component/main/Home';
import Footer from './component/footer/Footer.jsx';
import Login from './component/login/Login.jsx';
import Signup from './component/signup/Signup.jsx';
function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/"/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
