//for ( let a = 0 ; a <= 10 ; a += 2 )

//let a = 0;
for ( let a = 0; a <= 10 ; a++ )
{
    // console.log(a);
    console.log(a);
}

// -------------------------------

for ( let a = 10 ; a >= 0 ; a-- )
{
    console.log(a);
}



const my_array = ["Apple", "Pear", "Orange", "Banana"]; // Average length of words.

console.log(my_array[1][1]);

// Display all members of the array.

let total_length = 0;

for (let i = 0; i < my_array.length; i++)
{
    console.log(my_array[i]);
    total_length += my_array[i].length;
}

console.log("Average = " + (total_length / my_array.length))


