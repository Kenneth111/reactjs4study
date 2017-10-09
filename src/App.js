import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Com1 from './pages/com1';
import Home from './pages/home';
import Com2 from './pages/com2';
import Com3 from './pages/com3';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: this.props.name, date: Date.now()};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState({date: Date.now()});
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello, {this.props.name}!
          It's {this.state.date}!
          <button onClick={this.handleClick}>Click me</button>
        </p>
        <Link to={'/home/sansa'}>Home</Link>
        <Link to={'/com1/Ken'}>Com1</Link>
        <Link to='/com2'>Com2</Link>
        <Link to='/com3'>Com3</Link>
        <Route path='/com1/:name' component={Com1}></Route>
        <Route path='/home/:name' component={Home}></Route>
        <Route path='/com2' component={Com2}></Route>
        <Route path='/com3' component={Com3}></Route>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
