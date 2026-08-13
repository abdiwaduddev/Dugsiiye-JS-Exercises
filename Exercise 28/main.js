
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ name: "Abdiwadud", city: "London" });
      } else {
        reject("Failed to get user information");
      }
    }, 3000);
  });
};

const fetchData = async () => {
  try {
    const user = await fetchUserData();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
