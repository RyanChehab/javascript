function freq(arr){

    let count = new Map()
    
    for (let element of arr){
        count.set(element, (count.get(element)|| 0 ) + 1)
    }
    
    let maxCount = 0;
    let mostFrequentElement = null;
    let freq = new Set()
    
    for (let [key,value] of count.entries()){

        freq.add(value)

        if(value > maxCount){
            maxCount = value
            
            mostFrequentElement = key
        }
    }

    if(freq.size===1){
        return "All elements have the same frequency"
    }else{
        return mostFrequentElement
    }
    
}

console.log(freq([3,1,4,5,7]))