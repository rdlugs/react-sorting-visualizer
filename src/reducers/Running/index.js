const defaultState = false

const RunningReducer = (state = defaultState, action) => {
    if(action.type === "SET_RUNNING")
        state = action.payload
    
    return state
}

export default RunningReducer