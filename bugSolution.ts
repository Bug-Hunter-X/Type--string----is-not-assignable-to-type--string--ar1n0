function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user[0])); // Corrected: Accessing the first element of the array

//Alternative solution: Modify the function to handle arrays
function greeterArray(people: string[]): string {
    return "Hello, " + people.join(', ');
}
console.log(greeterArray(user));