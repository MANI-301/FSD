

let student = {
    sname: "mani",
    age: 22,
    player : true,
    skills : ['html','css','js'],
    address : {
        city:"chennai",
        pincode:567876
    },
    work :() =>{
         console.log("sleep eating") 
    }

}

console.log(student)

// ! how to acess 
// objectname.key
console.log(`Student name is : $(student.sname)`)

// ! How to modify

student.age = 25

console.log(student.age)

// !   how to add

student.ph_no = 598765
console.log(student)

//! accessing object inside another object
console.log(student.address.city)

// ! How to Delete 

delete student.player

console.log(student)


// ! Methods in Object


// ! 1. Object.keys()

// This method is used return all the keys in form of array. the return type is array

let keys = Object.keys(student)

console.log(keys)

// ! 2. Object.values()

// This method is used return all the values in form of array. the return type is array

let values = Object.values(student)

console.log(student)


// ! 3. Object.entries()

 // This method is used return both key and values pairs in form of array. the return type is array

let key_value = Object.entries(student)

console.log(key_value)


// ! 4. Object.freeze()

// This method is making object frozen where we can't add or delete or modify the object.

let ob1 = {
    name:"mobile",
    price:20000,
    color:"blue"

}

console.log("before Freeze")

console.log(ob1)


Object.freeze(ob1)

console.log("after freeze")

ob1.price = 10000  // modification is not possible
ob1.brand = "realme" // adding is not possible
delete ob1.name  // deleting is not possible
 
console.log(ob1)



// ! 5. Object.isFrozen()

// It is used to check whether the given object is frozen or not. if it is frozen it will return true else it will return false.

console.log(Object.isFrozen(ob1))
console.log(Object.isFrozen(student))


// ! 6.Object.seal()

// Object.seal it is also similer to Object.sealed() method, we can't do delete or add but here we can modify

let ob2 = {
    name:"mani",
    dept:"It",
    status:"student"
}

Object.seal(ob2)

ob2.status = "employee" // modification is possible

delete ob2.name // deleting is not possible

ob2.age = 22   // adding is not possible

console.log(ob2)


// ! 7.Object.isSealed()


// It is used to know whether the object is sealed or not


console.log(Object.isSealed(ob2))


// ! 8.ObjectName.hasOwnProperty()

// It is used to know the key is present or not in the object
// It will return boolean value

console.log(ob2.hasOwnProperty("dept"))


// ! 9.Object.assign()

let ob3 = {
    sname : "dhoni",
    age: 44
}
 console.log(ob3)

 let ob4 = {
    location : "chennai",
    phno : 987654321
 }

 console.log(ob4)

let combineObj = Object.assign({},ob3,ob4)
console.log(combineObj)

console.log(ob3)
