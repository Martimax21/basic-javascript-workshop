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
//console.log(operationTwoNumbers(2,4,"add"));

//Exercice #7
//Write a function that takes a string and a 
//number, and returns the string repeated that
//many number of times.

function stringRepeated(str,num) {
    for (var i = 0;i < num;i++){
         console.log(str);
    }
}
//stringRepeated("Max",4);

//Exercice #8
//Write a function that takes a string, 
//and returns the reverse of that string. 
//For example, if you pass the function the 
//string “hello”, it should return “olleh”. 
//Test your function on a few inputs, including 
//the empty string

function reverse(str) {
    var reverseword ="";
    var i = str.length-1;
    while(i > -1) {
         reverseword += str[i];
         i = i - 1;
    }
    return reverseword;
}
//console.log(reverse("Hello"));

//Exercice #9
//Write a function that takes a number and 
//returns the factorial of a number. The 
//factorial of 5 is 5x4x3x2x1. The factorial 
//of 0 is 1. Test your input on a few numbers, 
//including negative numbers.

function facto(num) {
    if (num >= 1) {
        var i = num;
        var answer = num;
        while(i > 1) {
             answer = answer * (i-1);
             i -= 1;
        }
        return answer;
    }
    else { 
        if (num === 0 ){
            return 1;
        }
        else {
            return "undefined";
        }
    }
}
//console.log (facto(-4));

//Exercice #10
//Write a function that takes a phrase as a 
//string, and returns the longest word in that 
//phrase. If the phrase contains more than one 
//such word, return the first occurrence

function longestWord(phrase) {
    var words = phrase.split(" ");
    var longest = "";
    var i = 0;
    while (i < words.length) {
        if (words[i].length > longest.length){
            longest = words[i];
        }
        i++;
    }
    return longest;
}
//console.log(longestWord("My name is Maxime Martin"));

//Exercice #11
//Write a function that takes a phrase, and returns
//the same phrase with every word capitalized. For 
//example, if you pass your function "hello world", 
//it should return “Hello World” and if you pass it 
//“HELLO WORLD” or even "HeLLo WoRLD", it will also 
//return "Hello World"

function capital(phrase){
    var words = phrase.split(" ");
    var i = 0;
    var phraseCapitalized = "";
    while (i < words.length) {
       var word = words[i];
       var wordLowerCase = word.toLowerCase();
       var wordCapital = wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1);
       phraseCapitalized += wordCapital + " ";
       i++;
    }
    return phraseCapitalized;
}
//console.log(capital("I dONT unDerStand capitalizATION"));

//Exercice #12
//Write a function that takes an array and returns 
//the largest number of the array. Test your function
//on a few inputs

function largestNumber(array){
    var i = 1;
    var largestNum = array[0];
    
    while (i < array.length) {
       if (array[i] > array[i-1]) {
           largestNum = array[i];
           i ++;
       }
       else {
           i ++;
       }
    }
    return largestNum;
}
//console.log(largestNumber([3,1,12,4]));

//Exercice #13
//Write a function that takes an array, and returns 
//a filtered array. The filtered array should only 
//contain the truthy values from the initial array.
//Hint: there is an array method called filter that 
//can help you with this :)


function filteredArray(array){
    var i = 0;
    var filterArray = [];
    while (i < array.length) {
        if (Boolean(array[i]) === true) {
            filterArray.push(array[i]);
            i ++;
        }
        else {
            i++
        }
    }
    return filterArray;
}
//console.log(filteredArray([true, false, undefined,null,"string",123,1.34,-1,1,0]));

//Exercice #14
//Write a function that takes an array of numbers, and 
//returns the sum of all the numbers in the array.

function sumArray(array){
    var i = 0;
    var sum = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
     return sum;
 }
// console.log(sumArray([3,4,54,3]));

//Exercice #15
//Write a function that takes two arrays, and
//returns an array of all elements that are 
//only in one array. For example, with [1,2,3]
//and [1,2,4,5] the function should return 
//[3,4,5]. Test your function on different 
//inputs. Hint: you should look up array 
//methods indexOf and slice.

function differenceArray(array1,array2){
    console.log(array1, array2)
    var resultArray = [];
    var i = 0;
    while(i<array1.length){
            if (array2.indexOf(array1[i]) >= 0 ){
                i++;
            }
            else {
                resultArray.push(array1[i]);
                i++;
            }
        
    }
    var j = 0;
    while(j<array2.length){
            if (array1.indexOf(array2[j]) >= 0){
                j++;
            }
            else {
                resultArray.push(array2[j]);
                j++;
            }
        
    }
    return resultArray;
}

//console.log(sumArray([1,2,3], [2,4,5]));

//Mini Challenge: write a function that takes an
//array and a function as arguments. The function
//should return a new array that maps every 
//element of the input array by passing it 
//through the function you received. You are 
//not allowed to use Array.map for this challenge, 
//otherwise it would be too easy :)

function miniChallenge(array,funct){
    var i = 0;
    var resultArray = [];
    while (i < array.length) {
        resultArray.push(funct(array[i]));
        i++;
    }
     return resultArray;
 }
console.log(miniChallenge(["Max","Jess","Jared"],firstCharacter));