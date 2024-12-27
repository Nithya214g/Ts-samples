function greet(name:string, greeting?: string): void {

    if (greeting) {
      console.log(`${greeting}! ${name}`);
    }
    else {
      console.log(`Hello ${name}`);
    }
  }

  // ASI ==> Automatic Semicolon insertion

  greet('nithya');  // not passing greeting; 
  greet('nithya', 'Hey'); // go to if
  