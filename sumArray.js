

function aVeryBigSum(ar) {
    let value = 0
    for (let index = 0; index < ar.length; index++) {
       value = value + ar[index]
        
    }

    return value

}

function aVeryBigSumRefactore(ar) {
    let value = 0
    ar.forEach(element => {
        value = value + element
    });

    return value
}

function aVeryBigSumRefactore1(ar) {
    return ar.reduce((acc, currentValue) => {
        return acc + currentValue
  },0)
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]))
console.log(aVeryBigSumRefactore([1000000001,1000000002,1000000003,1000000004,1000000005]))
console.log(aVeryBigSumRefactore1([1000000001,1000000002,1000000003,1000000004,1000000005]))