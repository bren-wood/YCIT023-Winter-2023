//"MADAM"

let p = "RACECARX"
let p2 = "MADAM"

function isPalindrome(word)
{
    //return word == word.reverse();

    const myarray = word.split("");
    //const reversed = word.split("").reverse();

    const reversed = myarray.reverse();

    return myarray.toString() == reversed.toString();
}

console.log(isPalindrome(p));
