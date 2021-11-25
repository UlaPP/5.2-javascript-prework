{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

     const displayResult= function(argComputerMove, argPlayerMove) {
      console.log('ruchy graczy:', argComputerMove, argPlayerMove);
      if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
        printMessage('Gra nierozstrzygnięta!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrywasz!');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
        printMessage('Gra nierozstrzygnieta!');
      }
    }
    displayResult(computerMove, playerMove);
  }

  const buttonRockClicked = function () {
    playGame(1);
  }

  const buttonRock = document.getElementById('play-rock');

  buttonRock.addEventListener('click', buttonRockClicked);

  const buttonPaperClicked = function () {
    playGame(2);
  }

  const buttonPaper = document.getElementById('play-paper');

  buttonPaper.addEventListener('click', buttonPaperClicked);

  const buttonScissorsClicked = function () {
    playGame(3);
  }

  const buttonScissors = document.getElementById('play-scissors');

  buttonScissors.addEventListener('click', buttonScissorsClicked);
}
