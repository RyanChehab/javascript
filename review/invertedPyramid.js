function InvertedPyramid(n) {
    for (let i = 0; i < n; i++) {
        // Calculate spaces and stars for each row
        let spaces = i;
        let stars = 2 * (n - i) - 1;
        
        // Build and print the row
        let row = " ".repeat(spaces) + "*".repeat(stars);
        console.log(row);
    }
}

InvertedPyramid(5)