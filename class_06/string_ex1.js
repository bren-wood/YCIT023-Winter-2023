// Name:   JOhn Doe

let fullName = "Brendan Doe"; // First and last names.

let first = fullName.slice(0, fullName.indexOf(" ")); // First name goes here, automatically. (replace null with code.)
let last = fullName.slice(fullName.indexOf(" ") + 1); // Last name goes here, automatically.

console.log(first);
console.log(last);

let fullName2 = "John Doe";
let nameSp = fullName2.split(" ");

console.log(nameSp);

let first1 = nameSp[0];
let last1 = nameSp[1];

console.log(first1);
console.log(last1);

a = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(a[1][2])

b = [
    {'id': 1, 'fname': "Brendan", 'lname': "Wood",},
    {'id': 2, 'fname': "Brendan", 'lname': "Wood"},
    {'id': 3, 'fname': "Joe", 'lname': "Wood"},
    {'id': 4, 'fname': "Brendan", 'lname': "Wood"},
]

console.log(b[2]["fname"])


