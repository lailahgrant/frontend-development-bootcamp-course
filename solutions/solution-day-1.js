//Sunday 10th September 2023

/**
 * Challenge #1
 */
const myBoolean = true;

const myString = 'hello world';

const firstNumber = 20;

let secondNumber = 40;
secondNumber = 80;

let myArray = [myBoolean, myString];

let myObject = {
    firstProperty: myArray,
    sumProperty : firstNumber+secondNumber
}

console.log(myObject);

console.log(myObject.sumProperty);;

console.log(myObject.firstProperty[1]);

/**
 * Challenge #2
 */

//const some Number = 20; someNumber=50;
// - const can't be re-assigned. - Variable name is wrong. - variable name assigned to 50 is not declared. 


/**
 * Challenge #3
 */

const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + variable2;

console.log(resultVariable);
//2040

typeof (resultVariable);
//"string"


/**
 * Challenge #4
 */

//objects are not terminated with semi-colons (;)
const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20,30,40]
}

console.log(objectVariable.property3[2]);


/**
 * Challenge #5
 */

const myArray1 = [20, 30, 40];

console.log(myArray1[3]); //index 3 doesn't exist.

console.log(myArray1[1]); //use an index that exists










