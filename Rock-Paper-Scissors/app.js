let userSore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userSorePara=document.querySelector("#user-score");
const compSorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const genCompChoice = () => {
    //rock,paper,choice
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText="Game was Draw,Please play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userSore++;
        userSorePara.innerText=userSore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compSorePara.innerText=compScore;
        msg.innerText=`You loose ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor="Red";
    }
}

const playGame= (userChoice) => {
    console.log("User choice=",userChoice);
    //Computer Choice
    const compChoice=genCompChoice();
    console.log("Computer choice=",compChoice);

    if(userChoice===compChoice)
    {
        //Draw Game
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

