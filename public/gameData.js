var dataBoard
const initializeDataBoard = () => {
    dataBoard= [];
    for(let i = 0; i<3; i++){
        row = []
        for(let j = 0; j<3; j++){
            row[j]=0
        }
        dataBoard.push(row)
    }
    return dataBoard

}
//Helper to turn ids into row/column coordinates
const idToData = (id) => {
    const rowColumnString = id.split("")//splits chars
    return rowColumnString.map(str => Number.parseInt(str)) //return parsed numbers
}


//Check to see if a win has occured. If no win has occured and we are at turn 9, return a draw.
const checkWin = (row,column) => {
    winSum = Xturn ? 3 : -3
    //check for row Win
    if(dataBoard[row][0]+dataBoard[row][1]+dataBoard[row][2] === winSum){
        return 1
    }
    //check for column win
    if(dataBoard[0][column]+dataBoard[1][column]+dataBoard[2][column] === winSum){
        return 1
    }
    //check for diagonals : techincally not needed every move, but more of a headache to conditionally not check
    if(dataBoard[0][0]+dataBoard[1][1]+dataBoard[2][2] == winSum){
        return 1
    }
    if(dataBoard[2][0]+dataBoard[1][1]+dataBoard[2][0] == winSum){
        return 1
    }
    if(turn === 9){
        return -1
    }
    return 0
}