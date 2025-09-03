const accountId = 144553
let accountEmail = "shivam@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 3245 *not allowed*

accountEmail = "were@gmail.com"
accountPassword = "7890"
accountCity = "delhi"

let accountState;

/*
never use var
becauseof block scope and functional scope...
*/
console.table([accountEmail,accountId,accountPassword,accountState]);
