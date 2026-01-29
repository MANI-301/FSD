let arr = [1,1,0,0,1,0,1,1,1]

let max =(arr)=>{
    let temp = 0;
    let count = 1
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]==arr[i+1]){
        temp = count++
        count =1
    }
        if(count>temp){
            console.log(count)
        }
      }
      
    }



max(arr)