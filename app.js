let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn0 = true; // lets start with 0s turn
let count = 0; // number of turns
// storing the win patterns 
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; 
// you can also use for of loop
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0){
            box.style.color="#DC143C";
            box.innerText="0";
            turn0=false;
            count++;
        }
        else{
            box.innerText="X";
            box.style.color="264027";
            turn0=true;
            count++;
        }
        box.disabled=true;
        checkWinner();
    });
});
let draw =true;
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos1val===pos2val && pos2val===pos3val){
            console.log("Winner ", pos1val);
            winner(pos1val);
            disableBoxes();
            newGame();
            draw=false;
        }
    }
    if(count==9 && draw===true){
        won.innerText=`Match is Drawn`;
        won.classList.add("winner");
        won.classList.remove("hidden");
        newGame();
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const newGame =()=>{
    reset.classList.remove("hidden");
}

const resetGame=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
    reset.classList.add("hidden");
    count=0;
    won.classList.add("hidden");
}

reset.addEventListener("click",resetGame);

let won = document.querySelector("#winner");

let winner = (val)=>{
    won.innerText=`Winner is ${val}`;
    won.classList.remove("hidden");
    won.classList.add("winner");
}
