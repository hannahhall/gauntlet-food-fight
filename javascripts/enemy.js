"use strict";

var FoodFight = (function(enemy) {

  enemy.Player2 = function (name) {
    this.name = name;
    this.health = 50;
    this.attack = Math.floor(Math.random()*20 + 1) + 1;
    this.allowedEnemies = [enemy.Paula, enemy.Gordon, enemy.Lovett, enemy.Guy];
    this.bonus = [];
    this.attackSpecialty = [];
    //weapons object
    this.allowedWeapon = ['knife', 'meatTenderizer', 'chineseTakeout', 'fryingPan'];
    //function to randomize the object
    this.generateWeapon = function() {
    var random = Math.round(Math.random() * (this.allowedWeapon.length -1));
    var randomWeapon = this.allowedWeapon[random];
    this.weapon =new FoodFight.weaponOptions[randomWeapon]();
    }


    this.generateEnemy = function() {
    // get a random index from the name array
    var random = Math.round(Math.random() * (this.allowedEnemies.length -1));

    //get the string at the index
    var randomEnemy = this.allowedEnemies[random];

    //compose the corresponding enemy into the player object

    // this.name = randomEnemy.name;
    return randomEnemy;
    };

    this.generateAttack = function() {
    var random = Math.round(Math.random() * (this.attackSpecialty.length -1));
    var randomSpecialty = this.attackSpecialty[random];
    return randomSpecialty
    };
  };


  enemy.Paula = new enemy.Player2("Paula Dean");
  enemy.Paula.attackSpecialty.push("Heart Attack! She throws a stick of butter.");
  enemy.Paula.attackSpecialty.push("Bacon Attack! She wraps the hero in bacon.");
  enemy.Paula.attackSpecialty.push("Insensitivity Attack! She hurls racist jokes.");
  enemy.Paula.species = "paulaDean";
  enemy.Paula.deathImage = "pics/paulaDean-death.jpg";

  enemy.Gordon = new enemy.Player2("Gordon Ramsay");
  enemy.Gordon.attackSpecialty.push("Verbal Assault! He tells the hero to jump in the oven.");
  enemy.Gordon.attackSpecialty.push("Verbal Assault! He puts bread on the hero's head and calls the hero an idiot sandwich.");
  enemy.Gordon.attackSpecialty.push("Verbal Assault! He calls the hero a panini head.");
  enemy.Gordon.attackSpecialty.push("Verbal Assault! He calls the hero a useless sack of Yankee Doodle Dandy Shite.");
  enemy.Gordon.species = "gordonRamsay";
  enemy.Gordon.deathImage = "pics/gordonRamsay-death.jpeg";


  enemy.Lovett = new enemy.Player2("Mrs. Lovett");
  enemy.Lovett.attackSpecialty.push("Meat Pie Attack! The hero ate some bad pie.");
  enemy.Lovett.attackSpecialty.push("Complicit Evil! She is willing to dispose of the hero's dead body.");
  enemy.Lovett.attackSpecialty.push("Music Attack. She sings joyfully about the hero's demise");
  enemy.Lovett.species = "lovett";
  enemy.Lovett.deathImage = "pics/lovett-death.jpeg";

  enemy.Guy = new enemy.Player2("Guy Fieri");
  enemy.Guy.attackSpecialty.push("Offensive Appearance! The hero is sick from watching Guy Fieri eat.");
  enemy.Guy.attackSpecialty.push("Seafood slap. The seafood's so fresh it'll slap you!");
  enemy.Guy.attackSpecialty.push("Charcoal guy attack. Guy says only amateurs, losers, and idiots use lighter fluid.");
  enemy.Guy.species = "guyFieri";
  enemy.Guy.deathImage = "pics/guyFieri-death.jpg";


  enemy.enemyPlayer = new FoodFight.Player2()
  return enemy;
})(FoodFight ||{});


