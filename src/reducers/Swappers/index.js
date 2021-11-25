const defaultState = []

const swappersReducer = (state = defaultState, action) => {

    switch(action.type){
        case "SET_SWAPPERS":
            state = action.payload
            break
        case "CLEAR":
            state = []
            break
        default:
            state = []
    }
    return state
}

export default swappersReducer