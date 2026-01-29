let arr1 = [10,20,30,40,50,60]

 let temp1 = arr1[arr1.length-1]

 for(let i = arr1.length-2;i>=0;i--){
    arr1[i+1] = arr[i]
 }
  arr1[0] = temp1
 console.log(arr1)
