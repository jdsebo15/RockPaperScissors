//UI for the Game
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));



/////////////BELOW IS THE ACTUAL GAME////////////////////////////////////////////
function computerPlay(){
    let guess = Math.random()*10;
    if (guess < 3.3){
        return "rock";
    } else if (guess >= 3.3 && guess <= 6.6){
        return "paper";
    } else{
        return "scissors";
    }
}
function rps(cpu,player){   
    //cpu = 'scissors'; used to test each possibility without having to mess with the random generator above
    //player = 'scissors';
    //console.log(cpu);
    //console.log(player); //used for testing
    if(cpu == 'rock'){
        //console.log('entered1');  I was receiving "It's a tie" every time because i was using single equal signs. Therefore I set these console logs to see where my code was going in the if statements.
        if (player == 'rock'){
            //console.log('entered4'); I'm sure there is a better way to do this but i haven't learned it yet.
            //alert("It's a Tie!");
            return 'tie';
        } else if (player == 'scissors'){
            //console.log('entered5');
            //alert("You Lost!");
            return 'cpu';
        } else {
            //alert("You Win!");
            return 'win';
        }
    } else if (cpu == 'scissors'){
        //console.log('entered2');
        if (player == 'scissors'){
            //alert("It's a Tie!");
            return 'tie';
        } else if (player == 'paper'){
            //alert("You Lost!");
            return 'cpu';
        } else {
            //alert("You Win!");
            return 'win';
        }
    } else if (cpu == 'paper'){
        //console.log('entered3');
            if (player == 'paper'){ //it looks like single equal signs made this wrong most of the time. it returns true and then enters it and does it's a tie each time.
            //alert("It's a Tie!");
                return 'tie';
            } else if (player == 'rock'){
            //alert("You Lost!");
                return 'cpu';
            } else {
            //alert("You Win!");
                return 'win';

        }
        }   
    }
let playerScore = 0;
let cpuScore = 0;
function playRound(e){
    let playerGuess = e.target.className;
    //for (let i = 0; i < 5; i++){
    const p1score = document.querySelector('.left');   
    const p2score = document.querySelector('.right');
    const result = document.querySelector('.result');
    
        //let playerGuess = prompt('Rock, Paper, or Scissors?', "Enter Response:");
        playerGuess = playerGuess.toLowerCase();
        if (playerGuess == 'rock' || playerGuess == 'scissors' || playerGuess == 'paper'){
            let cpuGuess = computerPlay();
            let winner = rps(cpuGuess, playerGuess);
            if (winner == 'win'){
                playerScore += 1;
                p1score.textContent=`Player Score: ${playerScore}`;
                result.textContent = 'You Win!';
            }  else if (winner == 'cpu'){
                cpuScore +=1;
                p2score.textContent=`Computer Score: ${cpuScore}`;
                result.textContent = 'You Lose!';
            }  else if (winner == 'tie'){
                result.textContent = 'It was a tie! Pick again.'
            }
        }
        if (playerScore == 5){
            result.textContent = `You won the game ${playerScore} games to ${cpuScore} games`;
            playerScore = 0;
            cpuScore = 0;
            p1score.textContent=`Player Score: ${playerScore}`;
            p2score.textContent=`Computer Score: ${cpuScore}`;

        } else if (cpuScore == 5){
            result.textContent = `You lost the game ${playerScore} games to ${cpuScore} games`;
            playerScore = 0;
            cpuScore = 0;
            p1score.textContent=`Player Score: ${playerScore}`;
            p2score.textContent=`Computer Score: ${cpuScore}`;
        }
    }

