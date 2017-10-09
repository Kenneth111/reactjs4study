import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Com1 extends Component{
    render(){
        return (
            <div> 
                <p>Hello, {this.props.match.params.name? this.props.match.params.name: "world"}! </p>
                <Link to='/com1/hehe'>Com1</Link>
            </div>
        );
    }
}
export default Com1;