// promises 

const fetchUserData = () =>{
   return new Promise ((resolve, reject) => {
    setTimeout(() =>{
        const success = false

        if(success){
            resolve({name : "Abdiwadud", city : "London"})
        }else{
            reject("Failed to get user information")
        }
    },2000)
   })
}

fetchUserData()
.then((data) => console.log("User info : ", data))
.catch((err) => console.log(err))