const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);

// expected output: Array [2, 8, 18, 32]




array2 = ["2", "3", "4"]

//const map2 = array2.map(x =>Number(x));
//const map2 = array2.map(x =>parseInt(x));

const convertIntVal = (val) => {
    console.log("HI, " + val); 
    return parseInt(val, 10);
}

const map2 = array2.map(convertIntVal);

console.log(map2);

// [2,3,4]

const arr3 = ["Two", "11"];

const arra2_con = arr3.map((item) => +item);
console.log(arra2_con);