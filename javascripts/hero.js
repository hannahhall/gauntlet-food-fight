"use strict";
var FoodFight = (function(hero){

	//generic class
	var Player1 = function (name) {
		this.health = 50;
		this.attack = 10;
		this.name = name;
		this.bonus = [];
	}
 

	//super classes
	var Vegetable = function (name) {
		Player1.call(this, name);
		this.type = "Vegetable";
		this.health += 20;
		this.attack -= 2;
	}
	Vegetable.prototype = Object.create(Player1.prototype);

	var Meat = function(name) {
		Player1.call(this, name);
		this.type = "Meat";
		this.health += 10;
		this.attack += 10;
	}
	Meat.prototype = Object.create(Player1.prototype);

	var Fruit = function (name) {
		Player1.call(this, name);
		this.type = "Fruit";
		this.health += 5;
		this.attack -= 3;
	}
	Fruit.prototype = Object.create(Player1.prototype);


	//species within super classes
	hero.Tomato = function (name) {
		this.species = "Tomato";
		Vegetable.call(this, name);
		this.specialtyAttack = "Spits seeds";
		this.deathImage = "pics/Tomato-death.jpeg"
	}
	hero.Tomato.prototype = Object.create(Vegetable.prototype);

	hero.Potato = function (name) {
		this.species = "Potato";
		Vegetable.call(this, name);
		this.specialtyAttack = "Laser Eyes";
		this.deathImage = "pics/Potato-death.jpeg"
	}
	hero.Potato.prototype = Object.create(Vegetable.prototype);

	hero.Lobster = function (name) {
		Meat.call(this, name);
		this.species = "Lobster";
		this.specialtyAttack = "Claw Attack";
		this.deathImage = "pics/Lobster-death.jpeg"
	}
	hero.Lobster.prototype = Object.create(Meat.prototype);

	hero.Cow = function (name) {
		Meat.call(this, name);
		this.species = "Cow";
		this.specialtyAttack = "Chew Attack";
		this.deathImage = "pics/Cow-death.jpeg"
	}
	hero.Cow.prototype = Object.create(Meat.prototype);

	hero.Apple = function (name) {
		Fruit.call(this, name);
		this.species = "Apple";
		this.specialtyAttack = "Arson Poisoning";
		this.deathImage = "pics/Apple-death.jpeg"
	}
	hero.Apple.prototype = Object.create(Fruit.prototype);

	hero.Peach = function (name) {
		Fruit.call(this, name);
		this.species = "Peach";
		this.specialtyAttack = "Pit Attack";
		this.deathImage = "pics/Peach-death.jpeg"
	}
	hero.Peach.prototype = Object.create(Fruit.prototype);

	return hero;

})(FoodFight || {})
