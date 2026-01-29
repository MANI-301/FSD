let form = document.querySelector("form")

console.log(form)

form.addEventListener("submit",(e)=>{
     e.preventDefault()

     let name = document.getElementById("n").value
     let pass = document.getElementById("p").value

     console.log(name,pass);

     
     let name2 = localStorage.getItem("name")
     let pass2 = localStorage.getItem("pass")

     console.log(name2,pass2);

     if(name === name2 && pass === pass2 ){
        alert("Login Sucessfull")
        open("./Home.html")
     }
     else{     
     alert("Login done")
}
})