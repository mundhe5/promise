let cl=console.log;


let promise1 = new Promise((resolve, reject) =>{


    let error=true;

    if(!error){
        resolve("data is  load !!!");

    }else{
        reject("something went wrong");
    }
});


promise1  
        .then((res) =>{[
            cl(res)
        ]})


        .catch((err)=>{
            cl(err)
        })



// 1====================================================

let info=document.getElementById("info");

let blogs =[
    { title:'Blog one' , info:'this is blog one on javascript' },
    { title:'Blog two' , info:'this is blog two on javascript' }
]




function fetchblog(){

    setTimeout((arr) =>{
            let result=`<ul class="list-group">;`

            arr.forEach(blog =>{
                result +=`
                        <li class="list-group-item">
                        <h4>${blog.title}</h4>
                        <p>${blog.title}</p> 
                        </li>`

            }) 
            info.innerHTML=result;
    },1000)
}



function creatblogs (blog){

return   new  Promise((resolve,reject) =>{
    setTimeout(() =>{
        blogs.push(blog)

        let error=true;

        if(!error){
            resolve(blogs);
        }else{
            reject("somthing went wrong")
        }
},2000)
})
      
}

creatblogs({title:'blog three', info:'this is blog three on javascript'})


                                                                .then((res) =>{
                                                                    fetchblog(res);
                                                                })
                                                                .catch((err) =>{
                                                                    cl(err)
                                                                })
