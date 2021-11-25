import handleDispatch from './_handleDispatch'

export default function InsertionSort(array, animationSpeed, algorithm) {
    
    const toDispatch = []
    const auxArray = array.slice()

    doInsertionSort(auxArray, toDispatch)
    handleDispatch(toDispatch, array, animationSpeed, algorithm)
    return toDispatch
}

function doInsertionSort(auxArray, toDispatch) {
    let arrLength = auxArray.length
    
    for(let i=1; i < arrLength; i++) 
    {
        var current_val = auxArray[i]
        var prev_index = i - 1
        var current_index = i
        
        toDispatch.push([prev_index, current_index])
        while( auxArray[prev_index] > current_val) {
            auxArray[prev_index + 1] = auxArray[prev_index];
            
            toDispatch.push([ [prev_index, current_val], [current_index, auxArray[prev_index]] ])
            
            prev_index--      
            current_index--
        }

        auxArray[prev_index+1] = current_val
    }
}