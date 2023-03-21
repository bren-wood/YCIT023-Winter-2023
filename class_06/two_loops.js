input_array = [5, 4, 2, 7, 9, 3];

let sum = 0;


// see:  For-in  For-of

// 0 1 2 3 4 5
for (let n in input_array)
{
    sum += input_array[n];
    console.log(input_array[n]);
}

console.log(sum);

console.log("----------------------");

let sum2 = 0;

// 5 4 2 7 9 3
for (let x of input_array)
{
    if (x == 7)
        continue;

    sum2 += x;
    console.log(x);
}

console.log(sum2);
console.log("---------------------------");

