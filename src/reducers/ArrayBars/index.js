const defaultState = 50

const ArrayBarsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SET_ARRAY_BARS":
            state = action.payload
            return state
        default:
            return state
    }
}

export default ArrayBarsReducer