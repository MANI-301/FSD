let arr = [10,4,1,7,8,5]
let max =arr[0]
let secondmax = arr[0]
for(let i=0;i<arr.length;i++)
{
    if(max>arr[i])
    {
        secondmax = max;
        max = a[i];
    }
    else if(max!=secondmax && a[i]> secondmax)
    {
        secondmax = a[i];
    }

}
console.log(max);
console.log(secondmax);