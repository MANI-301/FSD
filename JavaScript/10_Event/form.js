let form = document.getElementById("f1")

console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("click")
    let name = document.getElementById("username").value  // Whenever we want value of input tag use .value don't use innerhtml
    let pass = document.getElementById("pass").value
    document.getElementById("username").value = ""
    document.getElementById("pass").value = ""

    console.log(name,pass)

    console.log("Submitted")
})