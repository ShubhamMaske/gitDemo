// ------------------ Promise All ----------------------

// create one more promise called updateLastUserActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user.


const posts =[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'Thos is post two',createdAt:new Date().getTime()}
];

function getPosts(){
     setTimeout(() => {
            let output='';
            posts.forEach((post,index) => {
                output+=`<li>${post.title} - created ${Math.floor((new Date().getTime() - post.createdAt) / 1000)} second ago</li>`;
            });
            document.body.innerHTML = output;  
        },1000);

          
}

function creatPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Before creating new post , user lastActivityTime is ',new Date());
            posts.push({...post,createdAt: new Date().getTime()});
            console.log('new user creating >>>>')
            console.log(posts);
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });

}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let createdAt = new Date().getTime();
            resolve(createdAt);
        },1000)
        
    })
}


Promise.all([creatPost({title:'Post Three',body:'This is post Three'}),updateLastUserActivityTime]).then(() =>{
    getPosts();
    console.log('User last Activity time ',new Date().getTime());
}).catch(()=>{console.log('Something went wrong')})