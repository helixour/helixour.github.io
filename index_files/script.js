var zelda = document.getElementById("zelda");

function easterEgg() {
    document.getElementById("pfp").outerHTML = '<img style="width: auto; height: auto;" class="avatar" id="pfp" src="/coolstuff/spinning raccoon cropped.gif" alt="pfp">';
    zelda.cloneNode(true).play();
}