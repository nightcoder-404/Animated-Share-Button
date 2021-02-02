const Container = document.querySelector(".container");
const PrimaryBtn = document.getElementById("main-btn");

PrimaryBtn.addEventListener("click", () => {
    Container.classList.toggle("active");
});



