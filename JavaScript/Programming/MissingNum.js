let arr = [0,1,2,3,4,6]

let n = 6

let expectedSum = (n*(n+1))/2 // formula
sum=0
for(let i =0;i<arr.length;i++){
    sum =sum +arr[i]
}
let MissingNum = expectedSum - sum

console.log(MissingNum)


// Second Approach Ex OR
