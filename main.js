const prompt = require('prompt-sync')({sigint: true});

const direction = prompt('Which direction do you want to move?');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
        this.playerRow = 0;
        this.playerCol = 0;
    }

    printField() {
        for(let row of this.field) {
            console.log(row.join(''));
        }
    }

    move(direction) {
        let newRow = this.playerRow;
        let newCol = this.playerCol;

        // Updates new row and col based on input
        if (direction === 'up') {
            newRow -= 1;
        } else if ( direction === 'down') {
            newRow += 1;
        } else if (direction === 'left') {
            newCol -= 1;
        } else if (direction === 'right') {
            newCol += 1;
        }

        // Checks if player is within the field bounds
        if (newRow < 0 || 
            newRow >= this.field.length || 
            newCol < 0 || 
            newCol >= this.field[0].length
        ) {
            console.log('Your out of bounds');
            return false;
        }
    }
}

const myField = new Field([
['*', '░', 'O'],
['░', 'O', '░'],
['░', '^', '░'],
]);

function playGame(){
    let rowIndex = 0;
    let columnIndex = 0;


    //prints out the field
    myField.print()
    // Gets the user input
    let userInput = prompt('Which Direction?')

}

playGame();