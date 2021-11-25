import handleDispatch from './_handleDispatch'

export default function SelectionSort(array, animationSpeed, algorithm) {

    const toDispatch = []
    const auxArray = array.slice()
    doSelectionSort(auxArray, toDispatch)
    handleDispatch(toDispatch, array, animationSpeed, algorithm)
    return toDispatch
}

function doSelectionSort(auxArray, toDispatch)
{
    let arrLength = auxArray.length

    for(let i=0; i < arrLength; i++) 
    {
        var curr_val = auxArray[i]
        var smallest_val = auxArray[i]
        var smallest_index = null

        toDispatch.push(["current", i])

        for(let x=i+1; x < arrLength; x++)
        {
            toDispatch.push(["search", x])
            if(auxArray[x] <= curr_val) 
            {
                if(auxArray[x] < smallest_val) {
                    toDispatch.push(["tag", x])
                    smallest_val = auxArray[x]
                    smallest_index = x
                }
            }
        }

        if(smallest_index)
        {
            toDispatch.push([ [i,auxArray[smallest_index]], [smallest_index, curr_val ] ])
            auxArray[i] = auxArray[smallest_index]
            auxArray[smallest_index] = curr_val 
        }
    }
}
