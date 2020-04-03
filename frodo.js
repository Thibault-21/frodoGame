let player = {
  desc: "Living in the Shire, he doesn't know the darkness and their beast",
  name: "Frodo",
  pv: 20,
  level: 0,
  place: "North",
  caracteristics : {
    strenght: 20,
    riddleAgility: 10
    },
  displayPlayer: function(){
    console.log("name: " + this.name)
    console.log("description : " + this.desc)
    console.log("pv : " + this.pv)
    console.log("level : " + this.level)
    console.log("strenght : " + this.caracteristics.strenght)
    console.log("riddleAgility : " + this.caracteristics.riddleAgility)
  },
  levelUp: function(){
    this.level++;
    this.pv += 10;
    this.caracteristics.strenght += 5;
    this.caracteristics.riddleAgility += 2;
  },
  // levelUpTwo: function(){
  //   this.level++;
  //   this.pv += 15;
  //   this.place = "Est";
  //   this.caracteristics.strenght += 7;
  //   this.caracteristics.riddleAgility += 2;
  // },
  // levelUpThree: function(){
  //   this.level++;
  //   this.pv += 15;
  //   this.place = "Moria";
  //   this.caracteristics.strenght += 5;
  //   this.caracteristics.riddleAgility += 2;
  // },
  // levelUpFour: function(){
  //   this.level++;
  //   this.pv += 15;
  //   this.place = "MorDor";
  //   this.caracteristics.strenght += 5;
  //   this.caracteristics.riddleAgility += 2;
  // },
  // lastStep: function(){
  //   this.level++;
  //   this.pv += 15;
  //   this.place = "the Volcan";
  //   this.caracteristics.strenght += 5;
  //   this.caracteristics.riddleAgility += 2;
  // }, 
  restWithinElves: function(){
    this.pv += 20; 
    this.place = "Rivendell";
    console.log(
      "Welcom Frodo Baggins from the Shire! Do not let your hearts be troubled. Go now and rest for you are weary with sorrow and much toil. Tonight you will sleep in peace.")
  }
}

module.exports = player 
