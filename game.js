
count = "1";
var current_player = "X";
// function checkcurrent(){
// if(current_player ==="X"){
//     document.getElementById("turn_player").innerHTML = "Player 2";
// }
// if(current_player =="O"){
//     document.getElementById("turn_player").innerHTML = "Player 1";
// }
// }

function fill(event) {
    if (count <= 9) {
        if (count % 2 != 0) {
            document.getElementById(event.id).innerHTML = "X";
            document.getElementById("turn_player").innerHTML = " Player 2";

        } else {
            document.getElementById(event.id).innerHTML = "O";
            document.getElementById("turn_player").innerHTML = " Player 1";

        }
        count++;
        checkwin();
        // checkcurrent();
        console.log(count);
    }
}
// function to check the winner
function checkwin() {
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
    let draw = true;
    // checking the combinations
    for (i = 0; i < wincombs.length; i++) {
        const [a, b, c] = wincombs[i];
        const boxa = document.getElementById(a).innerHTML;
        const boxb = document.getElementById(b).innerHTML;
        const boxc = document.getElementById(c).innerHTML;
        if (boxa && boxa == boxb && boxa == boxc) {
            document.getElementById(a).classList.add("winneranim");
            document.getElementById(b).classList.add("winneranim");
            document.getElementById(c).classList.add("winneranim");

            var winner = "";
            if (boxa == "X") {
                var winner = document.getElementById("player1").innerHTML;
            } else {
                var winner = document.getElementById("player2").innerHTML;
            }

            document.getElementById("winner").innerHTML = winner + " is winner";
            setTimeout(function () {
                document.getElementById("winmain_container").style.display = "flex";
            }, 2000);
            winnerFound = true;
            draw = false;
            window.sessionStorage.setItem("winner", winner);
        }
        // check the boxes are empty then this not show the match draw message
        if (!boxa || !boxb || !boxc) {
            draw = false;
        }
    }
    if (draw) {
        document.getElementById("winner").innerHTML = "Match Draw";
        document.getElementById("restart").innerHTML = "Replay" + "<i class='fa-solid fa-rotate-right'></i>"
        setTimeout(function () {
            document.getElementById("winmain_container").style.display = "flex";
        }, 2000);
    }
    if (winnerFound) {
        document.querySelectorAll(".box").forEach(box => {
            box.removeAttribute("onclick");
        });
    }
    return null;
}
// function to restart game
function resetbox() {
    window.location.reload();
    window.sessionStorage.removeItem("player1_input")
    window.sessionStorage.removeItem("player2_input")
}
// function to show the game container onclick of the play now button
let play_now_button = document.getElementById("play_now");
let game_cont = document.getElementById("game_main");
let next_btn = document.getElementById("next_step");
let player_cont = document.getElementById("player_container");
let play_now_cont = document.getElementById("playnow_container");

function playNow() {
    if (player_cont.style.display = "none") {
        player_cont.style.display = "flex";
        play_now_cont.style.display = "none";
    }
    else {
        player_cont.style.display = "none";

    }
}

function nextstep() {
    if (game_cont.style.display = "none") {
        game_cont.style.display = "flex";
        player_cont.style.display = "none";
        document.getElementById("player1").innerHTML = window.sessionStorage.getItem("player1_input");
        document.getElementById("player2").innerHTML = window.sessionStorage.getItem("player2_input");
    } else {
        game_cont.style.display = "none";
    }
}

play_now_button.addEventListener("click", playNow);
next_btn.addEventListener("click", nextstep);



// function to set the value in the session
let player1_name = document.getElementById("player1_input");
let player2_name = document.getElementById("player2_input");

function setvalue() {
    player1_name = window.sessionStorage.setItem("player1_input", document.getElementById("player1_input").value);
    player2_name = window.sessionStorage.setItem("player2_input", document.getElementById("player2_input").value);


}