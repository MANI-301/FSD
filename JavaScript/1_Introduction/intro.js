console.log("Iam External JavaScript");

// how many ways we can declare variable ?

// ! 1.let  // Re-declaration is not possible

let myname   // variable declaration
myname = "dhoni" // variable initialization

// variable declaration and initialization
let age = 44
//printing Statement
console.log(myname)
console.log(age)

// ! 2.var    // In var keyword we can do Re-initialization but in Re-declaration is possible.
var phno = 9361432677
var city 
city = "chennai"

console.log(phno)
console.log(city)

// ! 3.const  // Re-declaration and Re-initialization is not possible 

const aadharNo = 12356788
// aadharNo =123456788

console.log(aadharNo);

//!  datatypes:

// ?  1.number
        let eid =7
        let salary = 1000000.5555

// typeof operator is used to know the datatype of the variable

console.log(eid)
console.log(typeof eid)

//? 2.String 
      let emp1 = 'mani'
      let emp2 = "dhoni"
      let emp3 = `rohit`
      
      
      console.log(typeof emp1)
      console.log(typeof emp2)
      console.log(typeof emp3)
// ? 3.boolean
        let isMarried = true

        console.log(typeof isMarried)

// ? 4.Undefined
// Any variable declaration but not initialized is called undefined
// typeof undefined is undefined 
 let empPhNo

 console.log(empPhNo)

 console.log(typeof empPhNo)
             
 // ? 5.null 
  // we will declaring with null
  // typeof null is object 
       let empsal = null
       console.log(empsal)

// ? 6.bigint
       let count = 2n
       console.log(count)
       console.log(typeof count)





// ! variable hoisting

// If we are asscessing any variable before its declaratiom , and the variable has declared by var keyword then
//  this declaration  part will be moving to top and it will give the output as undefined it is called variable 
// Hoisting.


// variable hoisting is possible for only var keyword not for let and const


console.log(a)

var a = 30 

// var is global variable
// let is global scope