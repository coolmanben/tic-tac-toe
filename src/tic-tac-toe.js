class TicTacToe {
    constructor() {
        this.namePlayer = 'x';
        this.namePlayerWinner = null;
        this.matrix = [];
        for (var rowIndex = 0 ; rowIndex < 3 ; rowIndex ++ ) {
          this.matrix.push(new Array(3).fill(null))
        }
    }

    getCurrentPlayerSymbol() {
        return this.namePlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if ( this.matrix[rowIndex][columnIndex] !== null) {
            return;
        }

        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();

        if ( this.namePlayer === 'x' ) {
            this.namePlayer = 'o' ;   
        }
        else {
            this.namePlayer = 'x' ;  
        }

    }

    isFinished() {
        if ( ( this.getWinner() !== null ) || this.noMoreTurns() ){
            return true;
        }
        else { 
            return false;
        }
    }

    getWinner() {
        let winnerName = null;
        if ( ( this.matrix[0][0] === this.matrix[1][1] ) && ( this.matrix[1][1] === this.matrix[2][2] ) )  {
          winnerName = this.matrix[1][1]           
        }
        if ( ( this.matrix[0][2] === this.matrix[1][1] ) && (this.matrix[1][1] === this.matrix[2][0] ) ) {
            winnerName = this.matrix[1][1]
        }

        for (var rowIndex = 0 ; rowIndex < 3 ; rowIndex++ ){
            if ( ( this.matrix[rowIndex][0] === this.matrix[rowIndex][1] ) && (this.matrix[rowIndex][1] === this.matrix[rowIndex][2] ) ) {
                winnerName = this.matrix[rowIndex][0]        
            }      
        }
        for (var colIndex = 0 ; colIndex < 3 ; colIndex++ ){
            if ( ( this.matrix[0][colIndex ] === this.matrix[1][colIndex ] ) && (this.matrix[1][colIndex ] === this.matrix[2][colIndex ] ) )  {
                winnerName = this.matrix[0][colIndex] ;       
            }      
        }
        this.namePlayerWinner = winnerName;
        return winnerName;
    }

    noMoreTurns() {
        for (var rowIndex = 0 ; rowIndex < 3 ; rowIndex++ ){
            for (var colIndex = 0 ; colIndex < 3 ; colIndex++ ){
                if ( this.matrix[rowIndex][colIndex] === null ) {                  
                    return false
                }
            }
        }
        return true
    }

    isDraw() {
        if ( this.isFinished() && ( this.getWinner() === null ) ){
            return true;
        }
        else { 
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
