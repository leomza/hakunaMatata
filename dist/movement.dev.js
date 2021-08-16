"use strict";

/* create an image of your favorite animal (or whatever).
put it in the middle of the screen
move it with the arrow on the screen.
if you move it up, the image should look up, etc..

extra:
if the cursor moves over the image a surprise image appear */
try {
  var lionImage = document.querySelector('.lion__image');
  lionImage.style.left = "35%";
  lionImage.style.top = "35%";

  if (!lionImage) {
    throw new Error('The element "lionImage" could not be found');
    /* YS: This should be in the line after you define lionImage and before you do lionImage.something 
       so that if you do lionImage.something and it doesnt exist, your error wil be caught */
  } //Events to play with the monkey with arrow keys


  document.addEventListener('keydown', function (ev) {
    /*Try to use a callback instead of writing the whole function when doing document.addEventlistener: document.addEventListener('mouseover', moveMonkey) */
    if (ev.key.includes('ArrowLeft')) {
      if (parseInt(lionImage.style.left) > 0) {
        var newPositionLeft = parseInt(lionImage.style.left) - 1;
        lionImage.style.left = "".concat(newPositionLeft, "%");
        /*YS: DRY */

        lionImage.style.transform = "rotateY(180deg)";
      }

      ;
    } else if (ev.key.includes('ArrowRight')) {
      if (parseInt(lionImage.style.left) < 64) {
        var newPositionRight = parseInt(lionImage.style.left) + 1;
        /*YS: DRY */

        lionImage.style.left = "".concat(newPositionRight, "%");
        lionImage.style.transform = "rotateY(0deg)";
      }

      ;
    } else if (ev.key.includes('ArrowUp')) {
      if (parseInt(lionImage.style.top) > 0) {
        var newPositionTop = parseInt(lionImage.style.top) - 1;
        lionImage.style.top = "".concat(newPositionTop, "%");
        /*YS: DRY */

        lionImage.style.transform = "rotateX(180deg)";
      }

      ;
    } else if (ev.key.includes('ArrowDown')) {
      /*YS: DRY */
      if (parseInt(lionImage.style.top) < 57) {
        var newPositionBottom = parseInt(lionImage.style.top) + 1;
        lionImage.style.top = "".concat(newPositionBottom, "%");
        lionImage.style.transform = "rotateX(0deg)";
      }

      ;
    }

    ;
  }); // YS: This should be another try/catch instead of part of the first one. 
  //Event when the mouse is over the monkey:                         

  lionImage.addEventListener('mouseover', function () {
    var song = document.querySelector('audio');
    var movieTitle = document.querySelector('.title__image');
    song.play();
    lionImage.style.cursor = "progress";
    lionImage.style.filter = "brightness(140%)";
    movieTitle.style.display = "inline";

    if (!song || !movieTitle) {
      throw new Error("Cant find the element \"Audio\" or \"Title Image\""); //YS: Same as lionKing
    }
  }); //YS: Another try/catch
  //Get rid of the event when the mouse leaves the monkey:

  lionImage.addEventListener('mouseout', function () {
    var song = document.querySelector('audio');
    var movieTitle = document.querySelector('.title__image');
    song.pause();
    lionImage.style.filter = "none";
    movieTitle.style.display = "none";

    if (!song || !movieTitle) {
      throw new Error("Cant find the element \"Audio\" or \"Title Image\""); //YS: Same as the lionking, this should be after defining song, so that if it doesnt exist and you write song.something it catches the error before. 
    }
  });
} catch (error) {
  console.error(error);
}