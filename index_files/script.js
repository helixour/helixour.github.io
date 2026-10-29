var zelda = document.getElementById("squishSfx");

function easterEgg() {
    document.getElementById("pfp").outerHTML = '<img style="width: 50px;" class="avatar" id="pfp" src="/coolstuff/rotating raccoon.gif" alt="pfp">';
    zelda.cloneNode(true).play();
}