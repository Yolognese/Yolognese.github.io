

function boxGlow() {
  var box = document.getElementById("box");
  box.style.transition = "background 2s linear 0s";
  box.style.backgroundColor = "#ffffff";
  box.style.border = "2px solid black";
  setTimeout(boxGlowBack, 2000);
}
function boxGlowBack() {
  var box = document.getElementById("box");
  box.style.transition = "background 2s linear 0s";
  box.style.backgroundColor = "#a7a7a7";
  setTimeout(boxGlow, 2000);
}
function weiter() {
  
}