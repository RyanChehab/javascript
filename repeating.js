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