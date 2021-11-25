const defaultState = ""

const AlgorithmReucer = (state = defaultState, action) => {
    switch(action.type) {
        case "SET_ALGORITHM":
            state = action.payload
            return state
        default:
            return state
    }
}

export default AlgorithmReucer