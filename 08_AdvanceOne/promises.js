const promisesOne = new  Promise(function (resolve,reject) {
    //Do an asyn task
    //DB calls,cryptography,network
    setTimeout(function () {
        console.log('Asyn task is complete');
        resolve()
    },1000)
})

promisesOne.then(function () {
    console.log('promise consumed');
    
})


new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log('Asyn is complete2');
        resolve()
    },1000)
    
}).then(function () {
    console.log('Asyn 2 resovle');
     
})

const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log('promiseThree is completed');
        
        resolve({username:'Aditya',Email:'adityaraj171102@gmail.com'})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
    
})

const promisefour = new Promise(function (resolve,reject) {
   setTimeout(function () {
    let error = false
    if (!error) {
        resolve({username:'Adityaraj',Email:"adityaraj@gmail.com"})
    } else {
        reject('error something went to be wrong')
    }
   },1000)
})
promisefour.then(function (user) {
    console.log(user);
   return user.username
}).then((username)=>{
    console.log(username);  
}).catch(function (error) {
    console.log(error);
    
}).finally(()=>{console.log('The promises is either resolve or reject');
})

const promisefive = new Promise(function (resolve,reject) {
     setTimeout(function () {
    let error = true
    if (!error) {
        resolve({username:'JavaScript',Password:"123"})
    } else {
        reject('error js went wrong')
    }
   },1000)
})
async function consumepromisefive() {
    try {
      const response = await promisefive
      console.log(response);
        
    } catch (error) {
        console.log('error');
        
    }
}
consumepromisefive()


async function getAlluser() {
    try {
     const response =await fetch('https://api.github.com/users/Aditya333333')  
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
       console.log("E :",error);
        
    }
}
getAlluser()