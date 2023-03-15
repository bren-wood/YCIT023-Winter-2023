let x = 22;

{
    let x = 42;

    console.log(x);
    {
        let x = 4;
    }
    console.log(x);
}

console.log(x);
