const toggler = document.querySelectorAll(".faqBtn");

toggler.forEach(toggler => {
    toggler.addEventListener("click", () => {
        toggler.parentNode.classList.toggle("active");
    })
})

const speedyBtn = document.querySelectorAll(".speedyBtn")
const slide = document.querySelectorAll(".slide")


const nextSlide = () => {
    const active = document.querySelector('.active'); //get active class
    active.classList.remove("active"); //remove active class

    if (active.nextElementSibling) { //check for next active element
        active.nextElementSibling.classList.add("active") //add active to next sibling

    } else {
        slide[0].classList.add('active');
    }
}
speedyBtn.forEach((speedyBtn) => {
    speedyBtn.addEventListener("click", () => {
        nextSlide()
    })
})


const toggle = document.getElementById("toggle")
const nav = document.getElementById("nav")

toggle.addEventListener("click", () => nav.classList.toggle("active"));



const email = document.getElementById("email")
const buttons = document.querySelector(".contact")

buttons.addEventListener('submit', (e) => {
    e.preventDefault()
    email.value = ""
    document.getElementById('error').innerHTML = "Message Delivered"
})