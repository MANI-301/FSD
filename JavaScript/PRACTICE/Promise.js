const data = new Promise((resolve,reject)=>{
    let api = true;
    if(api){
        resolve(201);
    }
    else {
        reject(404);
    }
})

data.then((success)=>{
    console.log(`${success} Successfully Data Received`)
}).catch((fail)=>{
    console.log(` ${fail} Data Rejected`)
})

// function success(){
//     console.log("Data Received");
// }

// function fail(){
//     console.log("Data Rejected"); 
// }

function data1(){
    return new Promise((resolve,reject)=>{
    let api = false;
    if(api){
        resolve(201);
    }
    else {
        reject(404);
    }
})}

data1().then((status)=>{
    console.log(status)
}).catch((status)=>{
    console.log(status)
})