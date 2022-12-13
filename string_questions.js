// Questions : 
// How can you reverse a string?

function revByFunction(str){
    return str.split("").reverse().join("");
}

function revByLoop(str){
    let reversed = "";
    for (let i = str.length-1; i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}


console.log(revByLoop('hello'));




// What is a palindrome string?
// How to get the matching characters in a string?
// How to get the non-matching characters in a string?
// How to calculate the number of vowels and consonants in a string?
// How do you prove that the two strings are anagrams?
// Find the count for the occurrence of a particular character in a string?
// How to verify if two strings are a rotation mutually?
// How to calculate the number of numerical digits in a string?
// How to compute the first character of a string that is not repeated?