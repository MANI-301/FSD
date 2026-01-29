console.log("function in JavaScript")

// ! how to crete  Function
// ! 1.Function with Name
function display(){
    console.log("Iam display Function")
}
display()

function add(a,b){
    console.log(`the addtion of ${a} and ${b} is ${a+b}`)
}

add(10,20)
add (100,200)
add(200,300)

// ! function with return 

function multiply(a,b){
    return a*b;
}

console.log(multiply(10,5))
 var res  = multiply(1000,1)
console.log(res)


// Swap of Two Numbers
function Swap(a,b){
    console.log(`before swap is ${a}`)
    console.log(`before swap is ${b}`)
     a = a+b
     b = a-b
     a = a-b

    console.log(`after swap a is ${a}`)
    console.log(`after swap a is ${b}`)
}
Swap(10,20)

// ! 2.Anomous Function
// the function does not have is called annonymous function 

// ! 3. function with expression 

let a  = function(){
    console.log("hi how are you")
}
a()

let OddorEven = function(a){
      if (a%2==0){
        console.log(`${a} is even`)
      }
      if (a%2==1){
        console.log(`${a} is Odd`)
      }
      
}
OddorEven(10)
OddorEven(5)

// ! 4. Arrow Function  // we donot use function keyword

let sub = (a,b)=>
{
    return a-b
}

let res2 = sub(50,10)

console.log(res2)


let power = (a,b)=>{

    var sum = 1
    for(var i=1;i<=b;i++){
        sum+=sum*a
    }
    console.log(`${sum}`)
}
power(2,5)


// ! 5.Nexted function // one function inside another function

let outer = ()=>{
    console.log("Iam inner function")
     let inner = ()=>{
        console.log("Iam inner function")
     }
     inner()
}

outer()
//! lexical function
// In nexted function ,inner function can access all the  properties  of the  outer function but the outer function can't access the properties of the inner function it is called Lexical Scoppig

let parent =()=>{
    let a =10 ;
    let child=()=>{
        let b=20
        console.log(`the value of a is ${a}`)
        console.log(`the value of a is ${b}`)
    }
    console.log(b)
    child()
}

//! 6. Higher Order Function , Callback Function

// Any function that takes another function as parameter is called Higher Order function  
let anotherfunction=()=>{
        console.log(`Another Function`)
}
let firstfunction = (a)=>{
    console.log(`First Function`)
    a()
}
firstfunction(anotherfunction)


// The Function is send to the higher-order-Function as Parameter is called Callback Function 

firstfunction(
    ()=>{
        console.log(`Callback function`)
    }
)
;

// ! 7. IIFE (immediate invoke function expresstion) // we use () parameter  
(function(a,b){
    console.log(`IIFE`)
    console.log(a+b)
}
)(10,20);