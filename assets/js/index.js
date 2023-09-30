const btnCall = document.querySelector("#call-button");
const burgerClose = document.querySelector(".burger-close");
const burgerButton = document.querySelector(".burger-button");
const orderModal = document.querySelector(".order");
const closeCallModal = document.querySelector(".order-close");
const body = document.querySelector("body");
const burger = document.querySelector(".burder");

const toggleModalCall = () => {
  orderModal.classList.toggle("modal-hidden");
};

function toggleBurgerModal() {
  burger.classList.toggle("modal-hidden");
}

closeCallModal.addEventListener("click", toggleModalCall);
btnCall.addEventListener("click", toggleModalCall);
burgerButton.addEventListener("click", toggleBurgerModal);
burgerClose.addEventListener("click", toggleBurgerModal);
