import React from 'react';
import fetchJsonp from 'fetch-jsonp';
export default class Com2Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.value, titles: []};
    }
    componentDidMount(){

        fetchJsonp('https://api.douban.com/v2/movie/top250?count=10')
        .then(res => res.json()).then(json => {       
            this.setState({titles: json['subjects']
        });
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
    updateTitle(e){
        const value = e.target.value;
        this.props.updateTitle(value);
        this.setState({value});
    }
    render() {
        return (
          <div> 
            <input value={this.state.value} onChange={this.updateTitle.bind(this)}/>
            {this.state.titles.map(function(item, index)
                {return (<p key={index}>{item.title}</p>);}
            )}
          </div>);
    }
}