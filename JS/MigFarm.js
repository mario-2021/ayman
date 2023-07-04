let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class menu-active on Button
    this.classList.toggle("menu-active");

    // Toggle Class Open on Links
    tLinks.classList.toggle("open");
};

// Stop Propagation
tLinks.onclick = function (e) {
    e.stopPropagation();
}