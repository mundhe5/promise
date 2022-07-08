let cl=console.log;


// const posts=[
//     {
//         title:"Angular",
//         id:1,
//         autherid:1
//     },
//     {
//         title:"JavaScript",
//         id:2,
//         autherid:2
//     },
//     {
//         title:"HTML",
//         id:3,
//         autherid:3
//     },
//     {
//         title:"CSS",
//         id:4,
//         autherid:4
//     },
//     {
//         title:"HTML5",
//         id:5,
//         autherid:5
//     },
//     {
//         title:"Express",
//         id:6,
//         autherid:6
//     },
//     {
//         title:"React",
//         id:7,
//         autherid:7
//     }

// ];




// // 1=============================================================

// function getpost(postid){
//         return new Promise((resolve, reject)=>{
//             setTimeout(() =>{
//                 let post =posts.filter((p) =>{
//                     return p.id===postid;
//                 })

//                 if(post.length>0){
//                     resolve(post);

//                 }else{
//                     reject(Error('there is no such post exist'))
//                 }
//                 // resolve(post);
//             },1000)
            
//         })
// }
// getpost(55)
//         .then((res) =>{
//                cl(res)
//             })
//             .catch((err)=>{
//                 cl(err)
//             })

// // //  2================================================================



// function getposts(autherid){
//     return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 let p = posts.filter((a) =>{
//                     return a.id ===autherid;
//                 })
//                 if(p.length >0){
//                     resolve(p);
//                 }else{
//                     reject(Error('this is no such post exist'))
//                 }
//             },2000)
//     })
// }

// getposts(7)
//             .then((res) =>{
//                 cl(res)
//             })

//             .catch((err)=>{
//                     cl(err)
//             })



// // 3=====================================================

// function getpos(id){
//     return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 let pp = posts.filter((aut) =>{
//                     return aut.id ===id;
//                 })
//                 if(pp.length >0){
//                     resolve(pp);
//                 }else{
//                     reject(Error('this is no such post exist'))
//                 }
//             },2000)
//     })
// }

// getpos(2)
//             .then((res) =>{
//                 cl(res)
//             })

//             .catch((err)=>{
//                     cl(err)
//             })


// // 4=====================================================

// function getpos1(pid){
//     return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 let pos = posts.filter((autid) =>{
//                     return autid.id ===pid;
//                 })
//                 if(pos.length >0){
//                     resolve(pos);
//                 }else{
//                     reject(Error('this is no such post exist'))
//                 }
//             },2000)
//     })
// }

// getpos1(55)
//             .then((res) =>{
//                 cl(res)
//             })

//             .catch((err)=>{
//                     cl(err)
//             })





// // 5=====================================================

// function getpos2(pid){
//     return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 let pos = posts.filter((autid) =>{
//                     return autid.id ===pid;
//                 })
//                 if(pos.length >0){
//                     resolve(pos);
//                 }else{
//                     reject(Error('this is no such post exist'))
//                 }
//             },2000)
//     })
// }

// getpos2(4)
//             .then((res) =>{
//                 cl(res)
//             })

//             .catch((err)=>{
//                     cl(err)
//             })


// // match author id and post id


// let authors=[
//     {name:"komal" ,id:1 },
//     {name:"varsha" ,id:2 },
//     {name:"priya" ,id:3 },
//     {name:"pallavi" ,id:4 },
//     {name:"payal" ,id:5 },
//     {name:"pramod" ,id:6 },
//     {name:"pradip" ,id:7 }

// ]




// // 1====================================================

// function getautherid(post){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//             let auther=authors.filter((auth)=>{
//                 return post.autherid === auth.id;
//             })
//             if(auther.length > 0){
//                 resolve(auther)
//             }else{
//                 reject(Error(`there is no such auther exists`));
//             }
//         },2000)
//     })
// }


// getautherid(posts[7])
//                 .then(res=>{
//                     cl(res)
//                 })
//                 .catch(err=>{
//                     cl(err)
//                 })








// getdeveloper(developerProfile) >> (Angular)
// call >> Nukari.com >> if candidate says I have exp in angular >> HR call success

// if HR call success >> next step >> Interview

// I have exp react >>  if HR call failed >> msg >> find another FED with Angular  


// setInterview() >> teamlead call success >> candidate will be get Hired

// teamlead call failed >> HR msg >> Find another Angular developer asap


function  getdeveloper(devloperprofile){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            if(devloperprofile==="angular"){
                resolve(devloperprofile)
            }else{
                reject(Error(`profile not match`));
            }
        }, 1000)
    })
}

getdeveloper("angular")
            .then(cl)
            .catch(cl)



function setInterview(getdeveloper){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(getdeveloper=== ""){
                resolve()
            }else{
                reject(Error(`find another FED as soon as possibel`))
            }
        }, 2000);
    })
}
setInterview(getdeveloper)
            .then(cl)
            .catch(cl)





