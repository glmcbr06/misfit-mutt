// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to the contact section when the "Contact" link is clicked
    var scrollLinks = document.querySelectorAll('.scroll-to-contact');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

        // Add event listener for scroll to handle fixed header
    document.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var scrollPosition = window.scrollY;

        // Set a threshold scroll position to determine when to add/remove the fixed-header class
        var threshold = 100;

        if (scrollPosition > threshold) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    });
});
