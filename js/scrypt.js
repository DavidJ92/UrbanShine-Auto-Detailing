document.addEventListener("DOMContentLoaded", function() {
    // Initially hide all sections except "About Us"
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id !== "about") {
            section.style.display = "none";
        }
    });

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    // Toggle the navigation menu when the menu toggle button is clicked
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
