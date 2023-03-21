import { differenceInMonths } from 'date-fns';

const date1 = new Date('2022-08-10');
const date2 = new Date('2020-02-24');

const difference = differenceInMonths(date1, date2);

console.log(difference); // 29