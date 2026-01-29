
let arr = [2,1,3,4,,6,1]
let temp = arr

for(let i = 0;i<arr.length-1;i++){
   for(let j=0;j<arr.length-1-i;j++){
    if(arr[j]>arr[j+i]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
    }
   }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]!=temp[i]){
        console.log(false)
    }
    else if(arr[i]==temp[i]){
        console.log(true)
    }
}



let1 = [2,3,7,9,4,5,6]

let flag = true 

for(let i = 1;i<arr.length;i++){
    if(arr[i-1] > arr[i]){
        flag = false
        break
    }
}

if(flag == true){
    console.log("sorted")
}

else
    console.log("Not sorted")
