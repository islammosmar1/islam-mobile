function pay(){
    window.location.href="viza.html";
}


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0)
});