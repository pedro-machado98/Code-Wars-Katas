/*
Let's play! You have to return which player won! In case of a draw return Draw!
Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    
    if (p1 === p2){
        return 'Draw!'
    }
    
    let resp = {
        'rock':'paper',
        'paper':'scissors',
        'scissors':'rock',
    }
    
    if( p1 === resp[p2]){
        return 'Player 1 won!'
    } 
    return 'Player 2 won!'
    
};


console.log(rps('rock','paper'));
