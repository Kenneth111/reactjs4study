import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class home extends Component{
    render(){
        return (
            <div> 
                <p>Hello, {this.props.match.params.name? this.props.match.params.name: "world"}! </p>
                <Link to='/'>Index</Link>
            </div>
        );
    }
}
export default home;