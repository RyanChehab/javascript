function secondLargest(arr){
    let largest = -Infinity
    let secondLargest = -Infinity

    for(let num of arr){

        if(num > largest){
            secondLargest = largest
            largest = num
        }
        else if(num > secondLargest && num < largest){
            secondLargest = num 
        }
    }

    return secondLargest === -Infinity? null: secondLargest;
}

console.log(secondLargest([2,3,1,7,5,9]))