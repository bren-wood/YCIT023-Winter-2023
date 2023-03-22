const arr = [1, 2, 3];

arr.push(4);
arr.push(5);

console.log(arr);

let x = arr.pop();

console.log("The value taken out was " + x);

console.log(arr);

// Push / Pop / Shift / Unshift

arr.unshift("A");

let myval = arr.shift()
console.log(arr);




a = [1,2,3];    b = [3,4];

b.push(a[0]);
a.shift();


console.log(a);
console.log(b);

