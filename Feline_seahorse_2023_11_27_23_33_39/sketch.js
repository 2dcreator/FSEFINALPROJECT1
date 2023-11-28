let MENU = 0;
let game1 = 0;
let ClickedON = 0;
let timer = 5;
let game2 = 0;
let GSCORE2 = 0;
let TimerCheck = true;
let HSCORE = 0;
let sentencesChoice = 0;
let option = 0;

let Playing = 1;
let sentences = "This is a typing test.";
let sentences2 = "Cookie is better than biscuit.";
let sentences3 = "Spongebob is a sponge.";
let sentences4 = "Roses are red and violets are blue."
let inputText = "";
let sentencesDisplay;
let accuracyDisplay;
let gameStarted = false;
let gameEnded = false;
let gameStartTime;
let timer2 = 10;
let inputBoxActive = false;
let inputBox;
let Game3Back;

function preload() {
  soundFormats("mp3", "ogg");
  alarmSound = loadSound(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  );
  popSound = loadSound("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
  goodCrowd = loadSound(
    "https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"
  );
  errorSound = loadSound(
    "https://actions.google.com/sounds/v1/impacts/smashing_car_window.ogg"
  );

  img = loadImage(
    "https://live.staticflickr.com/2192/5718206440_312d6a911b.jpg"
  );
  img2 = loadImage(
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L2pvYjk1MC0wMDgteF8xLmpwZw.jpg"
  );
  img3 = loadImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvrq7iSo-4Y8YN23WXcTExP7V8DgJceiYIA&usqp=CAU"
  );
  img4 = loadImage(
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zODIzMC1pbWFnZS5qcGc.jpg?s=Hrn-uNMLOBj3Y27paCgu9fJqzjAHRzTBZ7YNQmvfeoE"
  );
  img5 = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/Cute-kittens-12929201-1600-1200.jpg"
  );
  imgGZ = loadImage("https://openclipart.org/download/303715/1530172731.svg");
  imgNo = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Thumbs_down_red_with_minus_sign.svg"
  );
  imgX = loadImage(
    "https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png"
  );
  imgTimes = loadImage(
    "https://t3.ftcdn.net/jpg/05/79/40/78/360_F_579407829_e0bZUE8RF6poVtkiNeqUSQ8K1jV2Is94.jpg"
  );
}

function setup() {
  createCanvas(800, 600);
  alarmSound.setVolume(0.2);
}

