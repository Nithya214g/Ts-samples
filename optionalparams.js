function greet1(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, "! ").concat(name));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
// ASI ==> Automatic Semicolon insertion
greet1('nithya'); // not passing greeting; 
greet1('nithya', 'Hey'); // go to if
