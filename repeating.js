function rep(str){
    charCount = {}

    for (let char of str){
        charCount[char] = (charCount[char] || 0) + 1
    }
    let result = []

    for (let char of str){
        if(charCount[char] === 1){
            result.push(char)
        }
    }

    return result;
}

console.log(rep('ayyywooo'))

function repHash(str){

    let count = new Map()

    for (let char of str){
        count.set(char, (count.get(char)|| 0) + 1)
    }    
    
    for (let char of str){
        if (count.get(char)===1){
            return char
        }
    }

    return null

}

console.log(repHash('aayyyooo'))
