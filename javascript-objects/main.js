var student = {
  firstName: 'Daniel',
  lastName: 'Pham',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of student.fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Surf Instructor';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Subaru',
  model: 'Crosstrek',
  year: 2020
};

vehicle['color'] = 'Metallic Gray';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Zo',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
