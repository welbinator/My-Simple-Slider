// gives numbered classes to each slide and activates slide1

const colors = ["#2176FF", "#33A1FD", "#FDCA40", "#F79824", "#31393C"];
const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
let slideIndex = 1;


function slidesInit() {
    slides.forEach((slide) => {
        slide.classList.add("slide" + slideIndex);
        slide.style.backgroundColor = colors[slideIndex - 1];
        slideIndex++;
    })
    slideIndex = 1;
    document.querySelector(".slide.slide" + slideIndex).classList.add("active");
}
slidesInit();

function toNextSlide() {
    document.querySelector(".slide.slide" + slideIndex).classList.remove("active");
    if (slideIndex == slides.length) {
        slideIndex = 1;
        console.log("back to" + slideIndex)
    } else {

        slideIndex++;
        console.log("new index is" + slideIndex)
    }
    document.querySelector(".slide.slide" + slideIndex).classList.add("active");


}

nextButton.addEventListener("click", () => {
    toNextSlide();
})
