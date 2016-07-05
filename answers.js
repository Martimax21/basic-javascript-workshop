// Maxime Martin answers - July 5th 2016

//Exercice #1
//Write a function that takes a string and 
//returns the first character of the string

function firstCharacter (string){
    return string[0];
}
//console.log(firstCharacter("Maxime"));
//console.log(firstCharacter(""));

//Exercice #2
//Write a function that takes a string and 
//returns the last character of the string

function lastCharacter (string){
    return string[string.length-1];
}

//console.log(lastCharacter("Maxime"));
//console.log(lastCharacter("k"));

//Exercice #3
//Write a function that takes a string and 
//a number, and returns the character at the 
//position represented by the number. The 
//indexing of number should start at 0.

function stringCharacter(string,position) {
    return string[position];
}
// console.log(stringCharacter("Maxime",3));
// console.log(stringCharacter("",0));

//Exercice #4
//Write a function that takes two numbers and 
//adds them together. 

function addition(num1,num2) {
    return num1 + num2;
}
// console.log(addition(4,3));
// console.log(addition("jk",3));

//If you pass a string, the function is going to return stringnum1

//Exercice #5
//Write a function that takes two numbers
//and multiplies them together.

function multiple(num1,num2) {
    return num1 * num2;
}
//console.log(multiple(4,3));
//console.log(multiple("jk",3));

//If you pass a string to the parameters, it will return "NaN"

//Exercice #6
//Write a function that takes two numbers and 
//a string. If the string is ‘add’, then return 
//the sum of the numbers. If the string is 
//‘subtract’, return the difference. If the 
//string is ‘mult’, return the product. If the 
//string is ‘div’, return the ratio. Otherwise
//return 0

function operationTwoNumbers(num1,num2,operator) {
    switch (operator)
    {
        case 'add' : 
            return num1+num2;
        case 'subtract' :
            return num1-num2;
        case 'mult' :
            return num1*num2;
        case 'div' :
            return num1/num2;
        default: return 0;
    }
}
console.log(operationTwoNumbers(2,4,"add"));