#!/usr/bin/node

// Simple console.log, no semi colon
console.log("Hello")
console.log(' ')

// Simple console.log, with semi colon
console.log("Hello");
console.log(' ');

// console.log variable that changes
let string = "Hello";
console.log(string);
string = "World!";
console.log(string);
console.log(' ');

// Mega bracket console.log
let bracket = "Deep inside the brackets"
{
    {
        {
            {
                {
                    {
                        {
                            {
                                console.log(bracket);
                            }
                        }
                        console.log(' ');
                    }
                }
            }
        }
    }
}

// Just a lot of console.log(s)
console.log("One ring to rule them all,");
console.log("one ring to find them,");
console.log("One ring to bring them all,");
console.log("and in the darkness bind them;");
console.log("In the Land of Mordor");
console.log("where the shadows lie.");
console.log('');
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log(7);

/* Prints fibonacci up to 34
    number:   Number of terms in the Fibonacci series
    n1:       First number in the series
    n2:       Second number in the series
    nextTerm: Assigning the next term in the series.
*/
const number = 7;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// console.log up to 'limit' number of coqui's
function countCoqui(limit){
    for (var i = 1; i < limit; i +=1){
        console.log(i + " Coqui(s)")
    }
}

countCoqui(10);