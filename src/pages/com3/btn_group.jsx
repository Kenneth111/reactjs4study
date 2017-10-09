import React from 'react';
import { connect } from 'react-redux'
import Btn from './btn';

class BtnGroup extends React.Component {
    render(){
        return (
            <div>
                {
                    this.props.btns.map((btn, index) => {
                        return (<Btn key={index} name={btn.id}></Btn>)
                    })                    
                }
            </div>
        )
    }
}

const mapState2Props = (state) => {
    return state;
}

const BtnGroupContainer = connect(mapState2Props)(BtnGroup)

export default BtnGroupContainer