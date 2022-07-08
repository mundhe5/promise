let cl=console.log;

let info=document.getElementById("info");

let blogs =[
    { title:'Blog one' , info:'this is blog one on javascript' },
    { title:'Blog two' , info:'this is blog two on javascript' }
]




function fetchblog(){

    setTimeout(() =>{
            let result=`<ul class="list-group">;`

            blogs.forEach(blog =>{
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
        setTimeout(() =>{
                blogs.push(blog)
        },2000)
}

creatblogs({title:'blog three', info:'this is blog three on javascript'})
