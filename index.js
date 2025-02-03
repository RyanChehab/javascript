function freq(arr){

    let count = new Map()
    
    for (let element of arr){
        count.set(element, (count.get(element)|| 0 ) + 1)
    }
    let current=0
    let max=0

    for (let element of arr){
        let max = count.get(element);

        if(max < current){
            max = current
        }

    }

    return max
}

console.log(freq([2,3,1,4,4,5,7]))