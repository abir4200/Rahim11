var navLinks = document.getElementById("navLinks");
var hideButton = document.getElementById("hideButton");
var banner = document.getElementById("banner");

function showMenu() {
  hideButton.style.visibility = "hidden";
  banner.style.filter = "blur(3px)";
  // navLinks.style.display = "block";
  navLinks.style.right = "0";
}
function hideMenu() {
  hideButton.style.visibility = "visible";
  banner.style.filter = "blur(0px)";
  // navLinks.style.display = "none";
  navLinks.style.right = "-200px";
}
