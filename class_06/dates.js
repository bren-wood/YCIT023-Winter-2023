let d1 = new Date();

let ms1 = d1.getTime();

console.log(d1);
console.log(ms1);

let d2 = new Date(1679352789751);
console.log(d2);

months = ["jan"]

let d3 = new Date(2023, 02, 20);

console.log(d3);

let d4 = new Date(1671351789751);
console.log(d4);



let start_dt = new Date(2023, 00, 01);
let end_dt = new Date(2023, 02, 20);

function get_days(sd, ed)
{
    let dt_diff = Math.abs(sd - ed);
    let diff_days = Math.ceil(dt_diff / (1000 * 60 * 60 * 24))
    return diff_days;
}

let dt_diff = Math.abs(end_dt - start_dt);
let diff_days = Math.ceil(dt_diff / (1000 * 60 * 60 * 24))

console.log(diff_days)