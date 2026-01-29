let getdata = async (city)=>{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid = 92ebbe9a1f4825203dd9d7870b3b94e3`)
     
    let data = await res.json()

    data.innerhtml = document.querySelector("input")

}

getdata(chennai)