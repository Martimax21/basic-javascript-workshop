var quote1 = "I am Kanye";
var quote2 = "I am Kim";
var quote3 = "I am Jay-Z";
var quote4 = "I am Beyonce";
var quote5 = "I am Maxime";
var quote6 = "I am Nicky";
var quote7 = "I am Drake";
var quote8 = "I am JLO";
var quote9 = "I am Kendrick";
var quote10 = "I am Fetty Wap";

var quoteArray = [quote1,quote2,quote3,quote4,quote5,quote6,quote6,quote7,quote8,quote9,quote10]
var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
console.log(randomQuote);