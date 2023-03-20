function p(val)
{
    console.log(val);
}

function main()
{
    let a = "The quick brown" 

    p(a.slice(4, 9))

    p(a.substr(4, 5))
}

main()