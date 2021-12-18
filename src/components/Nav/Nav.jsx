import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
    <nav>
      <ul class="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Create News</Link></li>
        <li><Link to="/list">News</Link></li>
      </ul>
    </nav>
    );
  }
}

export default Nav;
