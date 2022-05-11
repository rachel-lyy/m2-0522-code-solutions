function ExampleConstructor(age) {
  this.age = age;
}
console.log('value of ExampleConstructor: ', ExampleConstructor);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor);

var newAge = new ExampleConstructor(23);
console.log('value of ExampleConstructor.newAge:', newAge);

var instance = ExampleConstructor instanceof Object;
console.log('intanceof Object: ', instance);
