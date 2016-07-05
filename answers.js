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
//adds them together. Test your function on a 
//few inputs. Write in the comments what happens
//when you pass something other than a number to 
//your function

function addition(num1,num2) {
    return num1 + num2;
}
console.log(addition(4,3));
console.log(addition("jk",3));
