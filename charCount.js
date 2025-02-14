function charCount(str){
    let chars = {}
    
    for (let char of str){

        if (chars[char]){
            chars[char]++

        } else{
            chars[char] = 1
        }
    }
    return chars
}
console.log(charCount('banana'))
