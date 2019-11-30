let defaultState = {
    color: 'red'
}

const mainReducer = (state = defaultState, action) => {

    return action.type === 'CHANGE_COLOR' ? {
        ...state,
        color: action.color
    } : {
        ...state
    }
}

export default mainReducer;