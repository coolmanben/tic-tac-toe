class TicTacToe {
    constructor() {
        TicTacToe.namePlayer = 'x';
        TicTacToe.namePlayerWinner = null;
        TicTacToe.matrix = [];
        for (var rowIndex = 0 ; rowIndex < 3 ; rowIndex++ ){
            for (var colIndex = 0 ; colIndex < 3 ; colIndex++ ){
                TicTacToe.matrix[rowIndex][colIndex] === null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return TicTacToe.nameplayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if ( TicTacToe.matrix[rowIndex][columnIndex] !== null) {
            return;
        }

        TicTacToe.matrix[owIndex][columnIndex] =  TicTacToe.getCurrentPlayerSymbol();

        if ( TicTacToe.namePlayer === 'x' ) {
            TicTacToe.namePlayer === 'o' ;   
        }
        else {
            TicTacToe.namePlayer === 'x' ;  
        }

    }

    isFinished() {
        if ( ( TicTacToe.getWinner() !== null ) && TicTacToe.noMoreTurns() ){
            return true;
        }
        else { 
            return false;
        }
    }

    getWinner() {
        let winnerName = null;
        if ( TicTacToe.matrix[0][0] == TicTacToe.matrix[1][1] == TicTacToe.matrix[2][2]  ) {
            winnerName = TicTacToe.matrix[1][1]
            
        }
        if ( TicTacToe.matrix[0][2] == TicTacToe.matrix[1][1] == TicTacToe.matrix[2][0]  ) {
            winnerName = TicTacToe.matrix[0][0]
        }

        for (var rowIndex = 0 ; rowIndex < 3 ; rowIndex++ ){
            if ( TicTacToe.matrix[rowIndex][0] == TicTacToe.matrix[rowIndex][1] == TicTacToe.matrix[rowIndex][2]  ) {
                winnerName = TicTacToe.matrix[rowIndex][0] ;       
            }      
        }
        for (var colIndex = 0 ; colIndex < 3 ; colIndex++ ){
            if ( TicTacToe.matrix[0][colIndex] == TicTacToe.matrix[1][colIndex] == TicTacToe.matrix[2][colIndex]  ) {
                winnerName = TicTacToe.matrix[rowIndex][0] ;       
            }      
        }
        TicTacToe.namePlayerWinner = winnerName;
        return winnerName;
    }

    noMoreTurns() {
        for (var rowIndex = 0 ; rowIndex < 3 ; rowIndex++ ){
            for (var colIndex = 0 ; colIndex < 3 ; colIndex++ ){
                if ( TicTacToe.matrix[rowIndex][colIndex] === null ) {
                    return false
                }
            }
        }
        return true
    }

    isDraw() {
        if ( TicTacToe.isFinished() && ( TicTacToe.getWinner() === null ) ){
            return true;
        }
        else { 
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return TicTacToe.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
