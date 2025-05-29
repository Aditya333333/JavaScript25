const accountId = 1 //const can't change variables
let accountEmail = "adityaraja171102@gmail.com"
var  accountPassword = "3458"
accountCity = "jaipur"
let accountState;

// change the variables//

//accountId = 4 // not allowed
 accountEmail ="adityaraj170802@gmail.com"
 accountPassword = "34566"
 
 accountCity = "bihar"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity]);
