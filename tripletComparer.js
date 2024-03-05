function compareTriplets(a, b) {
    let values = [0,0]
    
    for (let index = 0; index < 3; index++) {
        if(a[index] > b[index]) {
            values[0] += 1
            
        }
        if(a[index] < b[index]) {
            values[1] += 1
        }

    }

    return values
}

console.log(compareTriplets([17,28,30],[99,16,8]))