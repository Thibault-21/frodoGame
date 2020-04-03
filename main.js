// variables 
let player = require('./frodo')
let templateEnnemy = require('./sauron')
let readline = require("readline-sync");
const MINUS = "-";
const STARS = "*";

let ennemiesOfTheRing = []; 
let orcTroupOne = templateEnnemy.createOrcsOne();
let orcTroupTwo = templateEnnemy.createOrcsTwo();
let gobelinTroupThree = templateEnnemy.createGobelinOne();
let gobelinTroupFour = templateEnnemy.createGobelinTwo();
let deathMen = templateEnnemy.createDeathKingMen();
ennemiesOfTheRing.push(orcTroupOne, orcTroupTwo,gobelinTroupThree ,gobelinTroupFour, deathMen);


// main 
displayMenu();
let chooseActions = 0; 
let gameOver = false; 
while(chooseActions !== 9 && !gameOver){
  
  chooseActions = readline.questionInt("What do you want to do ? ")
  switch(chooseActions){
    case 0: splitLine(30, MINUS), displayMenu(), splitLine(30, MINUS);
    break; 
    case 1: splitLine(30, MINUS), explanationCampaign(), splitLine(30, MINUS);
    break; 
    case 2: player.displayPlayer();
    break; 
    case 3: splitLine(30, MINUS), middleEarthMap(), splitLine(30, MINUS);
    break; 
    case 4: splitLine(30, MINUS), Campaign(), splitLine(30, MINUS);
    break;  
    case 5: splitLine(30, MINUS), player.restWithinElves(), splitLine(30, MINUS);
    break; 
    case 9: console.log("leave");
    break;
    default: console.log("error");
    break;  
  }
}

// function 
function displayMenu(){
  let actions = ""; 
  actions += "0 - Menu\n";
  actions += "1 - Explanation of the Campaign\n";
  actions += "2 - Display infos Player\n"; 
  actions += "3 - middle-Earth' Map\n",
  actions += "4 - start A Campaign\n",
  actions += "5 - Rest\n"
  actions += "9 - leave\n";
  console.log(actions);
}

// 1
function explanationCampaign(){
  console.log("There is a dark force, in the South who push their forces to the middle-earth! The middle-earth is threatened! You have to fuflfilled this mission! destroy the ring!!")
}
// 3 
function middleEarthMap(){
  for(let i = 0; i < ennemiesOfTheRing.length; i++){
    splitLine(10, MINUS);
    ennemiesOfTheRing[i].displayEnnemy();
    splitLine(10, MINUS);
  }
}

// 4

function Campaign(){
  if(player.level = 0){
    splitLine(10, MINUS);
    fight(0)
    splitLine(10, MINUS);
  }
  else if(player.level = 1){
    splitLine(10, MINUS);
    fight(1)
    splitLine(10, MINUS);
  }
  else if(player.level = 2){
    splitLine(10, MINUS);
    fght(2)
    splitLine(10, MINUS);
  }
  else if(player.level = 3){
    splitLine(10, MINUS);
    fight(3)
    splitLine(10, MINUS);
  }
  else if(player.level = 4){
    splitLine(10, MINUS);
    fght(4)
    splitLine(10, MINUS);
  }
  splitLine(10, MINUS);
  dropOff()
  splitLine(10, MINUS);
}

function fight(num){
  let winner = 0;
  for(let i = 0; i < ennemiesOfTheRing.length; i++){
    player.pv -= ennemiesOfTheRing[num].caracteristics.strenght; 
    ennemiesOfTheRing[num].pv -= player.caracteristics.strenght;
// ---
    winner = player.pv - ennemiesOfTheRing[num].pv
    
    if(winner > 0) {
      winner = player.name
      destroyEnnemy()
      splitLine(10, STARS);
      console.log("the winner is : " + winner)
      splitLine(10, STARS);
      console.log("these " + ennemiesOfTheRing[num].name + " are dead, but be careful Frodo.. Others can come!")
      player.levelUp()
      splitLine(10, STARS);
      console.log("congratulations! You reach the level " + player.level + " ! Let's detroy the ring!")
      splitLine(10, STARS);
    } else{
      winner = ennemiesOfTheRing[num].name;
    }    
  }
}

function dropOff(){
  console.log("The ring is destroy! You succedeed! Sauron is dead! You save The middle earth!")
}


function destroyEnnemy(num){
  for(let i = num; i < ennemiesOfTheRing.length; i++){
    ennemiesOfTheRing[i] = ennemiesOfTheRing[i+1];
  }
  ennemiesOfTheRing.pop();
}

// ----------------------------------
// support 
function splitLine(num, separator){
  let charcater = "";
  for(let i = 0; i < num; i++){
    charcater += separator;
  }
  console.log(charcater);
}
