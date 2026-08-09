const people = [
  { name: "Alice", age: 30, city: "Boston" },
  { name: "Joe", age: 34, city: "London" },
  { name: "Andy", age: 20, city: "Moscow" },
];

for (const person of people) {
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  console.log("---");
}
