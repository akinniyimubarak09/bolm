// ================================
// MOBILE MENU
// ================================

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


// ================================
// MENU FILTER
// ================================

const filters = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish");

filters.forEach(filter => {

  filter.addEventListener("click", () => {

    // Remove active class
    filters.forEach(item => {
      item.classList.remove("active");
    });

    // Add active class
    filter.classList.add("active");

    const category = filter.dataset.filter;

    dishes.forEach(dish => {

      if (
        category === "all" ||
        dish.dataset.category === category
      ) {

        dish.classList.remove("hide");

      } else {

        dish.classList.add("hide");

      }

    });

  });

});


// ================================
// RESERVATION DATE
// ================================

const dateInput = document.querySelector("#date");

if (dateInput) {

  const today = new Date();

  const localDate =
    new Date(
      today.getTime() -
      today.getTimezoneOffset() * 60000
    );

  dateInput.min =
    localDate.toISOString().split("T")[0];

}


// ================================
// RESERVATION FORM
// ================================

const bookingForm =
  document.querySelector("#bookingForm");

const successMessage =
  document.querySelector("#successMessage");


bookingForm.addEventListener("submit", (event) => {

  event.preventDefault();

  successMessage.classList.add("show");

  bookingForm.reset();

  setTimeout(() => {

    successMessage.classList.remove("show");

  }, 7000);

});


// ================================
// HEADER ON SCROLL
// ================================

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.style.background =
      "rgba(18,18,16,.95)";

  } else {

    header.style.background =
      "transparent";

  }

});