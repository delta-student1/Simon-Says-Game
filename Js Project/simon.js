let gameSeq = [];
let userSeq = [];

let btn = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener ("keypress", function() {
    
    if(started == false)
    {
        console.log("game started");
        started=true;
    }
    levelup ();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 200);
}

function levelup (){
    userSeq = [];
    level ++;
    h2.innerText= `Level ${level} `;

    let random = Math.floor(Math.random() * 3);
    let randcolor = btn[random];
    let rndbtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);
    console.log(gameSeq);

    btnFlash(rndbtn);
}

function Answer(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over your score was <b>${level}</b> <br> press any key for restart`;
        reset();
    }
}

function btnpress (){
    let btn = this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
   userSeq.push(usercolor);
   Answer(userSeq.length-1);
}

let btnall = document.querySelectorAll(".btn");

for(btns of btnall){
    btns.addEventListener("click", btnpress);
}

function reset (){
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}