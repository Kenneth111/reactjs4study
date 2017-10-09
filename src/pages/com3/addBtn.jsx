import React from 'react'
import { connect } from 'react-redux'
import { addBtn } from './actions.js'

const AddBtn = ({state, addBtn}) => {
    return (
        <button onClick={() => addBtn()}>Add a new Btn</button>
    )
}

const mapDispatch2Props = {
    addBtn: addBtn
}

const mapState2Props = (state) => {
    return state
}

const AddBtnContainer = connect(mapState2Props, mapDispatch2Props)(AddBtn)
export default AddBtnContainer