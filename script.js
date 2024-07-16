
var lists = document.querySelectorAll(".list");
var rightbox = document.querySelector("#right");
var leftbox = document.querySelector("#left");

lists.forEach(function(val){
    val.addEventListener("dragstart", function(e) {
        var selected = e.target;
        rightbox.addEventListener("dragover", function(e) {
            e.preventDefault(); 
        }); 
        rightbox.addEventListener("drop", function(e) {
            e.preventDefault();
            rightbox.appendChild(selected);
            selected = "";
        });
        leftbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        leftbox.addEventListener("drop", function(e) {
            e.preventDefault();
            leftbox.appendChild(selected);
            selected = "";
        });
    });
});
