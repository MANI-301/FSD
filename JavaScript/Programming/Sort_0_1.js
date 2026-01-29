 let arr = [1,1,0,1,0,0,1,0,1,]

//  let sum =(a)=>{
//      let j=0
//      let last = a.length-1
//      let b = []
//     for(let i=0;i<a.length;i++){
//         if(a[i]==0){
//          b[j++]=a[i]
//         }
//         else{
//             b[last--] = a[i]
//         }
        
//     }
//     console.log(b);
    
//  }

//  sum(arr)
let i = 0 
let j = 0 
 while(j<arr.length){
    if(arr[j]==1){
       j++
    }
    else{
       let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = arr[i]
        i++
        j++
    }
 }
 console.log(arr)