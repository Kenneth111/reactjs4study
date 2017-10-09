import React from 'react';
import { connect } from 'react-redux'
import {activateView} from './actions.js'
class Btn extends React.Component {
    render(){
        return (
            <button onClick={() => {this.props.activateView(this.props.name)}}>{"btn" + this.props.name}</button>
        )
    }
}

const mapState2Props = (state) => {
    return state
}

const mapDispatch2Props = {
    activateView: activateView
}

const BtnContainer = connect(mapState2Props, mapDispatch2Props)(Btn)
export default BtnContainer