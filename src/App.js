import React from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import ListComp from './components/list';
import Contact from './components/contact';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
    <Nav />
    <main className="container my-5">
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/edit/:id' component={Home}></Route>
      <Route path='/list' component={ListComp}></Route>
      <Route path='/contact' component={Contact}></Route>
    </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
