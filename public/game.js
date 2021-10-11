var turn = 0
var Xturn = true
var won = false


//set game to initial state.
const initializeBoard = () => {
    Xturn = true;
    turn = 0
    won = false
    document.getElementById("gamename").innerText = "Tic Tac Toe";
    initializeDataBoard()
    const elementList = document.getElementsByClassName("piece")
    Array.from(elementList).forEach(el => removePiece(el.id))
}




//Change the title to Show winner or draw if needed.
const showWin = (state) => {
    if(state == 1){
        winner = Xturn ? "X" : "O"
        document.getElementById("gamename").innerText = winner + " wins!"
        won = true
    }
    if(state == -1){
        document.getElementById("gamename").innerText = "Draw"

    }
}

//Do on one of the canvas elements being clicked. 
const onPieceClick = (id) => {
    const [row, column] = idToData(id)
    if(!dataBoard[row][column] && !won){
        if(Xturn){
            drawX(id)
            dataBoard[row][column]=1
        }else{
            drawO(id)
            dataBoard[row][column]=-1
        }
        turn +=1
        const state = checkWin(row,column) //test for win
        showWin(state)
        Xturn = !Xturn //switch turn
    }//if its not an empty space, do nothing
}


//sets up the listeners on game pieces
const setUpGamePieceGrid = () => {
    const elementList = document.getElementsByClassName("piece")
    Array.from(elementList).forEach(element => {
        element.addEventListener('click',() => onPieceClick(element.id))
    });
}


initializeBoard()
setUpGamePieceGrid()
document.getElementById("newgamebutton").addEventListener('click', () => initializeBoard())