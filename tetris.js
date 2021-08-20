// Get our  canvas element 
const cvs = document.getElementById("tetris");
// create the cavas with 2d tool for draw
const ctx = cvs.getContext("2d");
// Get our score element
const scoreElement = document.getElementById("score");

// seput some variables to keep our mesure table 10x16
const ROW = 16;
const COL = COLUMN = 10;
// scare mesure 40x40 
const SQ = squareSize = 40;
const VACANT = "WHITE"; // color of an empty square

// draw a square we pass 3 parameters 
function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ); //we pass the SQ variable value
    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

// create the board

let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}

// draw the board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

// we create a external file tetrominoes.js
// the pieces and their colors

const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

// generate random pieces

function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6
    return new Piece( PIECES[r][0],PIECES[r][1]);
}

let p = randomPiece();

/* The Object Piece, we create this prototype with the funtion Piece,
we use this keyword to define objects */

function Piece(tetromino,color){ 
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN]; //z0
    
    // we need to control the pieces we setup how the piece go down
    this.x = 3;
    this.y = -2;
}

// fill function

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}

// draw a piece to the board

Piece.prototype.draw = function(){
    this.fill(this.color);
}

// undraw a piece


Piece.prototype.unDraw = function(){
    this.fill(VACANT);
}