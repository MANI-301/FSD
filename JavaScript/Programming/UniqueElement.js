let arr = [4,2,3,3,2,1,1]

for(let i=0;i<arr.length;i++){
    let count = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
             count++;
        }
    } if(count==1){
    console.log(arr[i])
}
}


let ans = 0 
for (let i=0;i<arr.length;i++){
    ans = ans ^ arr[i]
}
console.log(ans)






