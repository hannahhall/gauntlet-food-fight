
var FoodFight = (function(weapons) {

  //empty basic weapon object prototype- mainly for practice as at this point none of the weapons have anything in common.
  var basicWeapon = function() {
    this.weaponName = "";
    this.addedDamage = "";
    this.picture = "";
  }
   
  weapons.weaponOptions = {};

  //indiv weapon options
  weapons.weaponOptions.chineseTakeout = function() {
    this.weapon = "chineseTakeout"
    this.weaponName = "Chinese Takeout";
    this.addedDamage = 3;
  }
  weapons.weaponOptions.chineseTakeout.prototype = new basicWeapon();

  weapons.weaponOptions.knife = function() {
    this.weapon = "knife"
    this.weaponName = "a Knife";
    this.addedDamage = 3;
  }
  weapons.weaponOptions.knife.prototype = new basicWeapon();

  weapons.weaponOptions.fryingPan = function() {
    this.weapon = "fryingPan";
    this.weaponName = "a Frying Pan";
    this.addedDamage = 3;
  }
  weapons.weaponOptions.fryingPan.prototype = new basicWeapon();

  weapons.weaponOptions.meatTenderizer = function() {
    this.weapon = "meatTenderizer";
    this.weaponName = "a Meat Tenderizer";
    this.addedDamage = 3;
  }
  weapons.weaponOptions.meatTenderizer.prototype = new basicWeapon();

  //setting after current hero is chosen, since there are 24 different picture options.
  weapons.setPicture = function(currentHero) {

    var picture = `pics/${currentHero.species}-${currentHero.weapon.weapon}.jpeg`;
    return picture;

  }


  //setting enemy picture.
  weapons.setEnemyPicture = function(currentEnemy) {

    var picture = `pics/${currentEnemy.species}-${currentEnemy.weapon.weapon}.jpg`;
    return picture;

  }


  return weapons;

}(FoodFight || {}))
