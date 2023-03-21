let a = "BrendanBrendan";
let found = a.charAt(10);
let found2 = a[10];
console.log("1");
console.log(found);
console.log("2");
console.log(found2);


console.log(a.indexOf("xyz"));


console.log(a.startsWith("Bren"));

let searchResult = a.indexOf("rex");

if (searchResult >= 0)
{
    console.log("Found!");
}
else
{
    console.log("Error, search term not found.")
}
