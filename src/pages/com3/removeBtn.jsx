import React from 'react'
import { connect } from 'react-redux'
import { removeBtn } from './actions.js'
const RemoveBtn = ({state, removeBtn}) => {
    return (
        <button onClick={() => removeBtn()}>Remove a new Btn</button>
    )
}

const mapDispatch2Props = {
    removeBtn: removeBtn
}

const mapState2Props = (state) => {
    return state
}

const RemoveBtnContainer = connect(mapState2Props, mapDispatch2Props)(RemoveBtn)

export default RemoveBtnContainer