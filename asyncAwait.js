// *************** async and await ************************* // 


// console.log('person1: Shows ticket');
// console.log('person2: Shows ticket');

// const preMovie = async () => {
//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000)
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

//     const addButter = new Promise((resolve, reject) => resolve('butter'));

//     const coldDrinks = new Promise((resolve, reject) => resolve('ColdDrinks'));

//     let ticket = await promiseWifeBringingTicks;

//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we sould go in');
//     console.log('wife: no i am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we sould go in');
//     console.log('wife: no i need butter on my popcorn');

//     let butter = await addButter;

//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log('husband: Anything else');
//     console.log('wife: I want cold drinks also');

//     let drinks = await coldDrinks;

//     console.log(`husband: i got  ${drinks} so can we go now`);
//     console.log('wife: lets go we are getting late');


//     return ticket;
// };

// preMovie().then((m) => console.log(`person shows ${m}`));

// console.log('person4: Shows ticket')
// console.log('person5: Shows ticket')

// ------------------------------------------------------ //
// ------------------------------------------------------ //
// ------------------------------------------------------ //




const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'Thos is post two', createdAt: new Date().getTime() }
];


const asyncPost = async () => {

    function creatPost(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push({ ...post, createdAt: new Date().getTime() });
                
                const error = false;

                if (!error) {
                    resolve('post is created');
                } else {
                    reject('Error: Something went wrong');
                }
            }, 2000);
        });

    }



    function getPosts() {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title} - created ${Math.floor((new Date().getTime() - post.createdAt) / 1000)} second ago</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    
    
    }

    function updateLastUserActivityTime() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let createdAt = new Date().getTime();
                resolve(createdAt);
            }, 1000)

        })
    }

    
    let createP = await creatPost({ title: 'Post Three', body: 'This is post Three' });
    console.log(`after await  ${createP}`)

}

