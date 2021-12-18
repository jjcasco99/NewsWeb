import React, { Component } from "react";
import Card from './Card'

class Listnews extends Component {
  
  
  
  paintNews = () => {
    return this.props.giveData.map((noticia, i) => <Card info={noticia} delete={() => this.props.delete(i)} key={i} />)
  }

  render() {
    return (
      <div>
        {this.paintNews()}
      </div>
    );
  }
}

export default Listnews;
