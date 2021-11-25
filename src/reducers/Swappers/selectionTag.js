const defaultState = null

const selectionTagReducer = (state = defaultState, action) => {

    switch(action.type){
        case "SET_TAG":
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

export default selectionTagReducer