import React, { Component } from "react";
import './Card.css'

export class newYorkApi extends Component {
    render() {
        const {title,abstract,published_date} = this.props.info

        return (
          <div className="container">
          {
              <div className="news">
                <h2>{title}</h2>
                <p>{abstract}</p>
                <h4>{published_date}</h4>
                <button onClick={this.props.delete} className="deleteButton">Borrar</button>
              </div>
          }
        </div>
        )
    }
}


export default newYorkApi;
