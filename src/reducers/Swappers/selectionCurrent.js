const defaultState = null

const selectionCurrentReducer = (state = defaultState, action) => {

    switch(action.type){
        case "SET_CURRENT":
            state = action.payload
            break
        case "CLEAR":
            state = null
            break
        default:
            return state
    }
    return state
}

export default selectionCurrentReducer