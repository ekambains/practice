function randomLowerChar() {
    return Math.floor(Math.random() * (122 - 97) + 97);
}
function randomUpperChar() {
    return Math.floor(Math.random() * (122 - 97) + 97);
}
function randomNumberChar() {
    return Math.floor(Math.random() * 9 + 48);
}
function randomPass() {
    var str = "";
    for (var i = 0; i < 10; i++) {
        var rand = Math.floor(Math.random() * 3);
        if (rand == 0) {
            str += String.fromCharCode(randomLowerChar());
        }
        else if (rand == 1) {
            str += String.fromCharCode(randomUpperChar());
        }
        else {
            str += String.fromCharCode(randomNumberChar());
        }
    }
    return str;
}
console.log(randomPass());
