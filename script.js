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
let i = 0;
let playerScore = 0;
let cpuScore = 0;
function playRound(e){
    let playerGuess = e.target.className;
    //for (let i = 0; i < 5; i++){
        
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //maybe everything inside of the green marks needs to be outside of the function that 
        //way it doesn't get called everytime. Also, how do you append once and then not append again but instead update. 
        //perhaps you could set some variable to 0 and only append if that variable is 0
        //then you could increment that variable so that it doesnt get printed on the screen again everytime you click a selection. 
        //this will depend on on the variables changing and causing the text to chage. 

//adding classes
    if (i == 0){
        const container = document.querySelector('#container');
        // creating required elements
        const scoreContainer = document.createElement('div');
        const scoreboard = document.createElement('div');
        const p1 = document.createElement('div');
        const p2 = document.createElement('div');
        const p1score = document.createElement('div');
        const p2score = document.createElement('div');
        const left = document.createElement('div');
        const right = document.createElement('div');
        const winner = document.createElement('div');
        //playRound();
        scoreContainer.classList.add('scoreContainer');
        p1.classList.add('p1');
        p2.classList.add('p2');
        left.classList.add('score');
        right.classList.add('score');
        p1score.classList.add('score');
        p2score.classList.add('score');
        scoreboard.classList.add('scoreBoard');
        winner.classList.add('winner');
        //adding text
        scoreContainer.textContent = 'Scoreboard';
        p1.textContent = 'User';
        p2.textContent = 'CPU';
        p1score.textContent = `${playerScore}`;
        p2score.textContent = `${cpuScore}`;
////////////////////////////////////////////////////////////////////////////////////



        //appending creations
        container.appendChild(scoreContainer);
        scoreContainer.appendChild(scoreboard);
        scoreboard.appendChild(left);
        scoreboard.appendChild(right);
        right.appendChild(p1);
        left.appendChild(p2);
        right.appendChild(p1score);
        left.appendChild(p2score);
        
    }
        //let playerGuess = prompt('Rock, Paper, or Scissors?', "Enter Response:");
        playerGuess = playerGuess.toLowerCase();
        if (playerGuess == 'rock' || playerGuess == 'scissors' || playerGuess == 'paper'){
            let cpuGuess = computerPlay();
            let winner = rps(cpuGuess, playerGuess);
            if (winner == 'win'){
                playerScore += 1;
                p1score.textContent=`${playerScore}`;
            }  else if (winner == 'cpu'){
                cpuScore +=1;
                p2score.textContent=`${cpuScore}`;
            }
        }
        if (playerScore == 5){
            winner.textContent = 'You Win!';
        } else if (cpuScore == 5){
            winner.textContent = 'You Lose!';
        }
        i++;
}

