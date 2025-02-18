var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // Show or hide the left container based on scroll direction
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.left-container').style.left = "0"; // Show left sidebar
        document.querySelector('.app-linker').style.right = "0"; // Show app linker
    } else {
        document.querySelector('.left-container').style.left = "-90px"; // Hide left sidebar
        document.querySelector('.app-linker').style.right = "-90px"; // Hide app linker
    }

    prevScrollpos = currentScrollPos;
}