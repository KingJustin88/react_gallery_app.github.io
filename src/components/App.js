import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'; 

// import components
import apiKey from './config';
import axios from 'axios';
import Layout from './Layout';
import PhotoList from './PhotoList';
import PageError from './PageError';


class App extends Component {      
  state = {
    photos: [],
    loading: true,
  }

  // grabbing the photos from the flickr api using axios
  performSearch = (text) => {
    this.setState({
      loading: true
    });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=21&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos:response.data.photos.photo,
          loading: false
        });
      })
  }
  // rendering the Layout routes to the div container
  render() {
    return (
      // my routes for the links, search and page error
      <BrowserRouter>
        <div className="container">
          <Layout />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/cats" />} />
            <Route path="/cats" render={() => <PhotoList data={this.state.photos} search={this.performSearch} text="cats" loading={this.state.loading}/>} />
            <Route path="/dogs" render={() => <PhotoList data={this.state.photos} search={this.performSearch} text="dogs" loading={this.state.loading}/>} />
            <Route path="/sunsets" render={() => <PhotoList data={this.state.photos} search={this.performSearch} text="sunsets" loading={this.state.loading}/>} />
            <Route path="/search/:text" render={() => <PhotoList data={this.state.photos} search={this.performSearch} text=":text" loading={this.state.loading}/>} />
            <Route component={PageError} />
            <PhotoList data={this.state.photos} />
          </Switch>           
        </div>
      </BrowserRouter> 
    );
  }      
}

export default App;
