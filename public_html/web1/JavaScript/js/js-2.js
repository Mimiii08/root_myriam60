console.log("JS 2 in action");

// step 1 - Selecting the element
const myShape = document.getElementById("circle");

//step 2 - adding a click event
myShape.addEventListener("click", () => {
 //  myShape.style.background = "palevioletred";
    myShape.classList.toggle("change-me");

})
