// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************

// Chose nav active
const navActive = () => {
    const links = document.querySelectorAll("[nav-active]");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            links.forEach((link) => { link.classList.remove("nav-active"); });
            // Add Class
            link.classList.add("nav-active");
        })
    })
};
navActive();

// ***************************************************
// Preloader
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        setTimeout(function () {
            loader.classList.add("opacity-0");
            setTimeout(function () { 
                loader.classList.add("hidden");
            } , 200);
            
        }, 1500);
    });
});
