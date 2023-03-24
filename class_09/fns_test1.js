const {format} = require('date-fns');

console.log(format(new Date(), 'dd.MM.yyyy'));

console.log(format(new Date(), 'yyyy-MM-dd'));

console.log(`Today's date: ${format(new Date(), 'MMMM.do.')}`);



