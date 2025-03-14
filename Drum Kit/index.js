const drumSounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3"
};

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        let key = this.getAttribute("data-key");
        playSound(key);
        buttonAnimation(key);
    });
});

document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();
    if (drumSounds[key]) {
        playSound(key);
        buttonAnimation(key);
    }
});

function playSound(key) {
    let audio = new Audio(drumSounds[key]);
    audio.play();
}

function buttonAnimation(key) {
    let activeButton = document.querySelector(`[data-key="${key}"]`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 200);
    }
}
