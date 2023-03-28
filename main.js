// NaVBAR change background when scrolling
window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 100);
});

//open the faqs answers
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        //changing the plus icon to minus
        const icon = faq.querySelector(".faq_icon i");
        if (icon.className == "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    });
});

//nav menu open and close when max width is 1024px
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});