function diamond(n){

    if(n % 2 == 0){
        console.log("please enter an odd number")
    }

    let mid = Math.floor(n / 2)

    for (let i = 0; i < n; i++) {

        let stars =i <= mid? 2 * i + 1 : 2 * (n - i) -1;
        let spaces = (n - stars) / 2;

        console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
}

console.log(diamond(9))