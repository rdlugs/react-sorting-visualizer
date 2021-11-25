const setAnimationSpeed = (speed) => {
    return {
        type : "SET_ANIMATION_SPEED",
        payload: speed
    }
}

const setAlgorithmType = (algorithm) => {
    return {
        type: "SET_ALGORITHM",
        payload: algorithm
    }
}

const setArrayBars = (bars) => {
    return{
        type: "SET_ARRAY_BARS",
        payload: bars
    }
}

const setArray = (array) => {
    return {
        type: "SET_ARRAY",
        payload: array,
    }
}


const setRunning = (isRunning) => {
    return {
        type: "SET_RUNNING",
        payload: isRunning
    }
}

const setSwappers = (swappers) => {
    return {
        type: "SET_SWAPPERS",
        payload: swappers
    }
}

const clearSwappers = () => {
    return { type: "CLEAR" }
}

const setSorted = (isSorted) => {
    return {
        type: "SET_SORTED",
        payload: isSorted
    }
}

const setSelectionSearchIndex = (searchIndex) => {
    return {
        type: "SET_SEARCH",
        payload: searchIndex
    }
}
const clearSelectionSearchIndex = () => {
    return { type: "CLEAR" }
}

const setSelectionCurrentIndex = (currentIndex) => {
    return {
        type: "SET_CURRENT",
        payload: currentIndex
    }
}
const clearSelectionCurrentIndex = () => {
    return { type: "CLEAR" }
}

const setSelectionTagIndex = (tagIndex) => {
    return {
        type: "SET_TAG",
        payload: tagIndex
    }
}
const clearSelectionTagIndex = () => {
    return { type: "CLEAR" }
}

const addTimeout = (timeout) => {
    return {
        type: "ADD_TIMEOUT",
        payload: timeout
    }
}
const clearTimeout = () =>{
    return { type: "CLEAR" }
}

export { 
    setAnimationSpeed, 
    setAlgorithmType,
    setArrayBars,
    setArray,
    setRunning,
    setSwappers,
    clearSwappers,
    setSorted,
    setSelectionSearchIndex,
    setSelectionCurrentIndex,
    setSelectionTagIndex,
    clearSelectionSearchIndex,
    clearSelectionCurrentIndex,
    clearSelectionTagIndex,
    addTimeout,
    clearTimeout
}