function validateAuthor(correctName, inputId, revealId) {
    var input = document.getElementById(inputId).value.toLowerCase();
    if (input === correctName.toLowerCase()) {
        var reveal = document.getElementById(revealId);
        reveal.classList.add("fadeIn");
        reveal.classList.remove("invisible");
    }
}

function startAudio(audioId) {
    document.getElementById(audioId).play();
}

function stopAudio(audioId) {
    document.getElementById(audioId).pause();
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".audio-controls button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var audioId = this.getAttribute("data-audio-id");
            var action = this.getAttribute("data-action");
            if (action === "play") {
                startAudio(audioId);
            } else if (action === "pause") {
                stopAudio(audioId);
            }
        });
    });
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
if (
e.keyCode == 123 || 
(e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
(e.ctrlKey && e.shiftKey && e.keyCode == 74) || 
(e.ctrlKey && e.keyCode == 85) || 
(e.metaKey && e.altKey && e.keyCode == 67) || // NO CHEATERS FOR MAC
(e.metaKey && e.shiftKey && e.keyCode == 67) // NO MORE CMD SHIFT C FOR CHEATERS LOL
) {
return false;
}
};