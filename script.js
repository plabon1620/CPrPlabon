var p1b = document.getElementById("p1b");
var p2b = document.getElementById("p2b");
var p1 = document.getElementById("sp1");
var p2 = document.getElementById("sp2");
var p1s=0,p2s=0;
var sc = document.getElementById("sn");
var inpu = document.getElementById("in");
var s;
var wins = 5;


var gameon = true;



p1b.addEventListener("click",function(){ 
    if(p1s<wins && gameon){
    p1s++;
    p1.textContent= p1s;
        if(p1s===wins){
            gameon=false;
        }
    }

    if(p1s>=wins){
        alert("player 1 won!");
       p1.classList.add("winner");
       p1b.classList.add("winner");
        gameon=false;
    }
});

p2b.addEventListener("click",function(){

        if(p2s<wins && gameon ){
        p2s++;
        p2.textContent= p2s;
        if(p2s===wins){
            gameon=false;
        }
        }

        if(p2s>=wins){
            
            
                alert("player 2 won!");
                p2.classList.add("winner");
                p2b.classList.add("winner");
            
            gameon= false;
        }
});

var res = document.getElementById("rb");


res.addEventListener("click",function(){
    p1.classList.remove("winner");
    p1.textContent="0";
    inpu.value = 5;
    p1s=0;
    p2s=0;
    wins = 5;
    sc.textContent = "5";
    p1b.classList.remove("winner");
    p2.classList.remove("winner");
    p2b.classList.remove("winner");
    p2.textContent = "0";
    gameon=true;
});

inpu.addEventListener("change",function(){
    sc.textContent = inpu.value;
    wins = Number(inpu.value);
    if(p1s!==0||p2s !==0){
    resetw();
    }
});


function resetw(){
    p1.classList.remove("winner");
    p1.textContent="0";
  
    p1s=0;
    p2s=0;
    
    
    p1b.classList.remove("winner");
    p2.classList.remove("winner");
    p2b.classList.remove("winner");
    p2.textContent = "0";
    gameon=true;
}