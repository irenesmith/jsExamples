let board = [];
let moves = 0;
let wonGame = false;

window.onload = function() {
  for(let i = 1; i <= 16; i++) {
    let tile = document.getElementById("tile" + i.toString());
    tile.addEventListener('click', handleTileClick);
    board.push(tile.innerText);

  }
};

function handleTileClick(event) {
  if(this.innerText === '') {
    return;
  }


}

function startGame() {
  moves = 0;
  board = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];
  shuffleTiles();
}

function shuffleTiles() {
  // perform a random number of moves in order
  // to make sure that the game is solvable.

}

function checkWin() {
  // See if the tiles are back in order.
  const inOrder = "123456789101112131415";
  if(inOrder === board.join('')) {
    wonGame = true;
  }


}

function moveTile() {
  
}