let isX = 1
let mark = ["","","",
            "","","",
            "","","",]
let winner = ""
let message = document.querySelector("#message")

function turn(){
    if (isX % 2 != 0){
        isX++
        return true
    }
    else{
        isX++
        return false
    }
}

function win(){
    if( mark[0] == "x" && mark[1] == "x" && mark[2] == "x" ){
        winner = "x"
        return true
    }
    if( mark[3] == "x" && mark[4] == "x" && mark[5] == "x" ){
        winner = "x"
        return true
    }
    if( mark[6] == "x" && mark[7] == "x" && mark[8] == "x" ){
        winner = "x"
        return true
    }

    if( mark[0] == "x" && mark[3] == "x" && mark[6] == "x" ){
        winner = "x"
        return true
    }
    if( mark[1] == "x" && mark[4] == "x" && mark[7] == "x" ){
        winner = "x"
        return true
    }
    if( mark[2] == "x" && mark[5] == "x" && mark[8] == "x" ){
        winner = "x"
        return true
    }

    if( mark[0] == "x" && mark[4] == "x" && mark[8] == "x" ){
        winner = "x"
        return true
    }
    if( mark[2] == "x" && mark[4] == "x" && mark[6] == "x" ){
        winner = "x"
        return true
    }

    if( mark[0] == "o" && mark[1] == "o" && mark[2] == "o" ){
        winner = "o"
        return true
    }
    if( mark[3] == "o" && mark[4] == "o" && mark[5] == "o" ){
        winner = "o"
        return true
    }
    if( mark[6] == "o" && mark[7] == "o" && mark[8] == "o" ){
        winner = "o"
        return true
    }

    if( mark[0] == "o" && mark[3] == "o" && mark[6] == "o" ){
        winner = "o"
        return true
    }
    if( mark[1] == "o" && mark[4] == "o" && mark[7] == "o" ){
        winner = "o"
        return true
    }
    if( mark[2] == "o" && mark[5] == "o" && mark[8] == "o" ){
        winner = "o"
        return true
    }

    if( mark[0] == "o" && mark[4] == "o" && mark[8] == "o" ){
        winner = "o"
        return true
    }
    if( mark[2] == "o" && mark[4] == "o" && mark[6] == "o" ){
        winner = "o"
        return true
    }
}

function hide(){
    message.style = "display: none"
}

function checked(id){
    let vez
    if (mark[id] == ""){vez = turn()}    
    let element = document.getElementById(id)

    if (vez == true){
        mark[id] = "x"
    }
    else{
        mark[id] = "o"
    }

    if (vez == true){
        element.style = 'background: url("https://img.icons8.com/nolan/344/x.png");background-repeat: no-repeat;background-size: cover; background-position: center center; border: 3px solid #00000030'
    }
    if (vez == false){
        element.style = 'background: url("https://img.icons8.com/nolan/344/circled.png");background-repeat: no-repeat;background-size: cover; background-position: center center; border: 3px solid #00000030'
    }

    if (win() == true ){
        message.style.display = "flex"
        if (winner = "x"){
            message.innerHTML = 
            `<div class="box">
                <button onclick="hide()">X</button>
                <img src="https://img.icons8.com/nolan/344/x.png" alt="">
                <h2>ganhou!</h2>
            </div>`
        }
        else if (winner = "o"){
            message.innerHTML = 
            `<div class="box">
                <button onclick="hide()">X</button>
                <img src="https://img.icons8.com/nolan/344/circled.png" alt="">
                <h2>ganhou!</h2>
            </div>`
        }
    }

}