function draw() {
  print(mouseX, mouseY);
  background("#82B6FF");
  fill("#FF5994");
  rect(290, 100, 200, 75, 10);
  fill("#FF9668");
  rect(43, 250, 200, 75, 10);
  fill("#EDFF8F");
  rect(290, 400, 200, 75, 10);
  textSize(50);
  fill(255);
  fill("#84FF9F");
  rect(540, 250, 200, 75, 10);
  fill("black");

  text("Game 1", 300, 150);
  text("Game 2", 50, 300);
  text("Game 3", 550, 300);
  textSize(35);
  text("Instructions", 300, 450);

  //start of game 1
  if (MENU == 1) {
    background(0, 255, 0);
    fill(0);
    fill("#FF9668");
    rect(570, 520, 200, 75, 10);
    fill("black");
    textSize(50);
    text("Back", 570, 560);
    fill("black");
    textSize(20);
    text("Score: ");
    if (mouseX < 765 && mouseX > 570) {
      if (mouseY > 525 && mouseY < 570) {
        if (mouseButton == RIGHT) {
          MENU = 0;
          game1 = 0;
        }
      }
    }

    if (game1 == 7) {
      background(0, 255, 0);
      fill(0);
      fill("green");
      rect(285, 425, 200, 100, 10);
      fill("black");
      textSize(50);
      text("Next", 330, 490);
      textSize(50);
      text("Congratulations!!!!", 180, 180);
      image(imgGZ, 300, 220, 160, 160);
    }

    if (game1 == 8) {
      background(0, 255, 0);
      fill(0);
      fill("red");
      rect(285, 425, 200, 100, 10);
      fill("black");
      textSize(50);
      text("Next", 330, 490);
      textSize(50);
      text("Incorrect!!!!", 240, 180);
      image(imgNo, 300, 220, 160, 160);
    }

    if (game1 == 1) {
      textSize(30);
      text("Which of these objects are an apple?", 120, 120);
      image(img, 120, 200, 180, 180);
      image(img2, 480, 200, 180, 180);
      option = 1;
    }

    if (game1 == 2) {
      textSize(30);
      text("Which of these objects is a Banana?", 120, 120);
      image(img3, 120, 200, 180, 180);
      image(img2, 480, 200, 180, 180);
      option = 2;
    }

    if (game1 == 3) {
      textSize(30);
      text("which of these things is a dog?", 180, 120);
      image(img5, 120, 200, 180, 180);
      image(img4, 480, 200, 180, 180);
      option = 2;
    }

    if (game1 == 4) {
      textSize(30);
      text("which of these things is a cat", 180, 120);
      image(img5, 120, 200, 180, 180);
      image(img3, 480, 200, 180, 180);
      option = 1;
    }

    if (game1 == 5) {
      textSize(30);
      text("which of these things is a strawberry?", 130, 120);
      image(img3, 120, 200, 180, 180);
      image(img, 480, 200, 180, 180);
      option = 1;
    }
  } //end of game 1

  //start if game 2
  if (MENU == 2) {
    background(255, 0, 255);
    textSize(20);
    fill("#FF9668");
    rect(570, 520, 200, 75, 10);
    fill("black");
    textSize(50);
    text("Back", 570, 560);
    if (mouseX < 765 && mouseX > 570) {
      if (mouseY > 525 && mouseY < 570) {
        if (mouseButton == RIGHT) {
          MENU = 0;
        }
      }
    }
    if (game2 == 1) {
      alarmSound.stop();
      if (ClickedON == 0) {
        RandX = random(0, 750);
        RandY = random(135, 350);
        image(imgX, RandX, RandY, 150, 150);
        ClickedON += 1;
      }

      text("timer: " + timer, 30, 60);
      if (frameCount % 60 == 0 && timer > 0) {
        timer--;
      }

      if (timer == 0) {
        TimerCheck = false;
        if (GSCORE2 > HSCORE) {
          HSCORE = GSCORE2;
        }
        timer = 60;
      }
      if (TimerCheck == false) {
        game2 = 2;
        alarmSound.play();
      }
      text("Score: " + GSCORE2, 550, 60);
      image(imgX, RandX, RandY, 150, 150);
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          if (mouseX >= RandX + 27 && mouseX <= RandX + 120) {
            if (mouseY <= RandY + 130 && mouseX >= RandX + 24) {
              ClickedON -= 1;
              GSCORE2 += 1;
              if (ClickedON == 0) {
                popSound.play();
                RandX = random(0, 700);
                RandY = random(135, 350);
                image(imgX, RandX, RandY, 150, 150);
                ClickedON += 1;
              }
            }
          }
        }
      }
    }
    if (game2 == 2) {
      background(255, 0, 255);
      textSize(20);
      fill("red");
      rect(570, 520, 200, 75, 10);
      fill("black");
      textSize(50);
      text("Back", 570, 560);
      image(imgTimes, 250, 130, 240, 240);
      text("High Score: " + HSCORE, 480, 60);
      if (mouseX < 765 && mouseX > 570) {
        if (mouseY > 525 && mouseY < 570) {
          if (mouseButton == RIGHT) {
            MENU = 0;
          }
        }
      }
      fill("red");
      rect(285, 425, 200, 100, 10);
      fill("black");
      textSize(50);
      textSize(50);
      text("Retry", 330, 490);
      textSize(50);
    }
  }
  //end of game 2

  //Start of game 3
  if (MENU == 3) {
    background(220);
    textSize(75);
    fill("#FF9668");
    rect(570, 520, 200, 75, 10);
    fill("black");
    textSize(50);
    text("Back", 570, 560);
    if (Playing == 1) {
      createCanvas(650, 450);
      if (sentencesChoice == 1) {
        sentencesDisplay = createP(sentences);
        Playing = 2;
      } else if (sentencesChoice == 2) {
        sentencesDisplay = createP(sentences2);
        Playing = 2;
      } else if (sentencesChoice == 3) {
        sentencesDisplay = createP(sentences3);
        Playing = 2;
      } 
      else if (sentencesChoice == 4) {
        sentencesDisplay = createP(sentences4);
        Playing = 2;
      } 
    }
    if (Playing == 2) {
      accuracyDisplay = createP("");
      startButton = createButton("Start Game");
      startButton.mousePressed(startGame);
      Game3Back = createButton("Back to Main");
      Game3Back.position(400, 503);
      Game3Back.mousePressed(endEverything);
      resetButton = createButton("Reset Game");
      resetButton.mousePressed(resetGame);
      resetButton.hide();
      inputBox = createInput("");
      inputBox.position(10, height / 2 + 20);
      inputBox.size(600);
      inputBox.attribute("readonly", "true");
      noLoop();
      Playing = 3;
    }

    if (gameStarted && !gameEnded) {
      let elapsedTime = (millis() - gameStartTime) / 1000;
      if (timer2 > 0) {
        timer2 = 10 - elapsedTime;
        if (timer2 <= 0) {
          endGame();
        }
      }
    }

    if (gameEnded) {
      sentencesDisplay.remove();
      alarmSound.play();
      fill(0);
      textSize(16);
      text("Time's up!", 10, height / 2);
      if (sentencesChoice == 1) {
        accuracyDisplay.html(
          `Accuracy: ${calculateAccuracy(inputText, sentences).toFixed(2)}%`
        );
      } else if (sentencesChoice == 2) {
        accuracyDisplay.html(
          `Accuracy: ${calculateAccuracy(inputText, sentences2).toFixed(2)}%`
        );
      } else if (sentencesChoice == 3) {
        accuracyDisplay.html(
          `Accuracy: ${calculateAccuracy(inputText, sentences3).toFixed(2)}%`
        );
      } 
      else if (sentencesChoice == 4) {
        accuracyDisplay.html(
          `Accuracy: ${calculateAccuracy(inputText, sentences4).toFixed(2)}%`
        );
      }
      resetButton.show();
    }

    // Display the timer2
    textSize(24);
    text(`Time: ${timer2.toFixed(1)}`, 10, 30);
  }
  //END of game 3

  //Start of MENU 4
  if (MENU == 4) {
    background(255, 255, 0);
    textSize(75);
    fill("#FF9668");
    rect(570, 520, 200, 75, 10);
    fill("black");
    textSize(50);
    text("Back", 570, 560);
    if (mouseX < 765 && mouseX > 570) {
      if (mouseY > 525 && mouseY < 570) {
        if (mouseButton == RIGHT) {
          MENU = 0;
        }
      }
    }
    text("Instructions:", 70, 60);
    textSize(20);
    text("Game 1 will consist of a game to test object recognition", 70, 100);
    text("press various objects correctly in order to win the game", 70, 120);
    text(
      "Game 2 will consist of a game to test hand eye coordination and response time",
      70,
      160
    );
    text(
      "press the x in order to increase your score, but watch out for the time limit",
      70,
      180
    );
    text(
      "Game 3 will consist of a game to test hand eye coordination and handwriting",
      70,
      230
    );
    text("trace the letters correctly to win", 70, 250);
    text("Group Members:", 70, 290);
    text("Varun Kosuri, Day Say, Eduardo Hernandez, Rohan Chintham", 70, 310);
  }

  //End of MENU 4
}
//Selection Menu
function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 500 && mouseX > 300) {
      if (mouseY < 175 && mouseY > 100) {
        MENU = 1;
        game1 = 1;
      }
    }
    if (mouseX < 252 && mouseX > 50) {
      if (mouseY < 330 && mouseY > 240) {
        MENU = 2;
        game2 = 1;
      }
    }
    if (mouseX > 540 && mouseX < 750) {
      if (mouseY < 330 && mouseY > 240) {
        MENU = 3;
        Playing = 1;
        sentencesChoice = round(random(1,4));
      }
    }
    if (mouseX < 500 && mouseX > 300) {
      if (mouseY < 480 && mouseY > 390) {
        MENU = 4;
      }
    }
  }

  //Selection for game 1
  if (MENU == 1) {
    if (game1 == 7) {
      if (mouseX < 490 && mouseX > 280) {
        if (mouseY > 420 && mouseY < 525) {
          if (mouseButton == LEFT) {
            game1 = round(random(1, 5));
          }
        }
      }
    }

    if (game1 == 8) {
      if (mouseX < 490 && mouseX > 280) {
        if (mouseY > 420 && mouseY < 525) {
          if (mouseButton == LEFT) {
            game1 = round(random(1, 5));
          }
        }
      }
    }

    if (option == 2) {
      if (mouseX < 660 && mouseX > 500) {
        if (mouseY > 200 && mouseY < 390) {
          if (mouseButton == LEFT) {
            game1 = 7;
          }
        }
      }
      if (mouseX < 300 && mouseX > 120) {
        if (mouseY > 200 && mouseY < 390) {
          if (mouseButton == LEFT) {
            game1 = 8;
          }
        }
      }
    }

    if (option == 1) {
      if (mouseX < 300 && mouseX > 120) {
        if (mouseY > 200 && mouseY < 390) {
          if (mouseButton == LEFT) {
            game1 = 7;
          }
        }
      }
      if (mouseX < 660 && mouseX > 480) {
        if (mouseY > 200 && mouseY < 390) {
          if (mouseButton == LEFT) {
            game1 = 8;
          }
        }
      }
    }
  }

  //end of selection
  if (MENU == 2) {
    if (TimerCheck == false) {
      if (mouseX < 490 && mouseX > 270) {
        if (mouseY > 410 && mouseY < 530) {
          if (mouseButton == LEFT) {
            timer = 5;
            TimerCheck = true;
            GSCORE = 0;
            GSCORE2 = 0;
            game2 = 1;
          }
        }
      }
    }
  }
}
//end of selection

