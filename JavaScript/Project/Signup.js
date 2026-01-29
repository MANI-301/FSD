let form = document.querySelector("form")

console.log(form)

form.addEventListener("submit",(e)=>{
     e.preventDefault()

     let username = document.getElementById("un").value
     let userpass = document.getElementById("ps").value

     console.log(username,userpass);

     
     localStorage.setItem("us",username)
     localStorage.setItem("ps",userpass)

     
     alert("signup done")
     open("./Login.html")

})