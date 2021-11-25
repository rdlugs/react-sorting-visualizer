const defaultState = 0

const AnimationSpeedReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SET_ANIMATION_SPEED":
            state = action.payload
            return state
        default:
            return state
    }
}

export default AnimationSpeedReducer