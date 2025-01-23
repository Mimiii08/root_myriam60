console.log("👩🏽‍💻 Loaded!;)");


const myCircles = document.querySelectorAll(".circle");

myCircles.forEach(function(item, index){
    item.addEventListener("click", function() {
        alert("circle clicked: " + index);
    })
}
)