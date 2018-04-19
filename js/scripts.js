var topLeft, topMiddle, topRight, midLeft, middle, midRight, bottomLeft, bottomMiddle, bottomRight;

var playerTurn;
var playerTurnH3;

var markX;

var markO;

var currentMark;

var gameOver;

var movesUsedX;
var movesUsedO;

topLeft = document.querySelector('#tr1 td:nth-of-type(1)');
topMiddle = document.querySelector('#tr1 td:nth-of-type(2)');
topRight = document.querySelector('#tr1 td:nth-of-type(3)');

midLeft = document.querySelector('#tr2 td:nth-of-type(1)');
middle = document.querySelector('#tr2 td:nth-of-type(2)');
midRight = document.querySelector('#tr2 td:nth-of-type(3)');

bottomLeft = document.querySelector('#tr3 td:nth-of-type(1)');
bottomMiddle = document.querySelector('#tr3 td:nth-of-type(2)');
bottomRight = document.querySelector('#tr3 td:nth-of-type(3)');


document.getElementById('new-game-btn').addEventListener('click', initialize);
document.getElementById('top-left').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('top-middle').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('top-right').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('middle-left').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('middle').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('middle-right').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('bottom-left').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('bottom-middle').addEventListener('click', function () {
    addMove(this.id);
});
document.getElementById('bottom-right').addEventListener('click', function () {
    addMove(this.id);
});

initialize();

function initialize() {

    playerTurn = 'X';
    playerTurnH3 = document.getElementById('player-turn');

    playerTurnH3.innerHTML = '<h2 id="player-turn">Player Turn: X</h2>';

    markX = "<h3 class='marking'>X</h3>";

    markO = "<h3 class='marking'>O</h3>";

    currentMark = markX;

    gameOver = false;

    movesUsedX = [];
    movesUsedO = [];
    
    topLeft.innerHTML = ' ';
    topMiddle.innerHTML = ' ';
    topRight.innerHTML = ' ';
    midLeft.innerHTML = ' ';
    middle.innerHTML = ' ';
    midRight.innerHTML = ' ';
    bottomLeft.innerHTML = ' ';
    bottomMiddle.innerHTML = ' ';
    bottomRight.innerHTML = ' ';
    
    

}

function checkValidMove(moveName) {

    var isValid = true;

    if (movesUsedX.includes(moveName) || movesUsedO.includes(moveName))
        isValid = false;


    if (isValid) {

        if (playerTurn === 'X')
            movesUsedX.push(moveName);
        else
            movesUsedO.push(moveName);
    }

    return isValid;

}

function checkWin() {

    var arrayToCheck;

    if (playerTurn === 'X')
        arrayToCheck = movesUsedX;
    else
        arrayToCheck = movesUsedO;

    if (arrayToCheck.includes('top-left') &&
        arrayToCheck.includes('top-middle') &&
        arrayToCheck.includes('top-right')) {

        gameOver = true;

    }

    if (arrayToCheck.includes('middle-left') &&
        arrayToCheck.includes('middle') &&
        arrayToCheck.includes('middle-right')) {

        gameOver = true;

    }

    if (arrayToCheck.includes('bottom-left') &&
        arrayToCheck.includes('bottom-middle') &&
        arrayToCheck.includes('bottom-right')) {

        gameOver = true;

    }
    if (arrayToCheck.includes('top-left') &&
        arrayToCheck.includes('middle-left') &&
        arrayToCheck.includes('bottom-left')) {

        gameOver = true;

    }

    if (arrayToCheck.includes('top-middle') &&
        arrayToCheck.includes('middle') &&
        arrayToCheck.includes('bottom-middle')) {

        gameOver = true;

    }

    if (arrayToCheck.includes('top-right') &&
        arrayToCheck.includes('middle-right') &&
        arrayToCheck.includes('bottom-right')) {

        gameOver = true;

    }

    if (arrayToCheck.includes('top-left') &&
        arrayToCheck.includes('middle') &&
        arrayToCheck.includes('bottom-right')) {

        gameOver = true;

    }

    if (arrayToCheck.includes('top-right') &&
        arrayToCheck.includes('middle') &&
        arrayToCheck.includes('bottom-left')) {

        gameOver = true;

    }

    if (movesUsedO.length + movesUsedX.length >= 9) {
        gameOver = true;
        playerTurnH3.innerHTML = '<h2 id="player-turn">DRAW</h2>';
        return;
    }

    if (gameOver) {

        if (playerTurn === 'X')
            playerTurnH3.innerHTML = '<h2 id="player-turn">X WINS!!</h2>';
        else
            playerTurnH3.innerHTML = '<h2 id="player-turn">O WINS!!</h2>';

    }



}


function addMove(placeID) {

    if (gameOver)
        return;

    switch (placeID) {

        case 'top-left':
            if (checkValidMove(placeID)) {
                topLeft.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;

        case 'top-middle':
            if (checkValidMove(placeID)) {
                topMiddle.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'top-right':
            if (checkValidMove(placeID)) {
                topRight.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'middle-left':
            if (checkValidMove(placeID)) {
                midLeft.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'middle':
            if (checkValidMove(placeID)) {
                middle.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'middle-right':
            if (checkValidMove(placeID)) {
                midRight.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'bottom-left':
            if (checkValidMove(placeID)) {
                bottomLeft.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'bottom-middle':
            if (checkValidMove(placeID)) {
                bottomMiddle.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;
        case 'bottom-right':
            if (checkValidMove(placeID)) {
                bottomRight.innerHTML = currentMark;
                checkWin();
                switchPlayer();
            }
            break;




    }

}

function switchPlayer() {

    if (gameOver)
        return;

    if (playerTurn === 'X') {
        playerTurnH3.innerHTML = '<h2 id="player-turn">Player Turn: O</h2>'
        playerTurn = 'O';
        currentMark = markO;

    } else {

        playerTurnH3.innerHTML = '<h2 id="player-turn">Player Turn: X</h2>'
        playerTurn = 'X';
        currentMark = markX;

    }

    console.log(playerTurn);


}
