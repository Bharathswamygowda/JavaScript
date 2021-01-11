const navSlide = () => {
const mobileCTA = document.querySelector(".cta-menu");
const nav = document.querySelector(".navigation");

// Toggle Nav
mobileCTA.addEventListener("click", () => {
nav.classList.toggle("responsive");
});
};

const app = () => {
navSlide();
};

app();



// carousel
$('.testimonials-box-carasolue').owlCarousel({
loop: false,
dots: false,
center: false,
stagePadding: 10,
nav: false,
autoHeight: true,
responsive: {
0: {
items: 1,
margin: 20,

},
600: {
items: 1,
margin: 20,

},
1000: {
items: 3,
margin: 40
}
}
})