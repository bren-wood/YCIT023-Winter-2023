function addNums(n1, n2 = 0, n3 = 0) {
  if ((n1 == undefined) | (n2 == undefined) | (n3 == undefined)) {
    throw new Error("Must supply all parameters.");
  }

  console.log("Reached here 2");
  return n1 + n2 + n3;
}

try {
  console.log(addNums());
  //console.log(addNums(1, 2));
  //console.log(addNums(1, 2, 3));
} catch (e) {
  
  //console.log("Please rerun with 3 parameters.")
  
  console.error(e);
}
