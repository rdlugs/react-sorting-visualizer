import handleDispatch from './_handleDispatch'

export default function QuickSort(array, animationSpeed, algorithm) {
    const auxArr = array.slice()
    const toDispatch = []
    
    doQuickSort(auxArr, 0, array.length - 1, toDispatch)
    handleDispatch(toDispatch, array, animationSpeed, algorithm)
    return toDispatch
}

function doQuickSort(array, low, high, toDispatch){
   if(low < high){
        const partition = quickSortHelper(array, low, high, toDispatch)
        doQuickSort(array, low, partition - 1, toDispatch)
        doQuickSort(array, partition + 1, high, toDispatch)
   }    
}

function quickSortHelper(array, start, end, toDispatch){
    let pivot = array[end]
    let i = start - 1

    for(let j = start; j <= end -1; j++){
        if(array[j] < pivot){
            i++
            let lowVal = array[i]
            toDispatch.push([ [i, array[j]], [j, lowVal] ])
            array[i] = array[j]
            array[j] = lowVal
        }
    }

    let k = array[i + 1]
    toDispatch.push([ [i+1, array[end] ], [end, k] ])
    array[i+1] = array[end]
    array[end] = k
    
    return i+1
}