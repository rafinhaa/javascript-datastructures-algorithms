var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = "Packt"; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6} - Um valor null quer dizer sem valor
var und; // {7} - Undefined significa uma variável que foi declarada, mas que ainda não recebeu nenhum valor

console.log("num", num);
console.log("price", price);
console.log("myName", myName);
console.log("trueValue", trueValue);
console.log("nullVar", nullVar);
console.log("und", und);

// Variable Scope

var myVariable = "global";
myOtherVariable = "global";

function myFunction() {
  var myVariable = "local";
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = "local";
  return myOtherVariable;
}

console.log("myVariable", myVariable); // exibirá global porque estamos referenciando uma variável global.
console.log(myFunction()); // exibirá local porque declaramos a variável myVariable dentro da função myFunction como uma variável local, portanto o escopo está apenas no interior de myFunction.
console.log("myOtherVariable", myOtherVariable); //  exibirá global porque estamos referenciando a variável global chamada myOtherVariable, inicializada na segunda linha do exemplo.
console.log(myOtherFunction()); //  exibirá local. Na função myOtherFunction, referenciamos a variável global myOtherVariable e lhe atribuímos o valor local, pois não declaramos a variável usando a palavra reservada var.
console.log("myOtherVariable", myOtherVariable); //  exibirá local (pois alteramos o valor da variável em myOtherFunction)
