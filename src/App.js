import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";

import Header from './component/header/Header.jsx';
import Home from './component/main/Home';
import Footer from './component/footer/Footer.jsx';
import Login from './component/login_register/login/Login.jsx';
import Signup from './component/login_register/signup/Signup.jsx';
import About from './component/about/About';
import Books from './component/books/Books';
import Blog  from './component/blog/Blog';
import Contact from './component/contact/Contact';


function App() {

  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/about" component={Signup} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/"/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
