let btnId = 0;
export const addBtn = (active = false) => ({
    type: 'ADD_A_BUTTON',
    id: btnId++,
    active
})

export const removeBtn = () => {
    if(btnId > 0){
        return {
            type: 'REMOVE_A_BUTTON',
            id: --btnId
        }
    } else {
        return {
            type: 'REMOVE_A_BUTTON',
            id: -1
        }        
    }
}

export const activateView = (id) => {
    return {
        type: 'ACTIVATE_VIEW',
        id: id
    }
}