/* create an image of your favorite animal (or whatever).
put it in the middle of the screen
move it with the arrow on the screen.
if you move it up, the image should look up, etc..

extra:
if the cursor moves over the image a surprise image appear */

const lionImage = document.querySelector('.lion__image');
if (!lionImage) throw new Error('The element "lionImage" could not be found');

try {
    lionImage.style.left = `35%`;
    lionImage.style.top = `35%`;
} catch (error) {
    console.error(error)
}


//Events to play with the monkey with arrow keys
document.addEventListener('keydown', function(){moveMonkey(event)});

function moveMonkey(ev) {
    try {
        if (ev.key.includes('ArrowLeft')) {
            if (parseInt(lionImage.style.left) > 0) {
                let newPositionLeft = parseInt(lionImage.style.left) - 1;
                movementOfTheMonkeyLeftRight(newPositionLeft, `rotateY(180deg)`);
            };

        } else if (ev.key.includes('ArrowRight')) {
            if (parseInt(lionImage.style.left) < 64) {
                let newPositionRight = parseInt(lionImage.style.left) + 1;
                movementOfTheMonkeyLeftRight(newPositionRight, `rotateY(0deg)`);
            };

        } else if (ev.key.includes('ArrowUp')) {
            if (parseInt(lionImage.style.top) > 0) {
                let newPositionTop = parseInt(lionImage.style.top) - 1;
                movementOfTheMonkeyUpDown(newPositionTop, `rotateX(180deg)`);
            };

        } else if (ev.key.includes('ArrowDown')) {
            if (parseInt(lionImage.style.top) < 57) {
                let newPositionBottom = parseInt(lionImage.style.top) + 1;
                movementOfTheMonkeyUpDown(newPositionBottom, `rotateX(0deg)`);
            };
        };
    } catch (error) {
        console.error(error);
    }
};

//Control the movements (left and right)
function movementOfTheMonkeyLeftRight(newPosition, rotate) {
    lionImage.style.left = `${newPosition}%`;
    lionImage.style.transform = rotate;
};

//Control the movements (un and down)
function movementOfTheMonkeyUpDown(newPosition, rotate) {
    lionImage.style.top = `${newPosition}%`;
    lionImage.style.transform = rotate;
};

//Event when the mouse is over the monkey:                         
lionImage.addEventListener('mouseover', mouseOver);

function mouseOver() {
    try {
        const song = document.querySelector('audio');
        const movieTitle = document.querySelector('.title__image');
        if (!song || !movieTitle) throw new Error(`Cant find the element "Audio" or "Title Image"`)
        song.play();
        lionImage.style.cursor = `progress`;
        lionImage.style.filter = `brightness(140%)`;
        movieTitle.style.display = `inline`;
    } catch (error) {
        console.error(error);
    }
};

//Get rid of the event when the mouse leaves the monkey:
lionImage.addEventListener('mouseout', mouseLeaves);

function mouseLeaves() {
    try {
        const song = document.querySelector('audio');
        const movieTitle = document.querySelector('.title__image');
        if (!song || !movieTitle) throw new Error(`Cant find the element "Audio" or "Title Image"`)
        song.pause();
        lionImage.style.filter = `none`;
        movieTitle.style.display = `none`;
    } catch (error) {
        console.error(error);
    }
};
