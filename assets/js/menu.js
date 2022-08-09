const menuNavbar = document.querySelector("#header-menu");
window.addEventListener("scroll", () => {
    const scrollBar = Math.floor(scrollY);
    if (scrollBar > 80) {
        menuNavbar.classList.add("sticky");
    }else {
        menuNavbar.classList.remove("sticky");
    }
})

let index = 0;
animationFadeTop();
function animationFadeTop() {
    const spanNewsSlider = document.querySelectorAll(".content-new-news-slider span");
    for (let i = 0; i < spanNewsSlider.length; i++) {
        spanNewsSlider[i].style.display = "none";
    }
    index++;
    if ( index > spanNewsSlider.length) {
        index = 1;
    }
    
    
    spanNewsSlider[index-1].style.display = "block";

    setTimeout(animationFadeTop, 3000)
}

document.addEventListener("readystatechange", (e) => {
    document.querySelector("#loader").style.display = "none";
})
document.querySelector("#menu-humb").addEventListener("click", () => {
    document.querySelector("#menu-humb").classList.toggle("active-menu");
    document.querySelector(".menu-mobile").classList.toggle("active");
})