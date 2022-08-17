let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}