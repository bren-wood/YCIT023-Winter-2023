
function mask_ccnum(cc_num)
{
    //let cc_num = "4560 1234 2345 3456";
    let last4 = cc_num.slice(-4);
    let padded = last4.padStart(cc_num.length, '*');
    return padded;
}


let credit_card_number = '1234 1234 1234 2233';

console.log(mask_ccnum(credit_card_number));




// let val = 'A'
// let newval = val.padStart(10, "X")
// console.log(newval)