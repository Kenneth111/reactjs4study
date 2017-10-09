import React from 'react'
import {connect} from 'react-redux'

class DynamicView extends React.Component{
    render() {
        return (
            <h1>{this.props.content}</h1>
        )
    }
}

const mapState2Props = (state) => {
    let id = ""
    for (let i = 0; i < state.btns.length; i++){
        if(state.btns[i].active){
            id = state.btns[i].id
        }
    }
    return {content: id}
}

const DynamicViewContainer = connect(mapState2Props)(DynamicView)

export default DynamicViewContainer