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