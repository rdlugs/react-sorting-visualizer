import store from '../../Store'

/**
 * Action States
 * 
 */
import { 
    setSwappers, 
    setRunning, 
    setSorted, 
    addTimeout, 
    clearTimeout,
    setSelectionSearchIndex,
    setSelectionCurrentIndex,
    setSelectionTagIndex,
    clearSelectionCurrentIndex,
    clearSelectionSearchIndex,
    clearSelectionTagIndex,
} from '../../actions'

/**
 * 
 * Timouts Temp
 * 
 */
 let Timeouts = []

function handleDispatch(toDispatch, array, animationSpeed, algorithm) {
    const speed = 100 / animationSpeed
    let isDone = 0

    store.dispatch(setRunning(true))
    store.dispatch(setSorted(false))

    for(let i=0; i < toDispatch.length; i++) {
        isDone = i * speed

        // Swapping Values
        if(Array.isArray(toDispatch[i][0])) 
        {
            Timeouts.push(setTimeout(()=>{
                if(algorithm === "mergeSort")
                {
                    const barOneIndex = toDispatch[i][0][0]
                    store.dispatch(setSwappers(toDispatch[i]))
                    array[barOneIndex] = toDispatch[i][0][1]
                }
                else
                {
                    const barOneIndex = toDispatch[i][0][0]
                    const barTwoIndex = toDispatch[i][1][0]
                    
                    store.dispatch(setSwappers(toDispatch[i]))
                    
                    array[barOneIndex] = toDispatch[i][0][1]
                    array[barTwoIndex] = toDispatch[i][1][1]
                }

            }, i * speed))
        }
        else
        {
            switch(algorithm)
            {
                case "insertionSort":
                case "bubbleSort":
                case "mergeSort":
                case "quickSort":
                    Timeouts.push(setTimeout(()=>{
                        store.dispatch(setSwappers(toDispatch[i]))
                    }, i * speed))
                    break

                case "selectionSort":
                    Timeouts.push(setTimeout(()=>{
                        switch(toDispatch[i][0]){
                            case "current":
                                store.dispatch(setSelectionCurrentIndex(toDispatch[i][1]))
                                break;
                            case "search":
                                store.dispatch(setSelectionSearchIndex(toDispatch[i][1]))
                                break;
                            case "tag":
                                store.dispatch(setSelectionTagIndex(toDispatch[i][1]))
                                break;
                            default:
                                return true
                        }
                    }, i * speed))
                    break
                default:
                    return false
            }
        }
    }

    // Is Animation is done
    Timeouts.push(setTimeout(()=>{
        store.dispatch(setRunning(false))
        store.dispatch(setSorted(true))
        store.dispatch(clearTimeout())
        
        if( algorithm === "selectionSort" ) 
        {
            store.dispatch(clearSelectionCurrentIndex())
            store.dispatch(clearSelectionSearchIndex())
            store.dispatch(clearSelectionTagIndex())
        }

    }, isDone))

    // add Timeouts to store
    store.dispatch(addTimeout(Timeouts))
}

export default handleDispatch