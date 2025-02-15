function substring(str1,str2){

    for (let i = 0; i < str1.length-str2.length; i++) {
        let match = true

        for (let j = 0; j < str2.length;j++){
            if(str1[i+j] !== str2[j]){
                match= false 
                break
            }
        }

        if(match){
            return true 
        }
    }
    return false
}

console.log(substring("hello world", 'woryy'))