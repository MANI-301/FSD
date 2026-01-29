let Student ={
    sname:"mani",
    age:22,
    phno:98765432,
    email:"mani@gmail.com",
    city:"chennai"
}
console.log(Student.phno)
console.log(Student.email)

let {sname,age,phno,email,city} = Student

console.log(sname)
console.log(age)

// ! Array Destructure 

let arr =['html','css','js','react']

let[a1,a2,a3,a4] = arr

console.log(a1)
console.log(a2)
console.log(a3)

// ! rest parameter

// The rest Parameter is used to Group the remaining elements into an Array.

// It collects "the rest" of the aruguments that were not explicitly Specified.

// The rest parameter is respresented by three dots (...)

let display = (a,b,...c)=>{
    console.log(a)
    console.log(b)
    console.log(c)
}

display(1,2,3,4,5,6,7,8,9,10)





// ! spread operator

// The Spread Operator in JavaScript allows to Expand an array, object ,or iterable into individual elements

// It is often used to copy, merge, or pass elements.

// The Spread operator is represented by three dots(...)

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1,...arr2]

console.log(arr3)

// ! 



// ! shallow copy

// A shallow copy of an object is a new object that is a copy of the original,
// but it only copies the references of nested objects instead of creating new instances.

// This means that if the original object contains another object as a property,changes to the nested object as a property
// Changes to the nested object in the copy will affect all the array because it is shared same memory location.

let arr5 = [1,2,3,4,5]

let copy = arr5

console.log(copy)

copy.push(100)

console.log(copy)

console.log(arr5)

// ! deep copy


// A deep copy creates a completely independent clone of the original object, including all nested object
// Changes to the copied object do not affect the original.

let arr6 = [1,2,3,4,5,6,7,8]

let copy2 = JSON.parse(JSON.stringify(arr6))

console.log(copy2)
copy2.push(100)
console.log(copy2)
console.log(arr6)




