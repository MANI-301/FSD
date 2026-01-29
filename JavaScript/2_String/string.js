// how to declare  string in 3 way
    let str1="first string"
    let str2='second string'
    let str3=`third string`

     
console.log(str1)
console.log(str2)
console.log(str3)

console.log (typeof str1)
console.log (typeof str2)
console.log (typeof str3)

console.log(str1.length)

// 1. toUpperCase

// this method is used to convert any string into uppercase and it will return one new string.  it will not modify the original string 

let myname ="santanu"
console.log(myname.toUpperCase())
let upper=myname.toUpperCase()
console.log(upper)
console.log(myname)

// 2. toLowerCase

// this method is used to convert any string into lowercase and it will return one new string.  it will not modify the original string 

let address ="CHENNAI"
console.log(address.toLowerCase())
let lower=address.toLowerCase()
console.log(lower)
console.log(address)

// 3.indexof()

//  it's used to know the index of the given character from the string. 
// it will take the first occurance of the given Character.
// if the character is not pressent it will give -1

console.log(address.indexOf("N"))   // 3
console.log(address.indexOf("n"))   // -1

// 4.lastIndexOf()

//  this method will give the last occurance index number of the given character from the String.

console.log(address.lastIndexOf("N"))   //4

// 5.charAt()

//  it is used to know the character present in the given index.

console.log(address.charAt(3))      //N

// 6.includes()

// this method is used to know whether the given string is present or not.
//  if it is present it will return true otherwise it will return false.

let msg="hello how are you"
console.log(msg.includes("hello"))

// 7.trim()

// it is used to remove whitespaces from both sides of the string and it will return new string.

let moblileName="  samsung  "
console.log(moblileName)
console.log(moblileName.length)

let moblie2=moblileName.trim()
console.log(moblie2)
console.log(moblie2.length)

console.log(moblileName)

// 8.split

// this method is used to convert any string into array.

let wish="good morning everyone"
let arr=wish.split(" ")  

console.log(wish.split())
console.log(wish.split(" "))
console.log(wish.split(""))

console.log(arr)

// 9.replace()

// it is used to replace one string with another string.
// it will replace only the first occurance of the string.

let information="i am  from bangalore"
let replacedStr=information.replace("a","@")
 
console.log(replacedStr)

// 10.replaceAll()

// it will replace all occurrance 
let replace2=information.replaceAll("a","@")
console.log(replace2)

// 11.concate()

// this method is used to combine 

let newstr=str3.concat(" ","hi i am ")
console.log(newstr )
 
// 12.slice()

// it is used to extract one string from another string.
// it will take two parameters (stratIndex,endIndex)
// it will not include the endIndex value 

let str5="hello hoe are you"

console.log(str5.slice(1,4))
console.log(str5.slice(6))
console.log(str5.slice(-7,0)) //empty string or no output  it will go only  left to right
console.log(str5.slice(-1,-5))  // empty str
console.log(str5.slice(-3))
console.log(str5.slice(-3,-1))
console.log(str5.slice(-5,0))

// 13.subsstring()

// it is used to extract one string from another string.
// it will take two parameters (stratIndex,endIndex)
// it will not include the endIndex value 
// but in substring it will consider all the negative(-1) value as 0

console.log(str5.substring(1,4))
console.log(str5.substring(6))
console.log(str5.substring(-6))

console.log(str5.substring(4,1))  //it will consider the user made mistake so it will take (1,4) swap the string


// 14.string Interpolation
let num1=10
let num2=20
let add=num1+num2
console.log(`the addition of num1 ${num1} and num2 ${num2} is ${add}`)
console.log(`the subraction of num1 ${num1} and num2 ${num2} is ${20-10}`)
// console.log(`the subraction of num1 ${num1} and num2 ${num2} is ${${num2}-${num1}}`)

var a = "mani"
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.indexOf("i"))
console.log(a.indexOf("f"))
console.log(a.lastIndexOf("n"))
console.log(a.charAt(0))
console.log()
