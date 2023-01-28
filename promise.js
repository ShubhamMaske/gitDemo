//  -------------- Promise ------------------
// html page is - callback.html
// create posts after creating posts delete all post one by one and also displaying on screen


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
            posts.push({...post,createdAt: new Date().getTime()});

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });

}

function deletePosts(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          
            if(posts.length > 0){
                resolve(posts.pop());
            }else{
                reject('Array is empty now');
            }
        },2000);
    });
}

creatPost({title:'Post Three',body:'This is post Three'})
    .then(() => {
        getPosts();
        deletePosts().then(() => {
            getPosts();
            deletePosts().then(() => {
                getPosts();
                deletePosts().then(() => {
                    getPosts();
                    deletePosts().then(() => {
                        getPosts();
                        deletePosts().then(() => {}).catch((err) => console.log(err));
                    }).catch(err => console.log(err));
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));




    // ------------------ Promise.all -----------------------

//    const promise1 = Promise.resolve('Hello World');
//    const promise2 = 10;
//    const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'Goodbye'));

//    Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

