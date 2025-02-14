function pyramid(n){
    for (let i = 0; i < n; i++){

        let spaces = n - i -1
        let stars = 2 * i + 1

        let row = " ".repeat(spaces) + "*".repeat(stars)
        console.log(row)

    }
}

pyramid(5)