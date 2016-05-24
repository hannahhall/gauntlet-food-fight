var FoodFight = (function(bonus) {
  bonus.setBonuses = function(hero, enemy) {
    hero.bonus = [];
    enemy.bonus = [];
    var heroBonus = hero.bonus;
    var enemyBonus = enemy.bonus;
    var thisAttackNumber = Math.random();
    console.log("this attack number", thisAttackNumber);
    //fruits 
    if (hero.type === "Fruit" && thisAttackNumber >= .6) {
      if (thisAttackNumber >= .6) {
        heroBonus.push({
          name: "sweetness",
          attackPoints: 3,
          message: "BONUS: Fruit is sweet. Dangerously sweet. +3 hero attack."
        });
      }
      //fruit enemy bonuses
      if (enemy.name === "Paula Dean" && thisAttackNumber <= .2) {
        enemyBonus.push({
          name: "pie",
          attackPoints: 5,
          message: "BONUS: Paula Dean makes a Fruit Pie. How disturbing. -5 hero health."
        })
      } else if (enemy.name === "Guy Fieri" && thisAttackNumber >= .5) {
        enemyBonus.push({
          name: "fruitIsGross",
          healthPoints: -2,
          message: "BONUS: Guy thinks fruit is NOT MONEY. -2 enemy health."
        })
      }
      //apple weapon bonuses
      if (hero.species === "Apple") {
        if (thisAttackNumber >= .5) {
          heroBonus.push({
            name: "soPretty",
            attackPoints: 3,
            message: "BONUS: what a shiny apple. So shiny. So shiiiiiinny....... +3 hero attack."
          })
        }
        if (hero.weapon.weapon === "fryingPan" && thisAttackNumber <= .7) {
          heroBonus.push({
            name: "vanity",
            attackPoints: -4,
            message: "BONUS: frying pan hits on Apple while she's trying to hit on her enemy... it doesn't go too well. -4 hero attack."
          })
          if (enemy.species === "lovett" && thisAttackNumber >= .2) {
            heroBonus.push({
              name: "doubleVanity",
              healthPoints: 7,
              message: "BONUS: frying pan  hits on Mrs. Lovett. How distracting for her and convenient for Apple. +7 hero health."
            })
          }
        } else if (hero.weapon.weapon === "chineseTakeout" &&
          thisAttackNumber >= .4) {
          heroBonus.push({
            name: "nofriends",
            healthPoints: 2,
            message: "BONUS: No fruits were used in the making of this chinese food. +2 hero health."
          })
        } else if (hero.weapon.weapon === "meatTenderizer" && enemy.species ===
          "gordonRamsay" && thisAttackNumber <= .6) {
          heroBonus.push({
            name: "bitchOut",
            attackPoints: 3,
            message: "BONUS: Apple can totally outyell Gordon Ramsay. +3 hero attack."
          })
        } else if (hero.weapon.weapon === "knife" && thisAttackNumber >=
          .25) {
          heroBonus.push({
            name: "specialknife",
            attackPoints: -1,
            message: "BONUS: Apple would hate to break a nail using this unrefined knife. -1 hero attack. "
          })
        }
        //peach weapon bonuses
      } else if (hero.species === "Peach") {
        if (thisAttackNumber <= .5) {
          heroBonus.push({
            name: "fuzzy",
            healthPoints: 3,
            message: "BONUS: Peach fuzz. That is all. +3 hero health."
          })
        }
        if (hero.weapon.weapon === "chineseTakeout" && thisAttackNumber >=
          .7) {
          heroBonus.push({
            name: "Ipreferdonuts",
            healthPoints: -1,
            message: "BONUS: Peach prefers donuts. -1 hero attack."
          })
          if (enemy.species === "guyFieri" && thisAttackNumber <= .7) {
            heroBonus.push({
              name: "MONEY",
              attackPoints: 2,
              message: "BONUS: Guy loves his spicy hot Chinese Takeout! +2 hero attack. "
            })
          }
        } else if (hero.weapon.weapon === "knife" && thisAttackNumber >=
          .5) {
          heroBonus.push({
            name: "threatening",
            attackPoints: 1,
            message: "BONUS: Peach knows how to use a big knife for intimidation as well as slicing and dicing. +1 hero attack."
          })
          if (enemy.species === "lovett" && thisAttackNumber >= .7) {
            heroBonus.push({
              name: "notamused",
              attackPoints: -2,
              message: "BONUS: Mrs Lovett is not impressed by the Peach. She prefers the Johnny Depp type. -2 hero attack."
            })
          } else if (enemy.species === "gordonRamsay" && thisAttackNumber >=
            .6) {
            heroBonus.push({
              name: "not ripe yet",
              healthPoints: 3,
              message: "BONUS: Don't eat the green ones. They're not ripe yet. +3 hero health."
            })
          }
        } else if (hero.weapon.weapon === "fryingPan" && thisAttackNumber >=
          .4) {
          heroBonus.push({
            name: "sunglasses",
            healthPoints: 2,
            message: "BONUS: Peach and the frying pan have matching sunglasses. Like bosses. +2 hero health."
          })
          if (enemy.species === "paulaDean" && thisAttackNumber >= .1) {
            heroBonus.push({
              name: "donkey",
              healthPoints: -2,
              message: "BONUS: In the morning, we're making waffles. Peach waffles. -2 hero health."
            })
          }
        } else if (hero.weapon.weapon === "meatTenderizer" && enemy.species ==
          "paulaDean" && thisAttackNumber >= .4) {
          heroBonus.push({
            name: "nothingIcanDo",
            healthPoints: -5,
            message: "BONUS: There's nothing the peach can do against Paula Dean's inevitable pie-making. This meat tenderizer makes it even worse. -5 hero health."
          })
        }
      }
      //Meats
    } else if (hero.type === "Meat") {
      if (thisAttackNumber >= .5) {
        heroBonus.push({
          name: "manly meat",
          healthPoints: 3,
          message: "BONUS: Meat meat manly manly meat. +3 hero health."
        })
      } else if (thisAttackNumber <= .15) {
        heroBonus.push({
          name: "meat",
          attackPoints: 5,
          message: "BONUS: Too much meat can be bad for you. Bring it on, you say? +5 hero attack."
        })
      }
      //meat enemy bonuses 
      if (enemy.name === "Mrs. Lovett" && thisAttackNumber <= .6) {
        enemyBonus.push({
          name: "meatpie",
          attackPoints: 3,
          message: "BONUS: Mrs. Lovett bakes meat pies out of ALL THE MEAT. Waste not, want not! -3 hero health."
        })
      } else if (enemy.name === "Gordon Ramsay" && thisAttackNumber <= .6) {
        heroBonus.push({
          name: "undercooked",
          attackPoints: 1,
          message: "BONUS: This meat is not fancy enough for Mr. Ramsay. -1 enemy health."
        })
      } else if (enemy.name === "Paula Dean" && thisAttackNumber <= .6) {
        heroBonus.push({
          name: "fryer",
          healthPoints: -1,
          message: "BONUS: Paula Dean is a mean not-so-lean fried meat eating machine. -1 hero health. "
        });
      }
      //cow  bonuses
      if (hero.species === "cow") {
        if (thisAttackNumber <= .3) {
          heroBonus.push({
            name: "udder",
            healthPoints: +1,
            message: "BONUS: Megan found it a little awkward to draw the Cow Udders. We deserve some health for getting it done with good attitudes. +1 hero health."
          })
        } else if (thisAttackNumber >= .6) {
          heroBonus.push({
            name: "moo",
            healthPoints: +1,
            message: "BONUS: 'moooooooooooOOOOOOooooooo. +1 hero health."
          })
        }
        //cow weapon bonuses
        if (hero.weapon.weapon === "chineseTakeout" && thisAttackNumber >=
          .5) {
          heroBonus.push({
            name: "messy",
            healthPoints: 2,
            message: "BONUS: Chinese takeout is also a meal, and Cow is always hungry. +2 hero health."
          })
        } else if (hero.weapon.weapon === "fryingPan" && thisAttackNumber <=
          .5) {
          heroBonus.push({
            name: "dontcookmyfriends",
            healthPoints: -1,
            message: "BONUS: Don't cook my friend the pig! Cow is disturbed by his weapon the frying pan. -1 hero health."
          })
        } else if (hero.weapon.weapon === "knife" && thisAttackNumber >=
          .6) {
          heroBonus.push({
            name: "clumsycow",
            attackPoints: -1,
            message: "BONUS: Cow is pretty clumsy and this knife is awfully small. -1 hero attack."
          })
          if (enemy.species === "paulaDean" && thisAttackNumber >= .2) {
            heroBonus.push({
              name: "bigtarget",
              attackPoints: +1,
              message: "Paula is an awfully big target. Cow can hit her even though he's clumsy. +1  hero attack."
            })
          }
        } else if (hero.weapon.weapon === "knife" && enemy.species ===
          "lovett" && thisAttackNumber < .75) {
          heroBonus.push({
            name: "meatsrevenge",
            attackPoints: 4,
            message: "BONUS: REVENGE OF THE MEAT!!!! Hero attack points +4!!!!"
          })
        }
        //lobster bonuses
      } else if (hero.species === "Lobster") {
        if (thisAttackNumber >= .65) {
          heroBonus.push({
            name: "littleMermaid",
            healthPoints: 2,
            message: "Ariel comes to the Lobster's rescue with a thingamabob! +2 hero health."
          })
        } else if (thisAttackNumber <= .3) {
          heroBonus.push({
            name: "littleMermaid2",
            attackPoints: -1,
            message: "BONUS: Ariel comes to the Lobster's rescue with a snorflewank! -1 hero attack."
          })
        }
        if (hero.weapon.weapon === "fryingPan" && thisAttackNumber >= .4) {
          heroBonus.push({
            name: "musicalPan",
            attackPoints: 2,
            message: "BONUS: Sebastian and his frying pan make a great singing team. -2 enemy health."
          })
        } else if (hero.weapon.weapon === "meatTenderizer" &&
          thisAttackNumber <= .6) {
          heroBonus.push({
            name: "carapace",
            healthPoints: 1,
            message: "BONUS: the lobster's hard shell makes him immune to all smashing! +1 hero health."
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && enemy.species ===
          "gordonRamsay" && thisAttackNumber >= .5) {
          heroBonus.push({
            name: "nofriedfood",
            attackPoints: -4,
            message: "BONUS: Ramsay hates fried food and flies into a rage at seeing these crazy egg rolls!!!! +4 enemy health."
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && enemy.species ===
          "paulaDean" && thisAttackNumber <= .3) {
          heroBonus.push({
            name: "distractingfried",
            attackPoints: 2,
            message: "BONUS: Paula looooooooves her fried food. +2 hero attack."
          })
        } else if (hero.weapon.weapon === "knife" && thisAttackNumber >=
          .4) {
          heroBonus.push({
            name: "toobig",
            healthPoints: -1,
            message: "BONUS: what an enormous knife! way too big for a little lobster. -1 hero health."
          })
        } else if (hero.weapon.weapon === "fryingPan" && thisAttackNumber <=
          .5) {
          heroBonus.push({
            name: "singingBonus",
            attackPoints: 1,
            message: "BONUS: singing frying pan and lobster make a great team. +1 hero attack."
          })
          if (enemy.species === "lovett" && enemy.weapon.weapon ===
            "fryingPan") {
            heroBonus.push({
              name: "quartet",
              attackPoints: 5,
              message: "BONUS: it's a singing quartet! +5 hero attack!"
            })
          }
        }
      }
      //Vegetables
    } else if (hero.type === "Vegetable") {

      if (thisAttackNumber >=.5) {
        heroBonus.push({
          name: "healthy", 
          healthPoints: 1, 
          message: "BONUS: Vegetables are good for you, and for themselves. +1 hero health."
        }) 
      }else if (thisAttackNumber <=.3) {
        heroBonus.push({
          name: "yucky", 
          attackPoints: +1, 
          message: "BONUS: do you know how many children are starving in China? You're not leaving the dinner table until you finish your vegetables. +1 hero attack."
        })
      }
      //vegetable enemy bonuses 
      if (enemy.name === "Paula Dean" && thisAttackNumber >=.5) {
        heroBonus.push({
          name: "ewveggies",
          attackPoints: 2,
          message: "BONUS: Paula Dean has no idea what to do with vegetables. -2 enemy health."
        })
      } else if (enemy.name === "Gordon Ramsay" && thisAttackNumber <=.5) {
        enemyBonus.push({
          name: "chopper",
          attackPoints: 3,
          message: "BONUS: Gordon Ramsay is GREAT at chopping. -3 hero health."
        })
      } //end of enemy bonus
      //potato weapon bonuses 
      if (hero.species === "Potato" && thisAttackNumber <=.4) {
        if (hero.weapon.weapon === "meatTenderizer") {
          heroBonus.push({
            name: "bunnyslipper",
            healthPoints: -1,
            message: "BONUS: Potato accidentally squishes one of his bunny slippers with his giant meat tenderizer. :( hero health -1. "
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && enemy.species ===
          "guyFieri" && thisAttackNumber >=.2) {
          heroBonus.push({
            name: "superDumpling",
            attackPoints: +2,
            message: "BONUS: Dumplings are awfully distracting to Guy Fieri. +2 hero attack."
          })
        } else if (hero.weapon.weapon === "fryingPan" && thisAttackNumber >=.5) {
          heroBonus.push({
            name: "breakfast",
            healthPoints: -1,
            message: "BONUS: Potato loves a good irish breakfast. Gets distracted by eating and gets blindsided. -1 hero health."
          })
        } else if (hero.weapon.weapon === "knife" && thisAttackNumber <=.6) {
          heroBonus.push({
            name: "lotsofeyes",
            attackPoints: 1,
            message: "BONUS: Potato has lots of eyes and therefore great knife-eye coordination. +1 hero attack. "
          })
          if (enemy.species === "gordonRamsay" && thisAttackNumber <=.5) {
            heroBonus.push({
              name: "outchopped",
              attackPoints: -2,
              message: "BONUS: Gordon Ramsay can totally out chop a measly potato. -2 hero attack."
            })
          }
        }
      } else if (hero.species === "Tomato") {
        if (thisAttackNumber <=.3) {
          heroBonus.push({
            name: 'fruit confusion', 
            attackPoints: 2, 
            message: "BONUS: is the tomato a fruit or a vegetable? +2 hero attack."
          })
        } else if (thisAttackNumber >=.7) {
          heroBonus.push({
            name: "fruit confusion 2", 
            attackPoints: 1, 
            message: "BONUS: is the tomato pronounced tomayto or tomahto? +1 hero attack."
          })
        }

        if (enemy.species === "GuyFieri" && thisAttackNumber >=.5) {
          heroBonus.push({
            name: "whatsatomato",
            healthPoints: 1,
            message: "BONUS: Guy's never seen a fresh tomato before! He's not sure what to do! -1 enemy attack."
          })
        } else if (enemy.species === "gordonRamsay" && thisAttackNumber >=.5) {
          heroBonus.push({
            name: "disgruntledchefs", 
            attackPoints: 5, 
            message: "BONUS: Disgruntled chefs throw tomatoes at Gordon Ramsay. +5 hero attack."
          })
        }
        //tomato weapon bonuses
        if (hero.weapon.weapon === "meatTenderizer" && thisAttackNumber <=.5) {
          heroBonus.push({
            name: "hulksmash",
            attackPoints: 4,
            message: "BONUS: TOMATO SMASH! -4 enemy health."
          })
        } else if (hero.weapon.weapon === "fryingPan" && thisAttackNumber >=.6) {
          heroBonus.push({
            name: "tooheavy",
            healthPoints: -1,
            message: "BONUS: this frying pan is a little heavy for the tomato. -1 hero health."
          })
        } else if (hero.weapon.weapon === "knife" && thisAttackNumber <=.5) {
          heroBonus.push({
            name: "sharp",
            attackPoints: 1,
            message: "BONUS: tomatoes only tolerate the sharpest of knives. +1 hero attack. "
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && thisAttackNumber >=.5) {
          heroBonus.push({
            name: "takeout",
            attackPoints: 1,
            message: "BONUS: it's practically spaghetti. -1 enemy Health."
          })
        }
      }
    }
    //Ramsay weapon bonuses
    if (enemy.name === "Gordon Ramsay") {

      if (thisAttackNumber >=.7) {
        enemyBonus.push({
          name:"yelling", 
          attackPoints: 3, 
          message: "BONUS: Gordon Ramsay's yelling sometimes makes people cry. +3 enemy attack."
        })
      } else if (thisAttackNumber <=.3) {
        enemyBonus.push({
          name: "yelling 2", 
          attackPoints: -3, 
          message: "BONUS: Gordon Ramsay's yelling sometimes makes people do their best work. +3 hero health."
        })
      }
      if (hero.species === "Apple" && thisAttackNumber >=.5) {
        enemyBonus.push({
          name: "spiralize",
          attackPoints: 2,
          message: "BONUS: SPIRALIZE ATTACK! +2 enemy attack."
        })
      } else if (hero.species === "potato" && thisAttackNumber <=.4) {
        enemyBonus.push({
          name: "takeoutsalt",
          healthPoints: -1,
          message: "potato takes all the salt and flavor out of Gordon's dishes. -1 enemy health."
        })
      }
      if (enemy.weapon.weapon === "meatTenderizer" && thisAttackNumber >=.6) {
        enemyBonus.push({
          name: "verbalAbuse",
          attackPoints: -1,
          message: "BONUS: Gordon Ramsay uses his words to pummel his opponents so he's not too practiced with the meat tenderizer thing. -1 enemy attack points."
        })
      } else if (enemy.weapon.weapon === "chineseTakeout" && hero.species ===
        "Potato" && thisAttackNumber <=.8) {
        enemyBonus.push({
          name: "unusualingredient",
          attackPoints: 3,
          message: "BONUS: Potatos are a unique but delicious ingredient in potstickers. -3 hero health."
        })
      } else if (enemy.weapon.weapon === "knife" && hero.species ===
        "Tomato" && thisAttackNumber <=.7) {
        enemyBonus.push({
          name: "superdice",
          attackPoints: 1,
          message: "BONUS: Super Dicing Chef Skills. -1 hero health."
        })
      } else if (enemy.weapon.weapon === "fryingPan" && thisAttackNumber <=.5) {
        enemyBonus.push({
          name: "nofrying",
          healthPoints: -2,
          message: "BONUS: Frying is a low down cheating unhealthy way to cook. -2 enemy health."
        })
      }
      //paula weapon bonuses
    } else if (enemy.name === "Paula Dean") {

      if (thisAttackNumber >=.7) {
        enemyBonus.push({
          name: "fat", 
          attackPoints: 1, 
          message: "BONUS: Paula's food is coma-inducingly delicious. +1 enemy attack."
        })
      } else if (thisAttackNumber <=.3) {
        enemyBonus.push({
          name: "butter", 
          healthPoints: -3, 
          message: "Paula Dean's recipes sometimes sound suspiciously like a suicide note. -3 enemy health."
        })
      }

      if (enemy.weapon.weapon === "fryingPan" && thisAttackNumber >=.2) {
        enemyBonus.push({
          name: "noface", 
          attackPoints: -1, 
          message: "BONUS: what is even going on, Paula Dean? Why is there a frying pan on your face? -1 enemy attack."
        })
      } else if (enemy.weapon.weapon === "knife" && thisAttackNumber <=.7) {
        enemyBonus.push({
          name: "cleaning ears", 
          attackPoints: 1, 
          message: "BONUS: Paula says it's always a good idea to clean your ears with your knife before attacking, for extra germiness. +1 enemy attack."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer" && thisAttackNumber >=.3) {
        enemyBonus.push({
          name: "masher", 
          attackPoints: -3, 
          message: "BONUS: Paula Paula Paula. That's not a meat tenderizer, that's a potato masher. You should know better. -3 enemy attack."
        })
      }
      if (enemy.species === "Lobster" && thisAttackNumber >= .5) {
        enemyBonus.push({
          name: "toofancy",
          healthPoints: -1,
          message: "BONUS: lobster is too fancy for down-home Paula Dean. -1 enemy health."
        })
      } else if (enemy.species === "Apple" && thisAttackNumber <= .6) {
        enemyBonus.push({
          name: "piemaking",
          healthPoints: 3,
          message: "Paula does love her apple pie. +3 enemy health."
        })
      } else if (enemy.species === "Peach" && thisAttackNumber >= 5) {
        enemyBonus.push({
          name: "cobbler",
          attackPoints: 2,
          message: "BONUS: Paula's peach cobbler is to die for. +2 enemy attack."
        })
      }
      if (enemy.weapon.weapon === "fryingPan" && thisAttackNumber <= .6) {
        enemyBonus.push({
          name: "sogood",
          healthPoints: 3,
          message: "BONUS: Paula thinks fried food is just the most delicious. +3 enemy health."
        })
      } else if (enemy.weapon.weapon === "knife" && hero.type ===
        "Vegetable" && thisAttackNumber >= .5) {
        enemyBonus.push({
          name: "whatsthis",
          attackPoints: -2,
          message: "BONUS: Paula doesn't know how to chop, she has lots of people to help her with that. -2 enemy attack."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer" &&
        thisAttackNumber <= .6) {
        if (hero.species === "potato") {
          enemyBonus.push({
            name: "gotcha",
            attackPoints: 2,
            message: "BONUS: Paula's got a potato masher! Joke's on you, potato! +2 enemy attack."
          })
        } else if (hero.type === "meat" && thisAttackNumber <= .9) {
          enemyBonus.push({
            name: "ooops",
            attackPoints: -2,
            message: "BONUS: oops, Paula's got a potato masher, joke's on her, she can't attack you nearly as well! -2 enemy attack."
          })
        }
      } else if (enemy.weapon.weapon === "chineseTakeout" &&
        thisAttackNumber >= .3) {
        enemyBonus.push({
          name: "delicious",
          healthPoints: 1,
          message: "BONUS: mmmmmmmmmmmmmm, fried dumplings. Enemy health +1."
        })
      }
      //guy weapon bonuses
    } else if (enemy.name === "Guy Fieri") {
      if (thisAttackNumber <= .3) {
        enemyBonus.push({
          name: "on fire",
          healthPoints: -1,
          message: "BONUS: this shirt is on fire!!!!!!!! -1 enemy health."
        })
      } else if (thisAttackNumber >= .9) {
        enemyBonus.push({
          name: "hair on fire",
          healthPoints: -3,
          message: "BONUS: I think Guy's hair is on fire too. why else would it look that way??!?!? -3 enemy health."
        })
      }

      if (hero.species === "Potato") {
        enemyBonus.push({
          name: "frenchfries",
          healthPoints: 2,
          message: "BONUS: the most delicious divey food is made from potatoes. +2 enemy health."
        })
      } else if (hero.species === "Cow" && thisAttackNumber > -.5) {
        enemyBonus.push({
          name: "burgers",
          attackPoints: 1,
          message: "BONUS: Guy is gonna make hamburger out of you! +1 enemy attack."
        })
      } else if (hero.species === "Lobster" && thisAttackNumber >= .2) {
        enemyBonus.push({
          name: "fire",
          attackPoints: -1,
          message: "BONUS: guy doesn't have the subtlety to cook a lobster. -1 enemy attack."
        })
      }
      if (enemy.weapon.weapon === "fryingPan" && thisAttackNumber <= .5) {
        enemyBonus.push({
          name: "Imonfire",
          attackPoints: 2,
          message: "BONUS: This frying pan is on FIRE just like guy's shirt! enemy attack +2."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer" && hero.type ===
        "fruit" && thisAttackNumber >= .6) {
        enemyBonus.push({
          name: "smashhaha",
          healthPoints: 1,
          message: "BONUS: Guy thinks smashing fruit is the funniest thing. +1 enemy health."
        })
      } else if (enemy.weapon.weapon === "chineseTakeout" &&
        thisAttackNumber >= .4) {
        enemyBonus.push({
          name: "Icantread",
          healthPoints: -1,
          message: "BONUS: Guy has trouble reading his fortune cookie. -1 enemy health."
        })
      } else if (enemy.weapon.weapon === "knife" && hero.species ===
        "Lobster" && thisAttackNumber <= .7) {
        enemyBonus.push({
          name: "seafoodSlap",
          attackPoints: 3,
          message: "BONUS: SEAFOOD SLAP!! you're screwed, lobster: +3 enemy attack points!"
        })
      }
      //lovett weapon bonuses
    } else if (enemy.name === "Mrs. Lovett" && thisAttackNumber >= .6) {
      if (hero.species === "Apple") {
        enemyBonus.push({
          name: "girltalk",
          healthPoints: 1,
          message: "BONUS: Girl talk... +1 enemy health."
        })
      } else if (hero.species === "Potato" && thisAttackNumber <= .8) {
        enemyBonus.push({
          name: "tastyfiller",
          attackPoints: 1,
          message: "BONUS: potatoes go great with person pies. +1 enemy attack."
        })
      }
      if (enemy.weapon.weapon === "knife" && thisAttackNumber >= .5) {
        enemyBonus.push({
          name: "usedtogrinder",
          healthPoints: -2,
          message: "BONUS: Mrs. Lovett greatly prefers a meat grinder. -2 enemy health."
        })
      } else if (enemy.weapon.weapon === "chineseTakeout" &&
        thisAttackNumber <= .7) {
        enemyBonus.push({
          name: "likemyhair",
          healthPoints: 1,
          message: "BONUS: Chinese Takeout is curly and messy just like Mrs. Lovett's crazy hair. +1 enemy health."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer" && hero.type ===
        "Meat" && thisAttackNumber <= .9) {
        enemyBonus.push({
          name: "niceandtender",
          attackPoints: 1,
          message: "BONUS: Mrs. Lovett knows her tender meats. +1 enemy attack. "
        })
      } else if (enemy.weapon.weapon === "fryingPan" && thisAttackNumber >=
        .6) {
        enemyBonus.push({
          name: "singalong",
          attackPoints: -1,
          message: "BONUS: Mrs. Lovett and her frying pan get distracted by singing to each other. -1 enemy attack."
        })
      }
    }
  }
  return bonus;
}(FoodFight || {}))
