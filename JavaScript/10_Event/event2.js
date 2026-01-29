
let dispaly=()=>{
       alert("Event Handler")
}

let btn2 = document.querySelector(".btn2")
console.log(btn2);

btn2.addEventListener("click",()=>{
    alert("Even lisener")
})

let cards = document.getElementsByClassName("card")

console.log(cards);

cards[1] = addEventListener("click",()=>{
    console.log("target card2")
    let a = cards[0].innerHTML
    cards[1].innerHTML = a
    // cards[1].innerHTML = cards[0].innerHTML
    cards[0].innerHTML = " "
})

cards[0] = addEventListener("click",()=>{
    console.log("target card2")
    let a = cards[1].innerHTML
    cards[0].innerHTML = a
    // cards[1].innerHTML = cards[0].innerHTML
    cards[1].innerHTML = " "
})

