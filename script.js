
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const footerYear = document.querySelector("#footerYear");
const enquiryForm = document.querySelector("#enquiryForm");
const formMessage = document.querySelector("#formMessage");
const productSelect = document.querySelector("#product");


// Current year in the footer
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}


// Mobile navigation
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("active", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// Menu cards select a product in the demo enquiry form
document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    if (productSelect) {
      productSelect.value = product;
    }

    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Demo-only enquiry form
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formMessage) {
      formMessage.textContent =
        "This is a website demo. Enquiries are not sent or stored.";
      formMessage.setAttribute("role", "status");
    }

    enquiryForm.reset();
  });
}


// Prevent selecting dates in the past
const eventDate = document.querySelector("#eventDate");

if (eventDate) {
  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  );

  eventDate.min = localDate.toISOString().split("T")[0];
}
