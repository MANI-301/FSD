//  !                             JSON

// Json(Javascript object Notation) is a lightweight data-interchange format 
// That is easy for humans to read and write, and easy for machines to press and generate 


// ! Advantages of JSON !!

// ? Human - Readable:

// JSON's Structure is easy for developers to understand and write.

// ? LightWeight

// JSON is a minimal format that reduces the size of the data being transmitted 

// ? Language-Independent:

// JSON can be used with many Programming language.
// Inclues Javascript,Python,Ruby,Java  etc....


let obj = {
    name:"mani",
    age: 22,
    phone:9361432677
}

console.log(obj)

// ! 1.JSON.stringfy()

//It is used to convert any js object into json the type of json will be String.

let jsonData = JSON.stringify(obj)
console.log(jsonData)

// !  2.JSON.parse()

// It is used to convert any Json into js Object

let newObj = JSON.parse(jsonData)
console.log(newObj)