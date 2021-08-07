'use strict';


let name = prompt("What is your name?");

alert("Welcome to my website" + " " + name)

alert("This is my gussing game")
let score = 0;


question1();
question2();
question3();
question4();
question5();
question6();
question7();

function question1(){
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

function question2(){
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


function question3(){
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


function question4(){
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


function question5(){
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

function question6(){
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


function question7(){
 let  places 
let favplaces = ['France', 'Tokyo', 'Colombia', 'Italy', 'Singapore', 'Maldives', 'New Zeland', 'Bali', 'Cyprus', 'United Kingdom'];

for (let x = 1; x <= 6; x++) {
      places = (prompt("What is my favorite places I want to visit? you can choose from: Tokyo, France, Eygpt, Dubai, Bali"))
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