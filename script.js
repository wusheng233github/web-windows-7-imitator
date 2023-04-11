function start_onmouseover() {
document.getElementById("start").src = "./images/start_onmouseover.png";
}
function start_onmouseout() {
document.getElementById("start").src = "./images/start.png";
}
function start_ui_open() {
document.getElementById("start_ui").style.display = "block";
document.getElementById("start").onclick = start_ui_close;
}
function start_ui_close() {
document.getElementById("start_ui").style.display = "none";
document.getElementById("start").onclick = start_ui_open;
}