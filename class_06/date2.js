let date1 = new Date(2022, 01, 01);
let date2 = new Date(2023, 09, 06)

let monthdiff = date1.getMonth() - date2.getMonth();

console.log(monthdiff);

let yeardiff = date1.getFullYear() - date2.getFullYear();

console.log(yeardiff);

let result = monthdiff + yeardiff * 12;

console.log(result);