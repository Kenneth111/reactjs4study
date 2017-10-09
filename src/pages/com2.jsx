import React from 'react';
import Com2Child from './com2-child';
export default class Com2 extends React.Component{
    constructor(){
        super();
        this.state = {title: "I'll be back"};
    }
    updateTitle(title){
        this.setState({title});
    }
    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
                <Com2Child value={this.state.title} updateTitle={this.updateTitle.bind(this)}/>
            </div>
        );
    }
}