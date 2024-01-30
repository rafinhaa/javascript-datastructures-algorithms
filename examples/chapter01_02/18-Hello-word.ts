let myName = "Packt";
// myName = 10;

// let age: number = 20;
// let existsFlag: boolean = true;
// let language: string = "JavaScript";

let age = 20; // number
let existsFlag = true; // boolean
let language = "JavaScript"; // string

let favoriteLanguage: string;
let langs = ["JavaScript", "Ruby", "Python"];
favoriteLanguage = langs[0];

interface Person {
  name: string;
  age: number;
}
function printName(person: Person) {
  console.log(person.name);
}

const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "123-45678" }; // duck typing
printName(john);
printName(mary);

interface Comparable {
  compareTo(b): number;
}
class MyObject implements Comparable {
  age: number;
  compareTo(b): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

interface ComparableAnother<T> {
  compareTo(b: T): number;
}

class MyObjectAnother implements ComparableAnother<MyObject> {
  age: number;
  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

const obj2 = new MyObject();
obj2.age = 20;
obj2.compareTo({ age: 20 });

const obj = new MyObjectAnother();
obj.age = 10;

const result = obj.compareTo(obj2);
console.log(result);
