// ! How to target elements

// 1.target by  the id

let logo = document.getElementById("logo")

console.log(logo);

// 2.Target by the class --> It gives array like html collection 

let boxes = document.getElementsByClassName("card")

console.log(boxes);

let secondBox = boxes[1]
console.log(secondBox)

// 3.Target by the Tag Name 

let listes = document.getElementsByTagName("li")
let contact = listes[2]
console.log(contact)

// If your we need to give index otherwise it gives html collection only

let login = document.getElementsByClassName("login")

console.log(login[0]);


// 4.document.querySelector()

   let logo2 = document.getElementById("#logo")
   console.log(logo2)

   let b = document.querySelector(".box")

console.log(b)

let li2 = document.querySelector("li")
console.log(li2);

// 5.document.querySelectorAll()
      
let tar = document.querySelectorAll(".box")
console.log(tar)


// ! innertext and innerhtml

console.log(c3.innerText)
console.log(c3.innerHtml)




// ! How to Style

let loginbtn = document.getElementsByClassName("b")

console.log(loginbtn);

loginbtn[0].style.backgroundColor = "blue"
loginbtn[0].style.color = "white"


// ! How to add / remove the class 

let section = document.querySelector(".section")

console.log(section)

section.classList.add("con2")

console.log(section.classList);

// section.classList.remove("con2")

// ! How to create element

let button1 = document.createElement("button")

button1.innertext = "Button using JS"

button1.style.backgroundColor = "red"
button1.style.color = "white"

// console.log(button1)
// section.after(button1)
// section.before(button1)
// section.append(button1)
section.prepend(button1)

let footer = document.createElement("div")

footer.classList.add("footer")

footer.innerHTML = "<p>footer form js</p>"

footer.classList.add("footer")
footer.innerHTML = "<h1>Iam from the Js footer</h1>"

section.after(footer)