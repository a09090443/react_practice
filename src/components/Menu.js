import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import Route from './Route';
import Home from './Home';
import Timer from './Timer';
import TodoApp from './TodoApp';

class Menu extends Component {
  render() {
    return (

      <Router>
		<div>
		  <ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/timer">Timer</Link></li>
			<li><Link to="/todoapp">TodoApp</Link></li>
		  </ul>

		  <hr/>

		  <Route exact path="/" component={Home}/>
		  <Route path="/timer" component={Timer}/>
		  <Route path="/todoapp" component={TodoApp}/>
		</div>
	  </Router>
    );
  }
}

export default Menu;