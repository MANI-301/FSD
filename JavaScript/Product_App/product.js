let main = document.querySelector("main")

let getdata = async()=>{
    try{
        let res = await fetch("https://fakestoreapi.com/products")
         console.log(res)
        let data = await res.json()
        console.log(data)

        data.map((ele)=>{
            let div = document.createElement("div")
            div.classList.add("card")
            main.append(div)

            //  console.log(ele)
            div.innerHTML = 
                             ` <img src= ${ele.image}>
                             <h3>Product name : ${ele.title.slice(0,20)} </h3>
                             <h3>price is : ${ele.price}</h3>
                             <h3>rating is : ${ele.rating.rate}</h3> `
         })
    }
    catch(err){
        console.log(err)  
    }
}

getdata()