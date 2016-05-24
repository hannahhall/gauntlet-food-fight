var FoodFight = (function (results) {
	var resultsDiv = $("#results");
	var resetBtn = $("#resetButton");
	var modalDiv = $("#modalDiv");

	function playAgain () {
		$("#fight").slideUp();
		$("#choosey").slideDown();
		modalDiv.modal("hide");
		$("#battleLog").text("");
		$("#bonusLog").text("");
		$("#name").val("");
		$(".heroBtn").prop('checked', false);
		$(".weaponBtn").prop('checked',false);
	}

	results.checkForDeath = function(currentHeroHealth, currentEnemyHealth, hero, enemy) {
		if (currentHeroHealth <= 0 || currentEnemyHealth <= 0) {
			modalDiv.modal("show");
			if(currentHeroHealth <= 0 && currentEnemyHealth <= 0) {
				resultsDiv.html(`<img id="deathImage1" value="PLAY"  onload="loseSound.play()" src = "${hero.deathImage}" width = "400"><img id = "secondDeathImage" value="PLAY"  onload="winSound.play()" src = "${enemy.deathImage}" width = "400"><<h3>You have both been defeated. Would you like to play again?</h3>`);
			}
			else if (currentHeroHealth <= 0) {
				resultsDiv.html(`<img id="deathImage" value="PLAY"  onload="loseSound.play()" src = "${hero.deathImage}" width = "400"><h3>${hero.name} the ${hero.species} has been defeated by ${enemy.name}. Would you like to play again?</h3>`);
			}
			else if(currentEnemyHealth <= 0) {
				resultsDiv.html(`<img id = "deathImage" value="PLAY"  onload="winSound.play()" src = "${enemy.deathImage}" width = "400"><h3>${hero.name} the ${hero.species} has beaten ${enemy.name}! Would you like to play again?`);
			}
		}
		resetBtn.click(playAgain);
	}

	return results;

})(FoodFight || {})
