import React, { Component } from "react";
import Home from '../Home/Home'
import Listnews from '../Listnews/Listnews'
import Form from '../Form/Form'
import axios from 'axios'


import {Route, Routes} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      myNews : []
    }
  }

  async componentDidMount(){
    const resp = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_KEY}`);
    const data = resp.data.results.slice(0,5);
    const arrayNew = data.concat(this.state.myNews);

    this.setState({myNews: arrayNew})
  }

  createNews = (title, abstract, published_date) => {
    const formNews = {title, abstract, published_date}
    this.setState({myNews:[...this.state.myNews, formNews ]})
  }


  deleteNews = i => {
    const borrarNoticia = this.state.myNews.filter((myNew,j) => j !== i);
    this.setState({ myNews: borrarNoticia})
  }

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/form" element={<Form createNews={this.createNews}/>} />
          <Route path="/list" element={<Listnews giveData={this.state.myNews} delete={this.deleteNews}/>} />
        </Routes>
      </main>
    );
  }
}

export default Main;
