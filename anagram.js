function anagram(str1,str2){

    let cleanstr1 = str1.toLowerCase()
    let cleanstr2 = str2.toLowerCase()

    let sorted1 = cleanstr1.split("").sort().join("")
    let sorted2 = cleanstr2.split("").sort().join("")

    return sorted1 == sorted2
}

console.log(anagram("triangle", "integral"))