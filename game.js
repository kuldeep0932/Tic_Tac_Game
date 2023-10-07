
count="1";

function fill(event){
    if(count<=9){
    if(count%2!=0){
        document.getElementById(event.id).innerHTML="X";
    }else{
        document.getElementById(event.id).innerHTML="O";
    }
    count++;
    // checkWinner();
    checkwin();
    console.log(count);
}else{
    // document.querySelectorAll(".box").disabled = true;


    // resetbox();
   
}

}




// function to check the winner
function checkwin(){
    // let array for the winning combination 

    const wincombs = [
        ["box-1", "box-2", "box-3"],
        ["box-4", "box-5", "box-6"],
        ["box-7", "box-8", "box-9"],
        ["box-1", "box-4", "box-7"],
        ["box-2", "box-5", "box-8"],
        ["box-3", "box-6", "box-9"],
        ["box-1", "box-5", "box-9"],
        ["box-3", "box-5", "box-7"]
    ];

    let winnerFound = false;
    // checking the combinations
    for(i=1; i < wincombs.length; i++){
        const [a, b, c] = wincombs[i];
        const boxa = document.getElementById(a).innerHTML;
        const boxb = document.getElementById(b).innerHTML;
        const boxc = document.getElementById(c).innerHTML;
        if(boxa && boxa==boxb && boxa==boxc){
            document.getElementById(a).classList.add("winneranim");
            document.getElementById(b).classList.add("winneranim");
            document.getElementById(c).classList.add("winneranim");


            document.getElementById("winner").innerHTML=boxa + " is winner";
            setTimeout(function () {
            document.getElementById("winmain_container").style.display="flex";
            },2000);
            winnerFound =true;
        }        
    }
    if(winnerFound){
        document.querySelectorAll(".box").forEach(box => {
            box.removeAttribute("onclick");
        });
    }
    return null;

}





// function to restart game
function resetbox(){
    window.location.reload();
}



// function to show the game container onclick of the play now button
let play_now_button = document.getElementById("play_now");

function playNow(){
    let game_cont = document.getElementById("game_main");

    if(game_cont.style.display=== "none"){

        game_cont.style.display = "flex";

    }else{
        game_cont.style.display="flex";

        document.getElementById("playnow_container").style.display = "none";
    }
}

play_now_button.addEventListener("click", playNow);