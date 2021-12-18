import React, { Component } from "react";
import Nav from '../Nav'
import './Header.css'

import {userContext} from '../../context/userContext'

class Header extends Component {
  render() {
    return (
      <header>
        <Nav/>
        <userContext.Consumer>
          {

            ({user, logout}) => user.name ?
              <>
                <h3>Bienvenido {user.name}</h3>
                <button onClick={logout}>Salir</button>
              </> // forma pro
              : "" //--> else
          }
        </userContext.Consumer>
      </header>
    );
  }
}

export default Header;
