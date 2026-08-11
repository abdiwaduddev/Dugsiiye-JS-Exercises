// Blocking

const Blocking = () => {
  alert("Alert Blocking");
  return "The Blocking system Completed";
};

console.log("Start blocking delay...");
console.log(Blocking());
console.log("This message is blocked until the delay is complete.");

console.log("--------")

// Non-Blocking

function NonBlocking(callback) {
  setTimeout(() => {
    const userinfo = {name : "Abdiwadud", city: "Somalia", age: 24}
    callback(userinfo);
  }, 5000);
}

NonBlocking((user) => {
    console.log(user);
});
console.log("Start non-blocking delay");
console.log("This message is not blocked and runs immediately.");