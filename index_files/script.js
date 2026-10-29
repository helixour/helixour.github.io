var zelda = document.getElementById("zelda");

function easterEgg() {
    document.getElementById("pfp").outerHTML = '<img style="width: 50px; height: 50px;" class="avatar" id="pfp" src="/coolstuff/rotating raccoon.gif" alt="pfp">';
    zelda.cloneNode(true).play();
}