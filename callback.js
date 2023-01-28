const posts =[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'Thos is post two',createdAt:new Date().getTime()}
];

let intervalId = 0;
function getPosts(){
    clearInterval(intervalId);
    
        intervalId = setInterval(() => {
            let output='';
            posts.forEach((post,index) => {
                output+=`<li>${post.title} - created ${Math.floor((new Date().getTime() - post.createdAt) / 1000)} second ago</li>`;
            });
            document.body.innerHTML = output;  
        },1000)
        
  
}

function creatPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    },3000);
}

function creat4thPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    },1000);
}

creatPost({title:'Post Three',body:'This is post Three'},getPosts)

creat4thPost({title:'Post Four',body:'This is post Four'},getPosts)
