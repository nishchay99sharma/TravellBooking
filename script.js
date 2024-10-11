// Hamburger Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the active class on nav links
});

// User Dropdown Toggle
const userMenu = document.querySelector(".user-menu img");
const dropdown = document.querySelector(".user-menu .dropdown");

userMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the click from closing immediately
  dropdown.classList.toggle("active");
});

//   Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!userMenu.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

const testimonials = document.querySelectorAll(".testimonial"); // Get all testimonials
const prevButton = document.querySelector(".prev"); // Get previous button
const nextButton = document.querySelector(".next"); // Get next button

let currentIndex = 0; // Start at the first testimonial

// Function to show the current testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active"); // Hide all testimonials
    if (i === index) {
      testimonial.classList.add("active"); // Show the current testimonial
    }
  });
}

// Previous button click event
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1; // Decrease index or loop back
  showTestimonial(currentIndex); // Show the selected testimonial
});

// Next button click event
nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0; // Increase index or loop back
  showTestimonial(currentIndex); // Show the selected testimonial
});

// Initially show the first testimonial
showTestimonial(currentIndex);


  // Dark Mode Toggle
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;

  // Check if dark mode is already enabled (from previous session)
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save dark mode preference to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", null);
    }
  });

   // Function to update countdown timers
   function updateCountdowns() {
    const countdowns = document.querySelectorAll('.countdown');

    countdowns.forEach(countdown => {
      const expiryDate = new Date(countdown.getAttribute('data-expiry')).getTime();
      const now = new Date().getTime();
      const timeLeft = expiryDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Update the timer display
      const timerDisplay = countdown.querySelector('.timer');
      if (timeLeft > 0) {
        timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        timerDisplay.innerHTML = "EXPIRED";
      }
    });
  }
    // Call updateCountdowns initially
    updateCountdowns();

    // Update countdown every second
    setInterval(updateCountdowns, 1000);

