const defaultState = []

const timeoutsReducer = (state = defaultState, action) => {

    switch(action.type){
        case "ADD_TIMEOUT":
            state = action.payload
            break
        case "CLEAR":
            if(state.length > 0) {
                for(let i=0; i < state.length; i++)
                {
                    clearTimeout(state[i])
                }
            }
            state = []
            break
        default:
            return state
    }
    return state
}

export default timeoutsReducer