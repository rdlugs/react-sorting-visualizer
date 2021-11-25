const defaultState = null

const selectionSearchReducer = (state = defaultState, action) => {

    switch(action.type){
        case "SET_SEARCH":
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

export default selectionSearchReducer