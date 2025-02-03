function reverse(str){
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverse("helloo"))

// recursion
function rev(str){

    if(str.length <= 1){
        return str
    }

    return str[str.length -1] + rev(str.slice(0, -1))
}

console.log(rev('hellooo'))

function reverseStandard(str){
    return str.split("").reverse().join('')
}
