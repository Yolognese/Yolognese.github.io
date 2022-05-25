function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

document.getElementById("js_test").innerHTML = "JavaScript is here..!";

function boxGlow() {
  document.getElementById("box").style.borderColor = "red";
}
