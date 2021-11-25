
import handleDispatch from "./_handleDispatch"

export default function BubbleSort(array, animationSpeed, algorithm) {
    
    const toDispatch = []
    const auxArray = array.slice()
    
    doBubbleSort(auxArray, toDispatch)
    handleDispatch(toDispatch, array, animationSpeed, algorithm)
    return toDispatch
}

function doBubbleSort(auxArray, toDispatch)
{
    let array_length = auxArray.length
    for(let x=0; x < array_length; x++)
    {
        let swap = false
        for(let y=0; y < array_length - x - 1; y++)
        {
            if(y+1 <= array_length - 1)
            {
                const current_val = auxArray[y]
                toDispatch.push([y, y+1])

                if(current_val > auxArray[y+1])
                {
                    toDispatch.push([ [y, auxArray[y+1]], [y+1, current_val] ])
                    auxArray[y] = auxArray[y+1]
                    auxArray[y+1] = current_val
                    swap = true
                }
            }
        }

        if(!swap)
            break
    }
}
