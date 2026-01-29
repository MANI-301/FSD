let form2 = document.getElementById("f2")

console.log(form2)

form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("click")
    let num1 = parseInt( document.getElementById("n1").value)
    let  num2 = parseInt(document.getElementById("n2").value)
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    let adding = document.querySelector(".adding")
    adding.innerHTML  

    console.log(num1+num2)
    console.log("Submitted")
})

