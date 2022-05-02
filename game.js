let isX = 1
let mark = ["","","","","","","","","",]

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
    if (mark[0] != "" && mark[3] != "" && mark[6] != ""){
        return true
    }

    else if (mark[1] != "" && mark[4] != "" && mark[7] != ""){
        return true
    }
    
    else if (mark[2] != "" && mark[5] != "" && mark[8] != ""){
        return true
    }

    else if (mark[0] != "" && mark[1] != "" && mark[2] != ""){
        return true
    }

    else if (mark[3] != "" && mark[4] != "" && mark[5] != ""){
        return true
    }

    else if (mark[6] != "" && mark[7] != "" && mark[8] != ""){
        return true
    }

    else if (mark[0] != "" && mark[4] != "" && mark[8] != ""){
        return true
    }

    else if (mark[6] != "" && mark[4] != "" && mark[2] != ""){
        return true
    }
    else{
        return false
    }
}

function checked(id){
    let vez
    if (mark[id] == ""){vez = turn()}    let element = document.getElementById(id)
    mark[id] = id

    if (vez == true){
        element.style = 'background: url("https://img.icons8.com/nolan/344/x.png");background-repeat: no-repeat;background-size: cover; background-position: center center; border: 3px solid #00000030'
    }
    if (vez == false){
        element.style = 'background: url("https://img.icons8.com/nolan/344/circled.png");background-repeat: no-repeat;background-size: cover; background-position: center center; border: 3px solid #00000030'
    }

    if (win() == true){
        console.log("GameOver")
    }

}
