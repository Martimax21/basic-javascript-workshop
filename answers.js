// Maxime Martin answers - July 5th 2016

//Write a function that takes a string and returns the first character of the string

function firstCharacter (string){
    return string[0];
}
console.log(firstCharacter("Maxime"));
console.log(firstCharacter(""));

//Write a function that takes a string and 
//returns the last character of the string

function lastCharacter (string){
    return string[string.length-1];
}

console.log(lastCharacter("Maxime"));
console.log(lastCharacter("k"));