// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var name1:string="uzma imran"

// uppercase
console.log(name1.toUpperCase());

// lowercase
console.log(name1.toLowerCase());

// titlecase
console.log(name1.charAt(0).toUpperCase() + name1.slice(1));