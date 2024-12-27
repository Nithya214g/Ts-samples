function greet1(name:string, greeting?: string): void {

    if (greeting) {
      console.log(`${greeting}! ${name}`);
    }
    else {
      console.log(`Hello ${name}`);
    }
  }

  // ASI ==> Automatic Semicolon insertion

  greet1('nithya');  // not passing greeting; 
  greet1('nithya', 'Hey'); // go to if
  