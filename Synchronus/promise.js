// Promise
const promise = new Promise ((resolve,reject) =>
    {
    setTimeout(()=>{
        resolve("Found data");
    },2000);
     setTimeout(()=>{
        reject("Not Found data");
    },1000);
});

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
