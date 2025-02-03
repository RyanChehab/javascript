// standard way 
function isPlindrome(str){
    if (str == str.split("").reverse().join("")){
        return true
    }

    return false
}

console.log(isPlindrome("ata"))