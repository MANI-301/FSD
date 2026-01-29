let arr = ['html','javascript','css','node','express','mongo db']



// ! for in loop 

// It will give the index

for (let i in arr){
    console.log(i)
}

// ! for of loop

// It will give all the elements

for(let i of arr ){
    console.log(i)
}


// ! for in loop is possible in object

let ob = {
    name:"pen",
    price:10,
    color:"blue"
}

for(let key in ob){
         console.log(key,ob[key])
}


// ! for of is not possible in object

// for (let i of ob){
//     console.log(i)

// }

let cricketers = [
         {
            name:"dhoni",
            role : " Captain,Keeper-Batsman",
            age : 44
         },
         {
            name:"Virat",
            role : " Middle Order Batsman",
            age : 36
         },
         {
            name:"Rohit",
            role : "Opening Batsman",
            age : 38
         }

]

cricketers.map((ele)=>{
    console.log("player Name is ",ele.name)
    console.log("player Role is ",ele.role)
})



// ! alert is creates dialog box is used print
// ! prompt is creates dialog box
// parseInt is used to convert String to Int
let addnumber = () =>{
    let a = parseInt(prompt("Enter First Number"))
    let b = parseInt(prompt("Enter Second Number"))

    alert(a+b)
}

addnumber()