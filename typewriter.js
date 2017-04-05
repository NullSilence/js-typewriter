//The text you want to show.
var text = "Welcome on the internet. I'll be your guide.";

//The index you want to start.
var i = 0;

//The id of the HTML element you want to put the text in.
var target = "demo";

//The time before you wait before each character. In millisecond.
var interval = 100;

/*
You don't have to change the function below. Just change the variables to quickly
use this script. 
*/
setInterval(function() {
    //Check if we are at the end of the text.
    //If we are NOT at the end of the text...
    if(i < text.length)
    {
        //Add the character to the page.
        document.getElementById(target).innerHTML +=(text.charAt(i))
        //Add 1 to the index of the actual character.
        i++;
    }
    //We are at the end of the text.
    else
    {
        // Destroy the interval.
        clearInterval()
    }
}, interval);