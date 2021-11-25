
const ArrayReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_ARRAY":
            state = action.payload
            return state
        default:
            return state
    }
}

export default ArrayReducer