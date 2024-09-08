let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let turnO = true;//playerx,playery
let newGameBtn = document.querySelector("#newBtn");
let newCont = document.querySelector(".msg");
let para = document.querySelector("#msgCont");
const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//3D array
const resetGame = () => {
    turnO = true;
enableBtn();
newCont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
         box.innerText = "X";
         turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
}
const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}
const checkWinner = () => {
for(let pattern of win){                    
   // console.log(pattern[0],pattern[1],pattern[2]);
let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;
const showWinner = (win) => {
    
    newCont.classList.remove("hide");
    para.innerText = `Congratulations, winner is ${pos1}`;
};
if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1 === pos2 && pos2 === pos3){
        console.log("winner", pos1);
        disableBtn();
        showWinner();
    }
}
}
};
reset.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
