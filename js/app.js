'use strict';


let name = prompt("What is your name?");

alert("Welcome to my website" + " " + name)

alert("This is my gussing game")
let score = 0;


FirstQ();
secondQ();
ThreeQ();
fourQ();
fiveQ();
sexQ();
sevenQ();

function FirstQ(){
let painting = prompt("Do you think I can draw? yes,no").toLowerCase();

switch (painting) {
    case 'yes':
    case 'y':
        console.log('correct');
        alert("correct");
        score+=1;
        break;

    case 'no':
    case 'n':
        alert("incorrect answer");
        break;

    default:
        alert("please answer yes or no ");
}
}

function secondQ(){
let styling = prompt("Do you think I like styling using CSS?yes,no").toLowerCase();

switch (styling) {
    case 'yes':
    case 'y':
        console.log('correct');
        alert("correct");
        score+=1;
        break;

    case 'no':
    case 'n':
        alert("incorrect answer");
        break;

    default:
        alert("None");
 }
}


function ThreeQ(){
let colors = prompt("Do you think that My favorite color is blue? yes,no").toLowerCase();


switch (colors) {
    case 'yes':
    case 'y':
        console.log('correct');
        alert("correct");
        score+=1;
        break;

    case 'no':
    case 'n':

        alert("incorrect answer");
        break;

    default:
        alert("None");
}
}


function fourQ(){
let tarvel = prompt("Do I like traviling? yes,no").toLowerCase();

switch (tarvel) {
    case 'yes':
    case 'y':
        console.log('correct');
        alert("correct");
        score+=1;
        break;

    case 'no':
    case 'n':

        alert("incorrect answer");
        break;

    default:
        alert("None");
  }
}


function fiveQ(){
let personality = prompt("Do you think that I'm a logical person? yes,no").toLowerCase();

switch (personality) {
    case 'yes':
    case 'y':
        console.log('correct');
        alert("correct");
        score+=1;
        break;

    case 'no':
    case 'n':

        alert("incorrect answer");
        break;

    default:
        alert("None");
}
}

function sexQ(){
let num
for (let i = 1; i <= 4; i++) {
    num = Number(prompt("guess my age?"))

    if (num === 23) {
        alert("That's correct");
        console.log("correct answer " + num);
        score+=1;
        break;
    }
    else if (num > 23) {
        alert("too high")
    }
    else if (num < 23) {
        alert("too low")
    }

}

if (num != 23)
    alert("My age is 23")
}


function sevenQ(){
 let  places 
let favplaces = ['France', 'Tokyo', 'Colombia', 'Italy', 'Singapore', 'Maldives', 'New Zeland', 'Bali', 'Cyprus', 'United Kingdom'];

for (let x = 1; x <= 6; x++) {
      places = (prompt("What is my fav places I want to visit?"))
//    console.log(places + " user answer");
let j;
    for ( j = 0; j < favplaces.length; j++) {
        // console.log(favplaces[j] + "correct answer");

        if (places == favplaces[j]) {
            alert("That's corresct");
            console.log("correct answer" + places);
            score+=1;
          
            break;
        } 

    }
    if(places == favplaces[j]){
        break;
    }
    else{
        alert("incorrect answer");
        
    }
}
}

alert("You finished your attempet and this is the correct answer: France, Tokyo, Colombia, Italy, Singapore, Maldives, New Zeland, Bali, Cyprus, United Kingdom");
alert("you score is " + score +" out of 7");
alert("Thank you for visiting my Website " + name);