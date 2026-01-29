 
 let arr = [10,20,30,40,50,60]

//  let f = arr.filter(()=>{

         
//  })



 let temp1 = arr[0]

 for(let i=0;i<arr.length-1;i++){
    arr[i] = arr[i+1]
 }

 arr[arr.length-1] = temp1

 console.log(arr)


