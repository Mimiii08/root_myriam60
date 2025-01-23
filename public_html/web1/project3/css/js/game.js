console.log("loaded 🥦")

const stage = document.querySelector("body")
const brocoman = document.getElementById("brocoman");


const brocoSound = new Audio("sounds/fast-whoosh-118248.mp3")

brocoman.onclick = function() {
    this.classList.toggle("move");
    brocoSound.play();

}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);

    //var coords = "translateX(" + event.clientX + "px) translateY(" + event.clientY + "px)";
    //"" '' ``
    var coords = `translateX(${event.clientX-150}px) translateY(${event.clientY-177}px)`;
    brocoman.style.transform = coords;
})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(brocoman);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        brocoman.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        brocoman.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        brocoman.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        brocoman.style.transform = coords;
    }



}
function addMyObject() {
    /*custom object*/
    let myObject = document.createElement("img")
    myObject.src = "img/carrot.svg"
    myObject.style.width = "75px"
    stage.append(myObject);

    let w = window.innerWidth - 100;
    let randoX = Math.floor((Math.random() * w) + 1);

    let h = window.innerHeight - 58;
    let randoY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;


    setTimeout(() => { myObject.remove(); addMyObject(); }, 1500)
}
addMyObject();



