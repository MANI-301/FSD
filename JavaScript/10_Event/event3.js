let inner = document.querySelector(".inner")
let middle = document.querySelector(".middle")
let outer = document.querySelector(".outer")

inner.addEventListener("click",(e)=>{
     e.stopPropagation
    console.log("inner box is Clicked");
    
})

middle.addEventListener("click",()=>{
    console.log("Middle box is Clicked");
    
})




