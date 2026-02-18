function getAge(dob) {
    var diffMs = Date.now() - dob.getTime();
    var ageDate = new Date(diffMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function navbar() {
    var nav = document.getElementById("myTopnav");

    if (!nav) {
        return;
    }

    if (window.scrollY > 24) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

function navsmall(toggleButton) {
    var nav = document.getElementById("myTopnav");

    if (!nav) {
        return;
    }

    toggleButton.classList.toggle("change");
    nav.classList.toggle("responsive");
}

function navb() {
    var nav = document.getElementById("myTopnav");
    var button = document.getElementById("navbut");

    if (nav) {
        nav.classList.remove("responsive");
    }

    if (button) {
        button.classList.remove("change");
    }
}

function bigimg(imageId) {
    var overlay = document.getElementById("blur2");
    var target = document.getElementById("bigimg1");

    if (!overlay || !target) {
        return;
    }

    if (!imageId) {
        overlay.style.display = "none";
        return;
    }

    var sourceImage = document.getElementById(imageId);
    if (!sourceImage) {
        return;
    }

    target.src = sourceImage.dataset.src || sourceImage.src;

    if (sourceImage.naturalWidth > sourceImage.naturalHeight) {
        target.style.width = "86vw";
        target.style.height = "auto";
    } else {
        target.style.width = "auto";
        target.style.height = "86vh";
    }

    overlay.style.display = "block";
}

function shuffleGallery() {
    var grid = document.getElementById("galleryGrid");
    if (!grid) {
        return;
    }

    var items = Array.from(grid.children);

    for (var i = items.length - 1; i > 0; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }

    items.forEach(function (item) {
        grid.appendChild(item);
    });
}

function setupReveal() {
    var elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(function (element) {
            element.classList.add("is-visible");
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });
}

function ini() {
    var overlay = document.getElementById("blur2");
    var ageNode = document.getElementById("age");
    var shuffleButton = document.getElementById("shuffleGallery");

    if (overlay) {
        overlay.style.display = "none";
    }

    if (ageNode) {
        ageNode.textContent = getAge(new Date(1967, 11, 16));
    }

    if (shuffleButton) {
        shuffleButton.addEventListener("click", shuffleGallery);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && overlay && overlay.style.display === "block") {
            overlay.style.display = "none";
        }
    });

    window.addEventListener("scroll", navbar);
    navbar();
    setupReveal();
}

document.addEventListener("DOMContentLoaded", ini);
