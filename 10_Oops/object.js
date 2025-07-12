function mutiby5(num) {

    return num*5
    
}
mutiby5.power = 2

console.log(mutiby5(5));

console.log(mutiby5.power);
console.log(mutiby5.prototype);

function user(username,score) {
    this.username = username,
    this.score = score
}

user.prototype.increment = function () {
    this.score++
}
user.prototype.printMe = function () {
    console.log(`Price is a ${this.score}`);
    
}
const chai = new user('chai',20);
const tea = user('tea',250);

chai.printMe()

