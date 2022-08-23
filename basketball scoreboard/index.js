let homeTotal = 0
let guestTotal = 0
let homescore = document.getElementById("homeEl")
let guestscore = document.getElementById("guestEl")

function homeOne(){
    homeTotal += 1
    homescore.textContent = homeTotal
}

function homeTwo(){
    homeTotal += 2
    homescore.textContent = homeTotal
}
function homeThree(){
    homeTotal += 3
    homescore.textContent = homeTotal
}


function guestOne(){
    guestTotal += 1
    guestscore.textContent = guestTotal
}

function guestTwo(){
    guestTotal += 2
    guestscore.textContent = guestTotal
}

function guestThree(){
    guestTotal += 3
    guestscore.textContent = guestTotal
}

function newGame(){
    guestscore.textContent = 0
    homescore.textContent = 0
}
function randGame(){
    let home = Math.floor(Math.random() * 99)
    let away = Math.floor(Math.random() * 99)
    guestscore.textContent = away
    homescore.textContent = home
    homeTotal = home
    guestTotal = away
}