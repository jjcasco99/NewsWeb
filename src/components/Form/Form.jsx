import React, { Component } from "react";
import { Navigate  } from 'react-router-dom'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: ""
    }
  }  

  

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value
    const abstract = event.target.abstract.value
    const published_date = event.target.published.value
    
    this.props.createNews(title,abstract,published_date)
    this.setState({ redirect: true });
    
  }

  
  render() {
    
    if (this.state.redirect) {
      return <Navigate to='/list'/>;
    }
    return (
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Título:</label><br />
        <input type="text" name="title" className="data"/><br />
        <label htmlFor="abstract">Resumen:</label><br />
        <input type="text" name="abstract" className="data"/><br />
        <label htmlFor="published">Fecha:</label><br />
        <input type="date" name="published" className="data"/><br /> <br />
        <input type="submit" id="button"/>
    </form>
      );
  }
}

export default Form;
