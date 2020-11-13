var home = document.getElementById("part1");
var about = document.getElementById("part2");
var contact = document.getElementById("part3");
function homeFunction() {
    home.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
}
function aboutFunction() {
    home.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
}
function contactFunction() {
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
}
