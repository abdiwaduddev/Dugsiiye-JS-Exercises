const FetchingData = async () => {
  console.log("Fetching Data is Started...");
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  console.log("The Fetching Data: ", data);
};

FetchingData()