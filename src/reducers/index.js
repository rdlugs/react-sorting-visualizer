import { combineReducers } from 'redux'

/**
 * Reducers
 * 
 */
import ArrayReducer from './Array'
import AlgorithmReducer from './Algorithm'
import AnimationSpeedReducer from  './AnimationSpeed'
import ArrayBarsReducer from './ArrayBars'
import RunningReducer from './Running'
import swappersReducer from './Swappers'
import selectionSearchReducer from './Swappers/selectionSearch'
import selectionCurrentReducer from './Swappers/selectionCurrent'
import selectionTagReducer from './Swappers/selectionTag'
import sortedReducer from './Sorted'
import timeoutsReducer from './Timeeouts'

const allReducers = combineReducers({
    arrayBars       : ArrayBarsReducer,
    algorithm       : AlgorithmReducer,
    animationSpeed  : AnimationSpeedReducer,
    array           : ArrayReducer,
    isRunning       : RunningReducer,
    swappers        : swappersReducer,
    sorted          : sortedReducer,
    selectionSearchIndex     : selectionSearchReducer,
    selectionCurrentIndex    : selectionCurrentReducer,
    selectionTagIndex        : selectionTagReducer,
    timeouts                 : timeoutsReducer
})

export default allReducers