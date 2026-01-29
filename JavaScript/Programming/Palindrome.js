let a = [1,2,3,2,1]
let b = [1,5,6,4,1]

let ispalindrome=(arr)=>{
    let left = 0 
    let right = arr.length-1
    while(left<right){
        if(arr[left]!=arr[right]){
        return false
    }
        if(arr[left]==arr[right]){
        return true
      }  
    }
}
ispalindrome(b)

