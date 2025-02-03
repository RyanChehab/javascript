// standard way 
function isPalindrome(str){
    if (str == str.split("").reverse().join("")){
        return true
    }

    return false
}

console.log(isPalindrome("ata"))

function Pal(str){
    let rev = ''
    for (let i = str.length - 1; i >= 0 ; i--){
        rev += str[i]
    }
    if (rev == str) {
        return true
    }

    return false
}

console.log(Pal("ata"))