// Source file for sticky titlebar

window.addEventListener("load", (event) => {
    titlebar = document.getElementsByClassName("titlebar")[0];
    guard = document.getElementById("scrollguard");
    options = {
        root:null,
        threshold:[0]
    };
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting)
                titlebar.classList.remove("stickytitlebar");
            else
                titlebar.classList.add("stickytitlebar");
        });
    } , options);
    observer.observe(guard);
}, false);


/* vim: set autoindent tabstop=8 softtabstop=4 expandtab shiftwidth=4: */
