let arr = [5,6,1,2,7,4,9]
let count = 0
let left = arr[0]
let right = arr[arr.length-1]
for(let i=1;i<arr.length;i++){
    if(arr[i-1] > arr[i]){
        count++
    }
    if(right > left){
        count++
    }
}
if(count == 0){
    console.log("Not sorted and Rotated")
}
if(count==1){
    console.log("sorted")
}
if(count==2){
    console.log("Sorted and Rotated")
}