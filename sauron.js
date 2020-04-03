let templateEnnemy = {
  createOrcsOne: function(){
    let sarumanOrcs = {
      name: "Saruman' Orcs",
      type: "Orcs",
      desc:"Respond to White Wizard",
      place: "Isengard",
      pv: 5,
      level: 0,
      caracteristics: {
        strenght: 5
      },
      displayEnnemy: function(){
        let txt= "name : " + this.name + "\n";
        txt += "Description : " + this.desc + "\n"; 
        txt += "Level : " + this.level + "\n";
        txt += "Pv : " + this.pv + "\n";
        txt += "Place : " + this.place + "\n";
        txt += "Strenght : " + this.caracteristics.strenght;
        console.log(txt);
      } 
    }
    return sarumanOrcs;
  },
    createOrcsTwo: function(){
      let sauronOrcs = {
        name: "Sauron'Orcs",
        type: "Orcs",
        desc: "Respond to The Great Eye",
        place: "Est",
        pv: 12,
        level: 1,
        caracteristics: {
          strenght: 10
        },
        displayEnnemy: function(){
          let txt= "name : " + this.name + "\n";
          txt += "Description : " + this.desc + "\n"; 
          txt += "Level : " + this.level + "\n";
          txt += "Pv : " + this.pv + "\n";
          txt += "Place : " + this.place + "\n";
          txt += "Strenght : " + this.caracteristics.strenght;
          console.log(txt);
        } 
      }
      return sauronOrcs;
    },
    createGobelinOne: function(){
      let gobelinMoria = {
        name: "Gobelin of Moria",
        type: "Gobelin",
        desc: "Fear the Oldest Beast Of the World",
        place: "Moria",
        pv: 7,
        level: 2,
        caracteristics: {
          strenght: 15
        },
        displayEnnemy: function(){
          let txt= "name : " + this.name + "\n";
          txt += "Description : " + this.desc + "\n"; 
          txt += "Level : " + this.level + "\n";
          txt += "Pv : " + this.pv + "\n";
          txt += "Place : " + this.place + "\n";
          txt += "Strenght : " + this.caracteristics.strenght;
          console.log(txt);
        } 
      }
      return gobelinMoria;
    },
    createGobelinTwo: function(){
      let gobelins = {
        name: "Gobelins",
        type: "Gobelin",
        desc: "Living in the deepest caves of the Middle Earth",
        place: "Center",
        pv: 7,
        level: 3,
        caracteristics: {
          strenght: 15
        },
        displayEnnemy: function(){
          let txt= "name : " + this.name + "\n";
          txt += "Description : " + this.desc + "\n"; 
          txt += "Level : " + this.level + "\n";
          txt += "Pv : " + this.pv + "\n";
          txt += "Place : " + this.place + "\n";
          txt += "Strenght : " + this.caracteristics.strenght;
          console.log(txt);
        } 
      }
      return gobelins;
    }, 
    createDeathKingMen: function(){
      let kingsMenDeath = {
        name: "Kings Deaths",
        type: "Men",
        desc: "King Men Once time, death and slave of the great eye.. they looking for Frodo",
        place: "Center",
        pv: 15,
        level: 4,
        caracteristics: {
          strenght: 30
        },
        displayEnnemy: function(){
          let txt= "name : " + this.name + "\n";
          txt += "Description : " + this.desc + "\n"; 
          txt += "Level : " + this.level + "\n";
          txt += "Pv : " + this.pv + "\n";
          txt += "Place : " + this.place + "\n";
          txt += "Strenght : " + this.caracteristics.strenght;
          console.log(txt);
        } 
      }
      return kingsMenDeath;
    }
  }


module.exports = templateEnnemy

