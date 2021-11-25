const defaultState = false

const sortedReducer = (state = defaultState, action) => {
    if(action.type === "SET_SORTED") {
        state = action.payload
    }

    return state
}

export default sortedReducer