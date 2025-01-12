function clickZirc() {
  document.getElementById("lang-zirc").setAttribute("data-active", "true");
  document.getElementById("lang-py").setAttribute("data-active", "false");
}

function clickPy() {
  document.getElementById("lang-py").setAttribute("data-active", "true");
  document.getElementById("lang-zirc").setAttribute("data-active", "false");
}
