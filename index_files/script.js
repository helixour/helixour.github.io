var zelda = document.getElementById("zelda");

function easterEgg() {
    document.getElementById("pfp").outerHTML = '<img style="width: auto; height: auto;" class="avatar" id="pfp" src="/coolstuff/rotating raccoon.gif" alt="pfp">';
    zelda.cloneNode(true).play();
}