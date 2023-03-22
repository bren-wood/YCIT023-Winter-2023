let sum = 0;

const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);

function myFunction(item) {
    sum += item;
}

console.log(sum);

for (let x of numbers) {
    myFunction(x);
}

a = {};
b = [];
c = {};
d = () => { console.log("Sup")};

console.log(typeof d);