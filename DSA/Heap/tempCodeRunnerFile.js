function heapSort(arr){
    const heapifyDown = (arr, n , i) => {
        let largest = i
        const left = 2 * i + 1
        const right = 2 * i + 2

        if(left < n && arr[left] > arr[largest]){
            largest = left
        }

        if(right < n && arr[right] > arr[largest]){
            largest = right
        }

        if(largest !== i){
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            heapifyDown(arr , n , largest)
        }
    }

    const buildHeap = arr => {
        const n = arr.length
        for(let i = Math.floor((n/2) - 1); i >= 0; i--){
            heapifyDown(arr , n , i)
        }
    }

    const n = arr.length
    buildHeap(arr)

    for(let i = n-1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapifyDown(arr , i , 0)
    }

    return arr
}

const arr = [4, 10, 3, 5, 1];
console.log(heapSort(arr));