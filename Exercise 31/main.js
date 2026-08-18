async function fetchingUserData() {
  try {
    console.log("Fetching Data is started...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error (`Fetching Error status : ${response.status}` )
    }

    const data = await response.json()
    console.log("Response Users :" ,data)
  } catch (error) {
    console.log("Error Fetching users : ", error)
  }
}

fetchingUserData()