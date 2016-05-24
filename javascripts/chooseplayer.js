var FoodFight = (function(choose){
  var heroBtn = $(".heroBtn");
  var weaponButton = $(".weaponBtn")
  var userName = $("#name");
  var selected, weaponChosen;
  //event listener to set character and show weapon choice.


  $("#characterChosen").on("click", function() {
    currentHero = choose.setHero();
    $("#weapons").slideDown();
    $("#choosey").slideUp();
  })

  //event listener to set weapon choice and set up game.
  $("#weaponChosen").on("click", function() {

    if (weaponChosen === undefined) {
      alert("hey, pick a weapon! You don't want to be weaponless in the fight against this chef!")
    } else {
      $("#fight").slideDown();
      $("#weapons").slideUp();
      currentHero.weapon = choose.setWeapon();
      currentHero.picture = FoodFight.setPicture(currentHero);
      currentEnemy = choose.generateEnemy();
      
      console.log("current hero", currentHero );
      console.log("current enemy", currentEnemy );
      FoodFight.setUpGame(currentHero, currentEnemy);
    }

  });

  heroBtn.click(function() {
    selected = heroBtn.filter(":checked").val();
    console.log(selected);
  });

  weaponButton.click(function() {
    weaponChosen = weaponButton.filter(":checked").val();
  })

  //find the character that is chosen and set it to hero.
  choose.setHero = function(){
    var name = userName.val()
    var hero = new FoodFight[selected](name);
    return hero;
  };


  choose.setWeapon = function() {
    console.log("weapon chosen", weaponChosen );
    var currentWeapon = new FoodFight.weaponOptions[weaponChosen]();
    return currentWeapon;
  }

  choose.generateEnemy= function(){
    var enemy = FoodFight.enemyPlayer.generateEnemy();
    enemy.generateWeapon();
    enemy.picture = FoodFight.setEnemyPicture(enemy);
    return enemy;
    //set a new enemy using Keith's file.
  }


  return choose;
}(FoodFight || {}))
