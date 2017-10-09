import { combineReducers } from 'redux'

const btns = (state = [], action) => {
    switch(action.type) {
        case 'ADD_A_BUTTON':
            return [...state, 
                {
                    id: action.id,
                    active: action.active
                }]
        case 'REMOVE_A_BUTTON':
            if (state.length > 0){
                return [...state].slice(0, -1)
            }
            return state
        case 'ACTIVATE_VIEW':
            return state.map((btn) => {
                if(btn.id === action.id){
                    btn.active = true
                } else {
                    btn.active = false
                }
                return btn
            })
        default:
            return state
    }
}
const myReducer = combineReducers({btns})

export default myReducer