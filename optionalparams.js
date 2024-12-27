function greet(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, "! ").concat(name));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
// ASI ==> Automatic Semicolon insertion
greet('nithya'); // not passing greeting; 
greet('nithya', 'Hey'); // go to if
