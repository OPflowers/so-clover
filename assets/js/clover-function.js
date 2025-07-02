var clover = document.getElementById("clover-container");
var starting_angle = 45;
var angle_range = 90;
var angle_counter = 0;
clover.addEventListener("mouseup", (mouse_press) => {
    if (mouse_press.button == 2){
        angle_counter += 1;
        clover.style.transform = "rotate(" + (starting_angle + angle_counter * angle_range) + "deg)"
    }
});

clover.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
