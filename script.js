//let guess = 0; // I hav been setting my variables up here so that they can be called in the console. going forward i'll use console.log instead so i don't have to type in the console.
//let cpuGuess = 0;
//let winner = 0;
let playerScore = 0;
let cpuScore = 0;
for (let i = 0; i < 5; i++){
    console.log(i);
    let playerGuess = prompt('Rock, Paper, or Scissors?', "Enter Response:");
    playerGuess = playerGuess.toLowerCase();
    if (playerGuess == 'rock' || playerGuess == 'scissors' || playerGuess == 'paper'){
        let cpuGuess = computerPlay();
        let winner = rps(cpuGuess, playerGuess);
        if (winner == 'win'){
            playerScore += 1;
        }  else if (winner == 'cpu'){
            cpuScore +=1;
        }
        if (i == 4){
            if (cpuScore>playerScore){
            alert('You Lost ' + cpuScore + " games to " + playerScore + "!")
            } else {
            alert('You Won ' + playerScore + ' games to ' + cpuScore + "!")
            }
        }
    }
}
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
    console.log(cpu);
    console.log(player); //used for testing
    if(cpu == 'rock'){
        //console.log('entered1');  I was receiving "It's a tie" every time because i was using single equal signs. Therefore I set these console logs to see where my code was going in the if statements.
        if (player == 'rock'){
            //console.log('entered4'); I'm sure there is a better way to do this but i haven't learned it yet.
            alert("It's a Tie!");
            return 'tie';
        } else if (player == 'scissors'){
            //console.log('entered5');
            alert("You Lost!");
            return 'cpu';
        } else {
            alert("You Win!");
            return 'win';
        }
    } else if (cpu == 'scissors'){
        //console.log('entered2');
        if (player == 'scissors'){
            alert("It's a Tie!");
            return 'tie';
        } else if (player == 'paper'){
            alert("You Lost!");
            return 'cpu';
        } else {
            alert("You Win!");
            return 'win';
        }
    } else if (cpu == 'paper'){
        //console.log('entered3');
        if (player == 'paper'){ //it looks like single equal signs made this wrong most of the time. it returns true and then enters it and does it's a tie each time.
            alert("It's a Tie!");
            return 'tie';
        } else if (player == 'rock'){
            alert("You Lost!");
            return 'cpu';
        } else {
            alert("You Win!");
            return 'win';

        }
    }
    }