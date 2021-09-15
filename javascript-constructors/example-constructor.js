function ExampleConstructor() {}
console.log('Value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof of ExampleConstructor:', typeof ExampleConstructor);

var example = new ExampleConstructor();
console.log('Example variable:', example);
console.log('example instanceof ExampleConstructor:', example instanceof ExampleConstructor);
