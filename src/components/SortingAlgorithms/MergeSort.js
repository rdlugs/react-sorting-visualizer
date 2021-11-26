import handleDispatch from "./_handleDispatch"

export default function MergeSort(array, animationSpeed, algorithm) {
    const toDispatch = [];
    
    if (array.length <= 1) return array;

    const auxArr = array.slice()
    
    doMergeSort(array.slice(), auxArr, 0, array.length - 1, toDispatch);
    handleDispatch(toDispatch, array, animationSpeed, algorithm)
    return toDispatch
}

function doMergeSort(mainArray, auxArr, startidx, endidx, toDispatch) {
    
    if(startidx === endidx) return
    let mididx = Math.floor((startidx + endidx) / 2)

    doMergeSort(auxArr, mainArray, startidx, mididx, toDispatch)
    doMergeSort(auxArr, mainArray, mididx + 1, endidx, toDispatch)

    doMerge(mainArray, auxArr, startidx, mididx, endidx, toDispatch)
}

function doMerge(mainArray, auxArr, startidx, mididx, endidx, toDispatch){
    let idx1 = startidx
    let idx2 = startidx
    let idx3 = mididx + 1

    while(idx2 <= mididx && idx3 <= endidx)
    {
        toDispatch.push([idx2, idx3]);
        if(auxArr[idx2] <= auxArr[idx3])
        {
            toDispatch.push([[idx1, auxArr[idx2]]]);
            mainArray[idx1++] = auxArr[idx2++]
        }
        else
        {
            toDispatch.push([[idx1, auxArr[idx3]]]);
            mainArray[idx1++] = auxArr[idx3++]
        }
    }

    while (idx2 <= mididx) {
        toDispatch.push([idx2, mididx]);
        toDispatch.push([[idx1, auxArr[idx2]]]);
        mainArray[idx1++] = auxArr[idx2++];
    }
    
    while (idx3 <= endidx) {
        toDispatch.push([idx3, endidx]);
        toDispatch.push([[idx1, auxArr[idx3]]]);
        mainArray[idx1++] = auxArr[idx3++];
    }
}