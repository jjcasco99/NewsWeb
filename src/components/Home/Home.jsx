import React, { Component } from "react";
import {userContext} from '../../context/userContext'
import './Home.css'

class Home extends Component {
  static contextType = userContext;
  
  constructor(props) {
    super(props)

    this.name = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value;
    const {login} = this.context;
    login(name);
    this.name.current.value="";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="formLogin">
        <label htmlFor="usuario">Ingresa tu usuario:</label><br />
        <input type="text" name="usuario" ref={this.name} id="usuario"/><br />
        <input type="submit" id="button"/>
      </form>
      );
  }
}

export default Home;
