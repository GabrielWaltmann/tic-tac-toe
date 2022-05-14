/* Possibilities */
let isStar = 1

/* Positions */
let mark = ["","","",
            "","","",
            "","","",]

/* Winner */
let winner = ""

/* Result */
let message = document.querySelector("#message")

/* Check if it's the turn of a star or a diamond */ 
function turn(){
    if (isStar % 2 != 0){
        isStar++
        return true
    }
    else{
        isStar++
        return false
    }
}

/* chances of vitory */ 
function win(){
/* with Star */ 
    if( mark[0] == "star" && mark[1] == "star" && mark[2] == "star" ){
        winner = "star"
        return true
    }
    if( mark[3] == "star" && mark[4] == "star" && mark[5] == "star" ){
        winner = "star"
        return true
    }
    if( mark[6] == "star" && mark[7] == "star" && mark[8] == "star" ){
        winner = "star"
        return true
    }
    if( mark[0] == "star" && mark[3] == "star" && mark[6] == "star" ){
        winner = "star"
        return true
    }
    if( mark[1] == "star" && mark[4] == "star" && mark[7] == "star" ){
        winner = "star"
        return true
    }
    if( mark[2] == "star" && mark[5] == "star" && mark[8] == "star" ){
        winner = "star"
        return true
    }
    if( mark[0] == "star" && mark[4] == "star" && mark[8] == "star" ){
        winner = "star"
        return true
    }
    if( mark[2] == "star" && mark[4] == "star" && mark[6] == "star" ){
        winner = "star"
        return true
    }

/* with Diamond */ 
    if( mark[0] == "diamond" && mark[1] == "diamond" && mark[2] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[3] == "diamond" && mark[4] == "diamond" && mark[5] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[6] == "diamond" && mark[7] == "diamond" && mark[8] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[0] == "diamond" && mark[3] == "diamond" && mark[6] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[1] == "diamond" && mark[4] == "diamond" && mark[7] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[2] == "diamond" && mark[5] == "diamond" && mark[8] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[0] == "diamond" && mark[4] == "diamond" && mark[8] == "diamond" ){
        winner = "diamond"
        return false
    }
    if( mark[2] == "diamond" && mark[4] == "diamond" && mark[6] == "diamond" ){
        winner = "diamond"
        return false
    }
}

/* Box marked */
function checked(id){
    /* Check next player */
    let nextTime 

    /* Check next player */
    if (mark[id] == ""){nextTime = turn()}    
    let element = document.getElementById(id)
    if (nextTime == true){
        mark[id] = "star"
    }
    else{
        mark[id] = "diamond"
    }

    /* if star played */
    if (nextTime == true){
        element.style = 
        `background: url("images/star.png");
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center center; 
        border: 3px solid #00000030`
    }

    /* if diamond played */
    if (nextTime == false){
        element.style = `background: url("images/diamond.png");
        background-repeat: no-repeat;
        background-size: 80%; 
        background-position: center center; 
        border: 3px solid #00000030`
    }

    /* if star won */
    if (win() == true ){
        message.style.display = "flex"
        message.innerHTML = 
        `<div class="box">
            <h2>Star é o ganhador!</h2>
            <ion-icon name="refresh-outline" id="reset" onclick="reset()"></ion-icon>
        </div>`
    }
    
    /* if diamond won */
    else if (win() == false ){
        message.style.display = "flex"
        message.innerHTML = 
        `<div class="box">

            <h2>Diamond é o ganhador!</h2>

            <ion-icon name="refresh-outline" id="reset" onclick="reset()"></ion-icon>

        </div>`
        
    }}

/* reset game */
function reset(){
    for(i = 0; i<mark.length; i++){
        mark[i] = ""
        document.getElementById(i).style = 'background: #07072B; border: none'}
    message.style.display = "none"
}
