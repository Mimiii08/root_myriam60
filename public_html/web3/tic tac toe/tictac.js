let box = document.querySelectorAll(".box");
let restartbutton = document.querySelector("#restartbutton");
let paneaumessage = document.querySelector("message");

let playerX = true;
let winner = '';
const patrons = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

for (let boite of box) {
    boite.active = true;
    boite.addEventListener("click", function() {
        if (boite.active) {
       if (playerX) {
        boite.innerText = "X";
        playerX = false;
       }
       else {
        boite.innerText = "O";
        playerX = true;
       }
    }
        boite.active = false;
        valide();
    });
}

const valide = function () {
for (let patron of patrons) {
    let val1 = box[patron[0]].innerText;
    let val2 = box[patron[1]].innerText;
    let val3 = box[patron[2]].innerText;

    if (val1 &&
        val1 === val2 &&
        val1 === val3) {
            console.log(`Le gagnant est ${val1}`);
            for (let boite of box) {
                boite.active = false;
            }
        }
    
}
}


restartbutton.addEventListener("click", function () {
    for (let boite of box) {
        boite.active = true;
        boite.innerText = " ";
        playerX = true;
    }
});