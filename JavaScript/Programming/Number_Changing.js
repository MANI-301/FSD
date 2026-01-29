let a = [1,2,0,0,1,0,2,1]

// for(let i=0;i<a.length-1;i++){
//     for(let j=0;j<a.length-1;j++){
//     if(a[j] >= a[j+1]){
//         let temp = a[i]
//         a[i] = a[i+1]
//         a[i+1] = temp
//     }
//     }
// }

// console.log(a)

let i=0
let j=0
let k=a.length-1

while(j<=k){
    if(a[j]==1){
        j++
    }
    else if(a[j]==0){
         let temp = a[j]
         a[j]=a[i]
         a[i]=temp
         i++
         j++
    }
    else {
        let temp = a[j]
        a[j] = a[k]
        a[k]=temp
        k--
    }
}

console.log(a);