//Below is for game 3.
function keyTyped() {
  if (gameStarted && !gameEnded && inputBoxActive) {
    if (keyCode >= 32 && keyCode <= 126) {
      inputText += key;
    } else if (keyCode === BACKSPACE) {
      inputText = inputText.slice(0, -1);
    }
  }
}

function startGame() {
  gameStarted = true;
  gameStartTime = millis();
  startButton.hide();
  inputBox.removeAttribute("readonly");
  inputBox.value("");
  inputBoxActive = true;
  inputBox.elt.focus();
  loop();
}

function endGame() {
  gameEnded = true;
  inputBox.attribute("readonly", "true");
  inputBoxActive = false;
  noLoop();
}

function resetGame() {
  sentencesChoice = round(random(1, 4));
  startButton.remove();
  resetButton.remove();
  Playing = 1;
  alarmSound.stop();
  gameStarted = false;
  gameEnded = false;
  inputText = "";
  timer2 = 10;
  accuracyDisplay.html("");
  startButton.show();
  resetButton.hide();
  inputBox.value("");
  inputBox.attribute("readonly", "true");
  inputBoxActive = false;
  loop();
}

function calculateAccuracy(input, target) {
  const inputArray = input.replace(/\s/g, "").split("");
  const targetArray = target.replace(/\s/g, "").split("");
  let correctCount = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === targetArray[i]) {
      correctCount++;
    }
  }

  const accuracy = (correctCount / (targetArray.length - 1)) * 100;
  return accuracy;
}

function endEverything() {
  startButton.hide();
  loop();
  gameStarted = false;
  gameEnded = false;
  inputText = "";
  timer2 = 10;
  accuracyDisplay.html("");
  startButton.show();
  resetButton.hide();
  inputBox.value("");
  inputBox.attribute("readonly", "true");
  inputBoxActive = false;
  loop();
  removeElements();
  createCanvas(800, 600);
  MENU = 0;
  sentencesChoice = round(random(1,4));
}

