let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8]

let merge =(arr1,arr2)=>{
    let arr3 = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j])
       {
        arr3.push(arr1[i++]) 
       }
       else{
        arr3.push(arr2[j++])
       }
    }
    while(i<arr1.length){
        arr3.push(arr1[i++])
    }
     while(i<arr2.length){
        arr3.push(arr2[j++])
    }
    console.log(arr3)
}

merge(arr1,arr2)
