import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import App from '../App'
import home from '../pages/home'
class RouterMap extends Component{
    render() { 
        return ( 
   <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home/:name" component={home} />
      </div>
   </BrowserRouter>
        ) }
   
}
export default RouterMap;