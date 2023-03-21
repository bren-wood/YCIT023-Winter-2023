const _MS_PER_DAY = 1000 * 60 * 60 * 24;

let a = new Date(2023, 00, 01);
let b = new Date(2023, 02, 20);

// Discard the time and time-zone information.
const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
let diff = Math.floor((utc2 - utc1) / _MS_PER_DAY)
