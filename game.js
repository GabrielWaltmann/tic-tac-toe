let turn = 1
mark = []
let check = false

var pos1 = document.querySelector ("#pos1").addEventListener("click", function () {
    insert(this.id)
});

var pos2 = document.querySelector ("#pos2").addEventListener("click", function () {
    insert(this.id)
});

var pos3 = document.querySelector ("#pos3").addEventListener("click", function () {
    insert(this.id)
});

var pos4 = document.querySelector ("#pos4").addEventListener("click", function () {
    insert(this.id)
});

var pos5 = document.querySelector ("#pos5").addEventListener("click", function () {
    insert(this.id)
});

var pos6 = document.querySelector ("#pos6").addEventListener("click", function () {
    insert(this.id)
});

var pos7 = document.querySelector ("#pos7").addEventListener("click", function () {
    insert(this.id)
});

var pos8 = document.querySelector ("#pos8").addEventListener("click", function () {
    insert(this.id)
});

var pos9 = document.querySelector ("#pos9").addEventListener("click", function () {
    insert(this.id)
});

function insert(id){
    let add = "no"

    for (i=0;i<mark.length;i++){
        if (mark[i] == id){
        }
        else{
            add = "yes"
            mark.push(id)
        }
    }

    console.log(add)
}

/* function insert(id){
    ok
    let marked = false
    marked = false

    let element = document.getElementById(id)
    
    for (i=0;i<9;i++){ // Verificar se já esta marcado
        marked = false
        if (id == mark[i]){ //se já esta marcado
            marked = true 
        }
        else{ // se não  esta marcado
            add(id)
            mark.push(id)
        }
    }

} */



/* 
let element = document.getElementById(id)

if (turn % 2 != 0){
    element.style = 'background: url("https://img.icons8.com/nolan/344/circled.png");background-repeat: no-repeat;background-size: cover; background-position: center center; border: 3px solid #00000030'
    turn++
}
else{
    element.style = 'background: url("https://img.icons8.com/nolan/344/x.png");background-repeat: no-repeat;background-size: cover; background-position: center center; border: 3px solid #00000030'
    turn++
} */